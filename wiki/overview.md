---
title: AI 論文 Wiki
type: overview
date: 2026-11-06
updated: 2026-11-06
---

## 關於這個網站

這裡用繁體中文整理 AI 領域的論文。內容由 AI 依照專案規則撰寫與維護：每匯入一篇論文，除了新增論文頁，也會更新相關的概念與模型頁，讓知識持續累積。

目前完整收錄 1 篇論文，並有 3 篇只讀摘要的相關文獻。建議從 [Attention Is All You Need](papers/vaswani-2017-attention-is-all-you-need.md) 開始閱讀。

## 領域脈絡

目前的脈絡來自 [Vaswani et al., 2017](papers/vaswani-2017-attention-is-all-you-need.md) 對當時研究狀況的描述（§1、§2），範圍集中在序列模型與機器翻譯。

1. **循環模型**：LSTM 與 GRU 等循環神經網路是序列建模的主流，但必須依序計算，難以平行化。
2. **注意力加上循環模型**：注意力機制讓模型不論距離遠近都能建立依賴關係，但大多仍搭配循環網路使用。
3. **卷積模型**：ByteNet、ConvS2S 等模型能平行計算所有位置，但連結遠距離位置所需的運算量會隨距離增加。
4. **完全以注意力構成**：[Transformer](models/transformer.md) 捨棄循環與卷積，以[自注意力](concepts/self-attention.md)連結所有位置。
5. **延伸應用**：依目前收錄的摘要，[BERT](reference/devlin-2018-bert.md) 把 Transformer 用於預訓練語言模型，[Vision Transformer](reference/dosovitskiy-2020-vision-transformer.md) 則用於影像分類。

## 目前的綜合觀點

目前只有一篇論文讀過全文，以下都是這篇論文的主張，還沒有其他全文可以交叉驗證。

- 只用注意力就能達到當時最佳的翻譯品質。Transformer 在 WMT 2014 英德翻譯達到 28.4 BLEU（Table 2）。
- 這個架構的訓練成本也大幅下降。基礎模型在 8 張 GPU 上訓練 12 小時，就超過先前發表的所有英德翻譯模型（§5.2、§6.1）。
- 它也不限於翻譯。未針對任務細部調整的 Transformer，在英文成分句法剖析上也有不錯的表現（§6.3）。

**解讀：** 下一步最值得完整匯入的是 Transformer 的後續論文，才能查證上述主張，並看出作者提到的非文字應用（§7）後來如何發展。
