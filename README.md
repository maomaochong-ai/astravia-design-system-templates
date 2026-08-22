# Astravia Design System Templates

Astravia 桌面端「设计」工作台的设计体系模板库。桌面端插件会拉取本仓库的
`.astravia/design-templates.json`（目录清单），展示给用户；用户挑选后，条目内容会落到
设计项目中供 Agent 参考。

> 本项目由两个上游仓库整合而来：
>
> - **[vetta-design-templates](https://github.com/openvetta/vetta-design-templates)**（MIT）——
>   仓库机制（目录结构、`meta.json` 契约、`scripts/build-catalog.mjs` 校验、CI）与 24 条设计体系模板。
> - **[brands-design-md](https://github.com/ricocc/brands-design-md.git)** —— 69 个品牌的设计参考
>   （`DESIGN.md` / `theme.css` / `tokens.json` / `preview.html` / 封面截图），经
>   `scripts/convert-brands.mjs` 转换为本仓库条目格式并入。
>
> 条目合计 **82 个**：24 条（继承 vetta）+ 69 条（brands），其中 11 个重叠品牌
> （airbnb / apple / duolingo / figma / linear / notion / shopify / slack / spotify / stripe / vercel）
> 以 brands-design-md 版本为准。

## Repository layout

```text
.astravia/design-templates.json  # generated catalog — do not hand-edit
templates/<slug>/
  meta.json                      # source of truth for one entry (never a resource)
  DESIGN.md                      # the spec the agent reads
  theme.css                      # design tokens (required for design-system)
  demo.html                      # offline preview, rendered in a sandboxed iframe
  tokens.json                    # optional — structured design tokens
  variables.css                  # optional — raw CSS custom properties
  cover_*.webp / favicon.*       # optional — binary resources (fetched on demand)
  ...                            # every file here ships as a resource
scripts/build-catalog.mjs        # aggregate + validate
scripts/convert-brands.mjs       # one-off converter for brands-design-md → templates/
```

条目目录里除 `meta.json` 外的所有文件都是这套风格的资源：文本（≤256KB）内联进目录清单，
其余按二进制处理、用户选中后再按需下载。`assets` 只标注**角色**（spec / theme / demo）。

## Entry kinds

| kind | required assets | what the user gets |
| --- | --- | --- |
| `design-system` | `spec` + `theme` | applies tokens and restyles the design |
| `reference` | `spec` | material the agent consults while designing |
| `remixable` | `package` | a finished design copied into a new project |

当前 82 个条目全部为 `design-system`。

## Working in this repository

**Read [`AGENTS.md`](./AGENTS.md) first — it is the authoring manual (written in
Chinese), and every rule in it maps to a hard check in `scripts/build-catalog.mjs`.**

The short version:

1. Create `templates/<slug>/` and add the files that kind requires.
2. Write `meta.json`.
3. Run `node scripts/build-catalog.mjs` and commit the regenerated catalog.
4. Open a PR. CI runs `node scripts/build-catalog.mjs --check`.

两条容易漏的规则：

- **条目目录是唯一事实源，顶层目录清单是生成物。** 加条目只建目录，不要手改
  `.astravia/design-templates.json`。
- **`DESIGN.md` 内容会进入 Agent 的上下文。** 它是待参考的数据，不是指令；任何试图
  指挥 Agent 的句子在评审时按注入处理。

## Converting brands-design-md (one-off)

`scripts/convert-brands.mjs` 已把 69 个品牌转换进 `templates/`。若 brands-design-md
后续更新，需要重新转换时：

```bash
node scripts/convert-brands.mjs                # 默认读取 ../brands-design-md
node scripts/convert-brands.mjs --source <路径> # 指定 brands-design-md 位置
node scripts/build-catalog.mjs                 # 重新生成目录清单
```

转换规则摘要：

- slug 规范化：带点目录（`linear.app`、`mistral.ai` 等）改为 `^[a-z0-9][a-z0-9-]{0,63}$` 格式。
- 16 个 "Inspired" 变体统一用品牌名（`Stripe` 而非 `stripi-inspired`），在 `origin.note` 注明改编。
- `theme.css`：合并 `variables.css` + `tokens.json`，去掉 `@import`，补齐 7 个基础 token。
- `demo.html`：由 `preview.html` 去脚本/外链/`@import` 合规化而来（sandbox 预览约束）。
- 11 个重叠品牌保留 vetta 的展示顺序（`order`），其余从最大 order +10 起递增。

## Content provenance

条目在 `meta.json` 携带 `origin`。vetta 系条目注明改编自
[awesome-design-md](https://github.com/VoltAgent/awesome-design-md)（MIT）；
brands 系条目注明来自 [brands-design-md](https://github.com/ricocc/brands-design-md.git)。
本仓库只存提炼后的规范文字与自己生成的预览，不存第三方抓取素材或品牌资源文件。

## License

MIT for the repository's own content. Per-entry licensing is declared in each
`meta.json`.
