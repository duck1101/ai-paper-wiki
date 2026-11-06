## [2026-11-06] init | 建立專案

- 新建：AGENTS.md、templates/、wiki/overview.md、wiki/index.md、wiki/log.md、網站外殼
- 備註：尚未匯入論文

## [2026-11-06] schema | 調整匯入流程

- 更新：AGENTS.md 第 2、7、9 節，README.md
- 備註：依使用者要求，收到論文後先存入 raw/papers/，再直接建立或更新頁面，最後回報重點，不再等待確認

## [2026-11-06] ingest | Attention Is All You Need

- 新建：papers/vaswani-2017-attention-is-all-you-need.md、models/transformer.md、concepts/scaled-dot-product-attention.md、concepts/multi-head-attention.md、concepts/self-attention.md、concepts/positional-encoding.md
- 更新：overview.md、index.md
- 備註：論文內有兩處不一致，已標記矛盾：英法 BLEU 為 41.8 或 41.0；§6.3 的敘述與 Table 4 的 Luong et al. 數值

## [2026-11-06] schema | 綜合頁換成相關文獻頁

- 新建：templates/reference.md、wiki/reference/
- 更新：AGENTS.md 第 3 至 8 節、README.md、assets/app.js、assets/style.css
- 備註：依使用者要求移除綜合頁類型，刪除 templates/synthesis.md 與空的 wiki/syntheses/

## [2026-11-06] reference | 補充 Attention Is All You Need 的相關文獻

- 新建：reference/bahdanau-2014-neural-machine-translation.md、reference/devlin-2018-bert.md、reference/dosovitskiy-2020-vision-transformer.md
- 更新：papers/vaswani-2017-attention-is-all-you-need.md、models/transformer.md、concepts/scaled-dot-product-attention.md、overview.md、index.md
- 備註：三篇都只讀 arXiv 摘要頁，未下載全文

## [2026-11-06] site | 套用石墨琥珀主題

- 更新：assets/style.css、AGENTS.md 第 10 節
- 備註：依使用者選擇從淺色改為深色主題，論文圖片保留原色
