# AI 論文 Wiki

用繁體中文整理 AI 論文的知識庫。

**網站：** <https://duck1101.github.io/ai-paper-wiki/>

讀論文時，筆記很容易一篇一篇散落各處，讀到後面也忘了前面的內容。這個 Wiki 想解決的就是這件事：每讀一篇新論文，除了留下摘要，也把新知識併入既有的概念頁和模型頁，讓內容互相連結、持續累積。

做法參考 Andrej Karpathy 提出的 LLM Wiki：由我挑選論文、決定重點，AI 負責撰寫與維護交叉連結。維護規則都寫在 [AGENTS.md](AGENTS.md)。

## 目前收錄

- **論文：** [Attention Is All You Need](wiki/papers/vaswani-2017-attention-is-all-you-need.md)（Vaswani et al., 2017）
- **模型：** [Transformer](wiki/models/transformer.md)
- **概念：** [自注意力](wiki/concepts/self-attention.md)、[多頭注意力](wiki/concepts/multi-head-attention.md)、[縮放點積注意力](wiki/concepts/scaled-dot-product-attention.md)、[位置編碼](wiki/concepts/positional-encoding.md)
- **相關文獻：** [Bahdanau 2014](wiki/reference/bahdanau-2014-neural-machine-translation.md)、[BERT](wiki/reference/devlin-2018-bert.md)、[Vision Transformer](wiki/reference/dosovitskiy-2020-vision-transformer.md)（目前只讀過摘要）

## 專案結構

```text
wiki/        所有內容，以 Markdown 撰寫
templates/   各類頁面的範本
raw/         論文原檔，不上傳
assets/      網站的程式與樣式
index.html   網站入口
```

網站沒有建置步驟，瀏覽器會直接讀取 `wiki/` 的 Markdown 來顯示，所以新增內容不用改程式。
