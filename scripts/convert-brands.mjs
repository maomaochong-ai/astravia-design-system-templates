#!/usr/bin/env node
/**
 * 一次性转换脚本：把 brands-design-md 的 69 个品牌目录转换成
 * astravia-design-system-templates 的 templates/<slug>/ 条目格式。
 *
 * 用法:
 *   node scripts/convert-brands.mjs                 # 读取 ../brands-design-md
 *   node scripts/convert-brands.mjs --source <路径>  # 指定 brands-design-md 路径
 *
 * 对每个品牌生成:
 *   templates/<slug>/meta.json   — 条目事实源（schemaVersion 1 / design-system）
 *   templates/<slug>/DESIGN.md   — 规范正文（修复 em-dash 乱码）
 *   templates/<slug>/theme.css   — 7 基础 token + 品牌 token 合并（去掉 @import）
 *   templates/<slug>/demo.html   — preview.html 合规化（去 script/外链/@import）
 *   其余文件(tokens.json/variables.css/cover_*.webp/favicon.*)原样拷贝
 *
 * 规则来源: 本仓库 AGENTS.md + scripts/build-catalog.mjs 的硬校验。
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, copyFileSync, mkdirSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const BRANDS_SRC =
	process.argv.includes("--source")
		? process.argv[process.argv.indexOf("--source") + 1]
		: join(dirname(ROOT), "brands-design-md");
const BRANDS_DIR = join(BRANDS_SRC, "brands");
const OUT_DIR = join(ROOT, "templates");

/** 现有目录的 order 与 meta（vetta 24 条已拷贝，重叠 11 条保留其 order）。 */
function readExistingOrders() {
	const orders = new Map(); // slug -> order
	if (!existsSync(OUT_DIR)) return orders;
	for (const dir of readdirSync(OUT_DIR)) {
		const metaPath = join(OUT_DIR, dir, "meta.json");
		if (!existsSync(metaPath)) continue;
		try {
			const meta = JSON.parse(readFileSync(metaPath, "utf8"));
			if (typeof meta.order === "number") orders.set(dir, meta.order);
		} catch {
			// 忽略损坏的 meta，build-catalog 会拦
		}
	}
	return orders;
}

const COLLECTED_AT = "2026-08-22";
const CATEGORY_MAP = {
	"Travel & Mobility": "consumer",
	"Productivity & SaaS": "productivity",
	"Media & Consumer Tech": "media",
	"Fintech & Crypto": "fintech",
	"Automotive": "premium",
	"Gaming & Entertainment": "playful",
	"AI & LLM Platforms": "ai",
	"Backend, Database & DevOps": "dev",
	"Developer Tools & IDEs": "dev",
	"Education & Learning": "playful",
	"Design & Creative Tools": "creative",
	"Enterprise Technology": "premium",
	"E-commerce & Retail": "commerce",
	"Aerospace & Frontier Tech": "premium",
};

/** 目录名 → 合法 slug（带点目录规范化）。linear.app 规范为 linear，与 vetta 条目重叠并按决策覆盖。 */
const SLUG_MAP = {
	"linear.app": "linear",
	"mistral.ai": "mistral-ai",
	"opencode.ai": "opencode-ai",
	"together.ai": "together-ai",
	"x.ai": "x-ai",
};

/** registry name → 展示名（Inspired 变体规范为品牌名）。 */
const NAME_MAP = {
	"Sentri-Inspired": "Sentry",
	"Shopifi-Inspired": "Shopify",
	"Slacc-Inspired": "Slack",
	"Spacex-Inspired": "SpaceX",
	"Stripi-Inspired": "Stripe",
	"Supabaze-Inspired": "Supabase",
	"Superhumon-Inspired": "Superhuman",
	"Together-AI-Inspired": "Together AI",
	"Uber-Inspired": "Uber",
	"Vodafone-Inspired": "Vodafone",
	"Voltagent-Inspired": "Voltagent",
	"Warp-Inspired": "Warp",
	"Webflow-Inspired": "Webflow",
	"Wired-Inspired": "Wired",
	"Wise-Inspired": "Wise",
	"Zapier-Inspired": "Zapier",
	"Mistral-AI": "Mistral",
	"SpaceXAI": "xAI",
};

/** 69 条双语 tagline（en 提炼自 registry.description，zh 为翻译）。 */
const TAGLINES = {
	airbnb: { en: "Warm white hospitality, coral CTAs, friendly rounded forms", zh: "暖白待客之道，珊瑚色 CTA，圆润友好的形态" },
	airtable: { en: "Sober editorial workflow, white canvas with dark ink type", zh: "克制的编辑风工作台，白底深墨" },
	apple: { en: "Photography-first museum gallery, one Action Blue accent", zh: "摄影优先的展厅，单一 Action Blue 强调色" },
	binance: { en: "Deep black canvas with iconic yellow brand voltage", zh: "深黑画布 + 标志性黄色能量" },
	bmw: { en: "Measured corporate blue on a cream canvas", zh: "奶油画布上的稳重企业蓝" },
	"bmw-m": { en: "Motorsport near-black stage with M tricolor signature", zh: "近黑赛道舞台，M 三色签名" },
	bugatti: { en: "Austere luxury: pure black, white uppercase display", zh: "克制的奢华：纯黑 + 白色大写标题" },
	cal: { en: "Clean calendar-first white canvas with black CTAs", zh: "日历优先的洁净白底 + 黑色 CTA" },
	caldera: { en: "Warm limestone, molten orange, oversized condensed type", zh: "暖石灰岩、熔岩橙、超大压缩字体" },
	claude: { en: "Warm cream canvas with coral CTAs and serif display", zh: "暖奶油画布，珊瑚 CTA 与衬线标题" },
	clay: { en: "Claymation-meets-data, playful yet precise", zh: "黏土动画 × 数据，俏皮而精确" },
	clickhouse: { en: "Near-black DB canvas with electric yellow voltage", zh: "近黑数据库画布 + 电光黄" },
	cohere: { en: "Stark white editorial space with deep green control", zh: "纯白编辑空间，深绿掌控" },
	composio: { en: "Dark technical dev-tool aesthetic for agent tools", zh: "暗色技术风的 Agent 工具品牌" },
	cursor: { en: "Warm-quiet confidence for an AI code editor", zh: "AI 代码编辑器的温润自信" },
	duolingo: { en: "Playful storybook white paper with chubby rounded type", zh: "童话书般的白纸，圆润童趣字体" },
	elevenlabs: { en: "Quiet editorial print-magazine calm for voice AI", zh: "语音 AI 的编辑部式沉静" },
	expo: { en: "Quietly-confident infrastructure blue on black", zh: "黑底上低调自信的基础设施蓝" },
	figma: { en: "Black-white editorial frame with pastel color blocks", zh: "黑白编辑框架 + 马卡龙色块" },
	framer: { en: "Dark artboard builder, pure black with electric blue", zh: "纯黑画布建站，电光蓝点缀" },
	hashicorp: { en: "Enterprise infra on near-black with precise blues", zh: "近黑底上的企业基础设施，精确蓝" },
	ibm: { en: "Faithful Carbon Design System: white, charcoal, IBM Blue", zh: "忠于 Carbon 设计系统：白、炭黑、IBM 蓝" },
	intercom: { en: "Editorial cream-white ground with charcoal type", zh: "奶油白底编辑风 + 炭黑文字" },
	kraken: { en: "Clean trustworthy crypto with commanding purple", zh: "可信赖的加密交易所，紫色主导" },
	lamborghini: { en: "Cathedral of darkness with gold accents", zh: "黑暗大教堂，金色点缀" },
	linear: { en: "Near-black product canvas with iris violet accents", zh: "近黑产品画布 + 鸢尾紫强调" },
	lovable: { en: "Warm parchment restraint, creamy and human", zh: "羊皮纸般的温暖克制" },
	mastercard: { en: "Warm editorial magazine of soft stone and signal orange", zh: "软石质感 + 信号橙的暖编辑部" },
	mintlify: { en: "Dual-mode docs: sky gradient marketing, crisp code", zh: "双模式文档：天空渐变营销 + 清晰代码" },
	"mistral-ai": { en: "Atmospheric sunset gradients as brand signature", zh: "氛围感日落渐变作为品牌签名" },
	mongodb: { en: "Deep teal heroes with bright MongoDB green", zh: "深青英雄区 + 明亮 Mongo 绿" },
	nike: { en: "Photography-first commerce with towering Futura display", zh: "摄影优先的电商，高耸 Futura 大字" },
	notion: { en: "Confident all-in-one workspace, illustration-rich", zh: "自信的 All-in-one 工作台，插画丰富" },
	nvidia: { en: "Engineering-grade black with NVIDIA green", zh: "工程级黑 + NVIDIA 绿" },
	ollama: { en: "Defiantly minimal, README-like documentation-first", zh: "倔强极简，README 式文档优先" },
	"opencode-ai": { en: "Terminal-native, everything in Berkeley Mono", zh: "终端原生，全站 Berkeley Mono" },
	pinterest: { en: "Photography-first discovery with Pinterest Red CTAs", zh: "摄影优先的发现流 + Pinterest 红 CTA" },
	playstation: { en: "Three-surface chapters of black, white and PlayStation Blue", zh: "黑、白、PlayStation 蓝三幕章节" },
	posthog: { en: "Playful cream canvas with hedgehog mascots", zh: "俏皮奶油画布 + 刺猬吉祥物" },
	raycast: { en: "Extended product screenshot; chrome IS the product", zh: "产品截图的延伸，UI 即产品" },
	renault: { en: "Fresh flat rhombus mark with bold signal yellow", zh: "全新扁平菱形标识 + 大胆信号黄" },
	replicate: { en: "Warm-cream indie ML playground with red accents", zh: "暖奶油独立 ML 游乐场 + 红色点缀" },
	resend: { en: "Near-pure black with a single signature color", zh: "近纯黑底 + 单一签名色" },
	revolut: { en: "Stark black with cobalt-violet voltage", zh: "冷峻黑 + 钴紫能量" },
	runwayml: { en: "Cinematic dark editorial, film-production grade", zh: "电影级暗色编辑风" },
	sanity: { en: "Nocturnal command center, dark and precise", zh: "夜间指挥中心，暗色精确" },
	sentry: { en: "Deep purple-violet developer-tools calm", zh: "深紫罗兰开发者工具的沉静" },
	shopify: { en: "Cinematic commerce on two parallel surfaces", zh: "双平行表面的电影感电商" },
	slack: { en: "Deep aubergine workplace messaging", zh: "深茄紫的工作协作消息" },
	spacex: { en: "Mission-oriented pure black aerospace", zh: "任务导向的纯黑航天" },
	spotify: { en: "Immersive near-black music cocoon", zh: "沉浸式近黑音乐茧" },
	starbucks: { en: "Warm confident retail in storefront green", zh: "门店绿包裹的温暖自信零售" },
	stripe: { en: "Deep navy financial infrastructure", zh: "深海军蓝金融基础设施" },
	supabase: { en: "Clean open-source database with bright green", zh: "清爽开源数据库 + 明亮绿" },
	superhuman: { en: "Fast email split between ink and light", zh: "墨色与亮白之间的极速邮件" },
	tesla: { en: "Radical subtraction; the product is everything", zh: "激进减法，产品即一切" },
	theverge: { en: "Condé Nast wired to a chiptune soundboard", zh: "康泰纳仕 × 芯片音乐合成器" },
	"together-ai": { en: "AI infrastructure alternating black and white", zh: "黑白交替的 AI 基础设施" },
	uber: { en: "Black surface super-app with white type", zh: "黑面超级应用 + 白字" },
	vercel: { en: "Stark black developer platform", zh: "冷峻黑的开发者平台" },
	"vercel-dark": { en: "True-black Geist with compact white typography", zh: "纯黑 Geist + 紧凑白字" },
	vodafone: { en: "Signal red telecom super-brand", zh: "信号红电信超级品牌" },
	voltagent: { en: "Agent-engineering platform in fresh green", zh: "清新绿的 Agent 工程平台" },
	warp: { en: "Agentic terminal on warm paper tones", zh: "暖纸色调的 Agent 终端" },
	webflow: { en: "Black visual-development canvas", zh: "黑色可视化建站画布" },
	wired: { en: "Flagship tech magazine, pure black surface", zh: "旗舰科技杂志，纯黑表面" },
	wise: { en: "Money-transfer with fresh green gradients", zh: "清新绿渐变的跨境汇款" },
	"x-ai": { en: "Light, verified white canvas with near-black type", zh: "明亮可信的白底 + 近黑文字" },
	zapier: { en: "Workflow automation in signal orange", zh: "信号橙的工作流自动化" },
};

/** tags 规范化：小写、空格转连字符。 */
function normalizeTags(tags) {
	const seen = new Set();
	const out = [];
	for (const tag of tags) {
		const norm = tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
		if (norm && !seen.has(norm)) {
			seen.add(norm);
			out.push(norm);
		}
	}
	return out;
}

/** 从 DESIGN.md 提取 vibe（light/dark）。 */
function extractVibe(designMd, previewColors) {
	const m = designMd.match(/\*\*Theme:\*\*\s*(light|dark)/i);
	if (m) return m[1].toLowerCase();
	// 兜底：从 previewColors 平均亮度推断
	const lum = previewColors
		.map((hex) => {
			const v = hex.replace("#", "");
			const r = parseInt(v.slice(0, 2), 16) / 255;
			const g = parseInt(v.slice(2, 4), 16) / 255;
			const b = parseInt(v.slice(4, 6), 16) / 255;
			return 0.2126 * r + 0.7152 * g + 0.0722 * b;
		})
		.reduce((a, b) => a + b, 0) / previewColors.length;
	return lum > 0.5 ? "light" : "dark";
}

/** 解析 variables.css 的 :root 变量为 map。 */
function parseVariables(css) {
	const map = {};
	const re = /--([a-zA-Z0-9_-]+)\s*:\s*([^;]+);/g;
	let m;
	while ((m = re.exec(css))) map[m[1]] = m[2].trim();
	return map;
}

/** 解析 tokens.json 的 color 对象（$value 直取或 { light, dark } 取第一个）。 */
function parseTokenColors(tokens) {
	const map = {};
	if (tokens?.color) {
		for (const [k, v] of Object.entries(tokens.color)) {
			if (v && typeof v === "object" && v.$value !== undefined) {
				map[k] = typeof v.$value === "string" ? v.$value : JSON.stringify(v.$value);
			}
		}
	}
	return map;
}

/** HSL 饱和度(0..1)。 */
function saturation(hex) {
	const v = hex.replace("#", "");
	if (v.length < 6) return 0;
	const r = parseInt(v.slice(0, 2), 16) / 255;
	const g = parseInt(v.slice(2, 4), 16) / 255;
	const b = parseInt(v.slice(4, 6), 16) / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	if (max === min) return 0;
	const d = max - min;
	return d / (1 - Math.abs(2 * l - 1));
}

/** 推断 7 个基础 token + 附加 token。 */
function deriveThemeTokens({ tokenColors, variables, previewColors, vibe }) {
	const pick = (...keys) => {
		for (const k of keys) {
			if (tokenColors[k] && /^#[0-9a-fA-F]{3,8}$/.test(tokenColors[k])) return tokenColors[k];
		}
		return undefined;
	};
	const pc = previewColors;
	const isDark = vibe === "dark";

	const primary = pick("primary", "brand", "action", "cta") ?? pc[0] ?? (isDark ? "#ffffff" : "#111111");
	const primaryForeground = pick("on-primary", "on-brand", "primary-foreground") ?? (luminance(primary) > 0.6 ? "#000000" : "#ffffff");
	// surface：暗色体系不要把 paper/white 这类文字色当表面色
	const surface =
		pick("canvas", "surface", "surface-card", "background", "bg", ...(isDark ? ["void", "carbon", "obsidian", "graphite"] : ["paper", "white"])) ??
		(isDark ? "#0a0a0a" : "#ffffff");
	const surfaceForeground =
		pick("ink", "text", "foreground", "body", "content", "on-surface", ...(isDark ? ["paper", "bone", "mist"] : [])) ??
		(luminance(surface) > 0.6 ? "#111111" : "#f5f5f5");
	const muted = pick("muted", "muted-soft", "secondary", "subtle", "neutral") ?? (luminance(surface) > 0.6 ? "#6a6a6a" : "#9a9a9a");
	// accent：优先显式 accent token；其次 tokenColors 里饱和度最高且非 primary 的颜色；再退回预览色
	const accent =
		pick("accent", "highlight", "secondary-accent") ??
		(() => {
			let best = undefined;
			let bestSat = 0;
			for (const [k, v] of Object.entries(tokenColors)) {
				if (!/^#[0-9a-fA-F]{3,8}$/.test(v)) continue;
				if (v.toLowerCase() === primary.toLowerCase()) continue;
				if (["danger", "error", "red", "primary-error-text", "scrim"].includes(k)) continue;
				const s = saturation(v);
				if (s > bestSat) {
					best = v;
					bestSat = s;
				}
			}
			return bestSat > 0.5 ? best : undefined;
		})() ??
		pc[1] ??
		primary;
	const danger = pick("danger", "error", "red", "primary-error-text") ?? (isDark ? "#f87171" : "#dc2626");
	const border = pick("border", "hairline", "border-strong") ?? (luminance(surface) > 0.6 ? "#e5e5e5" : "#2a2a2a");
	const raised = pick("surface-raised", "surface-strong", "surface-soft") ?? (isDark ? "#141414" : "#f7f7f7");

	return {
		"--color-primary": primary,
		"--color-primary-foreground": primaryForeground,
		"--color-surface": surface,
		"--color-surface-foreground": surfaceForeground,
		"--color-surface-raised": raised,
		"--color-muted": muted,
		"--color-accent": accent,
		"--color-danger": danger,
		"--color-border": border,
	};
}

function luminance(hex) {
	const v = hex.replace("#", "");
	if (v.length < 6) return 0.5;
	const r = parseInt(v.slice(0, 2), 16) / 255;
	const g = parseInt(v.slice(2, 4), 16) / 255;
	const b = parseInt(v.slice(4, 6), 16) / 255;
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * theme.css：去掉 @import，把 :root 变量并入，@theme 里 var(--x) 全部换成实值，
 * 补 7 基础 token 与附加 token。
 */
function buildThemeCss(originalTheme, variablesCss, tokensJson, previewColors, vibe) {
	const variables = parseVariables(variablesCss);
	const tokenColors = parseTokenColors(tokensJson);
	const base = deriveThemeTokens({ tokenColors, variables, previewColors, vibe });

	let css = originalTheme;
	css = css.replace(/@import\s+[^;]+;/g, ""); // 去掉 @import 行
	css = css.replace(/:root\s*\{[^}]*\}/g, ""); // 去掉已有 :root（内容并入 @theme）
	// var(--x) → 实值
	css = css.replace(/var\(--([a-zA-Z0-9_-]+)\)/g, (_, name) => variables[name] ?? base[`--color-${name}`] ?? `var(--${name})`);

	// 组装新的 @theme 块：基础 token 在前，品牌 token 保留（同名基础 token 已由推断值定义，过滤掉）
	const baseNames = new Set(Object.keys(base));
	const brandTokens =
		(css.match(/@theme\s*\{([\s\S]*)\}/)?.[1] ?? "")
			.split("\n")
			.filter((line) => {
				const m = line.match(/^\s*(--[a-zA-Z0-9_-]+)\s*:/);
				return !m || !baseNames.has(m[1]);
			})
			.join("\n");
	const baseLines = Object.entries(base).map(([k, v]) => `\t${k}: ${v};`).join("\n");
	const themeBlock = `@theme {\n${baseLines}\n\n/* 品牌 token（来自 brands-design-md） */\n${brandTokens.trim()}\n}`;
	return `/* ${basename(OUT_DIR)} — ${vibe === "dark" ? "dark" : "light"} design system, converted from brands-design-md. */\n${themeBlock}\n`;
}

/** 修复 DESIGN.md 的 em-dash 乱码（? 还原为 – / —）。 */
function fixDesignMd(text) {
	return text
		.replace(/(\d)\?(\d)/g, "$1–$2")
		.replace(/ \? /g, " — ");
}

/**
 * preview.html → demo.html 合规化：
 * 1) 删 <script> 块；2) 删外链 <link>（preconnect/stylesheet）；
 * 3) 删外链 <img>（src=https://）；4) 外链 <a href=https://> 改为 href="#"
 * 5) 删 @import。校验规则见 build-catalog.mjs validateDemo。
 */
/**
 * 去入场动画：brands 的 preview.html 大量用 JS 触发的入场动画
 * （元素初始 opacity:0 + translateY，脚本加载后淡入/滑入）。
 * 删掉 script 后这些元素永远停留在不可见状态，demo 打开是空白页。
 * 处理：把「含 opacity:0 且同规则含 transition/animation」的规则中
 * opacity:0 → opacity:1，并去掉 translateY/translateX 位移声明。
 */
/** 括号配对解析 CSS 顶层规则，返回 { sel, body, bodyStart, bodyEnd }。 */
function splitCssRules(css) {
	const rules = [];
	const stack = [];
	let selStart = 0;
	for (let i = 0; i < css.length; i++) {
		const c = css[i];
		if (c === "{") {
			stack.push({ sel: css.slice(selStart, i), bodyStart: i + 1 });
			selStart = -1;
		} else if (c === "}") {
			const r = stack.pop();
			if (r && stack.length === 0) {
				rules.push({ sel: r.sel, body: css.slice(r.bodyStart, i), bodyStart: r.bodyStart, bodyEnd: i });
				selStart = i + 1;
			}
		}
	}
	return rules;
}

function stripEntranceAnimations(css) {
	const patches = [];
	for (const rule of splitCssRules(css)) {
		const sel = rule.sel.trim();
		if (!/opacity\s*:\s*0(?:\.\d+)?\s*;?/i.test(rule.body)) continue;
		if (!/transition|animation/i.test(rule.body)) continue;
		if (/^@/.test(sel) || rule.body.includes("{")) continue; // @media/@keyframes 容器
		if (/hover|focus|active|before|after|disabled|checked|loading|:not|\.visible|::/i.test(sel)) continue;
		const fixed = rule.body
			.replace(/opacity\s*:\s*0(?:\.\d+)?\s*;?/i, "opacity:1;")
			.replace(/transform\s*:\s*translate[XY]?\([^)]*\)\s*;?/gi, "");
		patches.push({ start: rule.bodyStart, end: rule.bodyEnd, text: fixed });
	}
	let out = css;
	for (const p of patches.reverse()) out = out.slice(0, p.start) + p.text + out.slice(p.end);
	return out;
}


function toDemoHtml(html) {
	let out = html;
	out = out.replace(/<script[\s\S]*?<\/script>/gi, "");
	out = out.replace(/<link[^>]*rel=["']preconnect["'][^>]*>/gi, "");
	out = out.replace(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi, "");
	out = out.replace(/<img[^>]*src=["']https?:\/\/[^"']*["'][^>]*\/?>/gi, "");
	out = out.replace(/(<a\b[^>]*?)(href=["'])https?:\/\/[^"']*(["'][^>]*>)/gi, "$1$2#$3");
	out = out.replace(/@import\s+[^;]+;/g, "");
	// 把引用本地文件的下载链接 href 改为 #，避免 sandbox 里 404
	out = out.replace(/(<a\b[^>]*?)(href=["'])(?!https?:\/\/|#)([^"']*)(["'][^>]*>)/gi, "$1$2#$4");
	// 去入场动画（必须在删 script 之后，此时脚本不再会触发淡入）
	out = out.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, (m) => stripEntranceAnimations(m));
	return out;
}

/** blurb：从 description 截断为一句（句号结束，≤180 字符）。 */
function makeBlurb(description) {
	const sentences = description.split(/(?<=\.)\s+/);
	let out = sentences[0] ?? description;
	if (out.length > 180) out = out.slice(0, 177).trimEnd() + "…";
	return out;
}

function main() {
	const registry = JSON.parse(readFileSync(join(BRANDS_SRC, "registry.json"), "utf8"));
	const existingOrders = readExistingOrders();
	let nextOrder = Math.max(0, ...existingOrders.values()) + 10;
	const errors = [];
	const skipped = [];

	mkdirSync(OUT_DIR, { recursive: true });

	for (const brand of registry) {
		const srcDir = join(BRANDS_DIR, brand.folder);
		if (!existsSync(srcDir)) {
			skipped.push(`${brand.folder}: 目录不存在`);
			continue;
		}
		const slug = SLUG_MAP[brand.folder] ?? brand.folder.toLowerCase();
		if (!/^[a-z0-9][a-z0-9-]{0,63}$/.test(slug)) {
			errors.push(`${brand.folder}: slug "${slug}" 不符合格式`);
			continue;
		}
		const name = NAME_MAP[brand.name] ?? brand.name;
		const tagline = TAGLINES[slug];
		if (!tagline) {
			errors.push(`${slug}: 缺少 tagline 映射`);
			continue;
		}

		const designMd = readFileSync(join(srcDir, "DESIGN.md"), "utf8");
		const vibe = extractVibe(designMd, brand.previewColors);
		const demoHtml = toDemoHtml(readFileSync(join(srcDir, "preview.html"), "utf8"));
		const themeCss = buildThemeCss(
			readFileSync(join(srcDir, "theme.css"), "utf8"),
			readFileSync(join(srcDir, "variables.css"), "utf8"),
			JSON.parse(readFileSync(join(srcDir, "tokens.json"), "utf8")),
			brand.previewColors,
			vibe,
		);

		const isInspired = /-Inspired$/i.test(brand.name);
		// 重叠品牌（11 个）保留 vetta 原 order，保持展示位置；新品牌从最大 order+10 起递增。
		const order = existingOrders.get(slug) ?? (nextOrder += 10);
		const meta = {
			schemaVersion: 1,
			kind: "design-system",
			slug,
			name,
			version: "1.0.0",
			order,
			category: CATEGORY_MAP[brand.category] ?? "productivity",
			vibe,
			tags: normalizeTags(brand.tags),
			blurb: makeBlurb(brand.description),
			tagline,
			license: "MIT",
			origin: {
				type: "curated",
				upstream: "https://github.com/ricocc/brands-design-md.git",
				note: isInspired
					? `from brands-design-md (${brand.name}); unofficial inspired variant.`
					: `from brands-design-md (${brand.name}).`,
			},
			assets: { spec: "DESIGN.md", theme: "theme.css", demo: "demo.html" },
			collectedAt: COLLECTED_AT,
		};

		// 写目录
		const outDir = join(OUT_DIR, slug);
		mkdirSync(outDir, { recursive: true });
		writeFileSync(join(outDir, "meta.json"), `${JSON.stringify(meta, null, "\t")}\n`);
		writeFileSync(join(outDir, "DESIGN.md"), fixDesignMd(designMd));
		writeFileSync(join(outDir, "theme.css"), themeCss);
		writeFileSync(join(outDir, "demo.html"), demoHtml);

		// 其余文件原样拷贝（tokens.json / variables.css / cover_*.webp / favicon.*）
		for (const file of readdirSync(srcDir)) {
			if (["DESIGN.md", "preview.html", "theme.css"].includes(file)) continue;
			if (file.startsWith(".")) continue;
			copyFileSync(join(srcDir, file), join(outDir, file));
		}
	}

	if (errors.length) {
		console.error(`转换失败（${errors.length} 项）：`);
		for (const e of errors) console.error(`  - ${e}`);
		process.exit(1);
	}
	console.log(`转换完成：${registry.length} 个品牌 → templates/（跳过 ${skipped.length}：${skipped.join("; ")}）`);
}

main();
