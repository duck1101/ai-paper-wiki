---
title: 自注意力（Self-Attention）
type: concept
tags: [attention, transformer]
date: 2026-11-06
updated: 2026-11-06
---

## 定義

自注意力又稱內部注意力（intra-attention），是把單一序列中不同位置關聯起來，以計算該序列表示的注意力機制（[Vaswani et al., 2017](../papers/vaswani-2017-attention-is-all-you-need.md)，§2）。在自注意力層中，Query、Key、Value 全部來自同一處（§3.2.3）。

## 運作方式

在 [Transformer](../models/transformer.md) 中，自注意力以[多頭注意力](../concepts/multi-head-attention.md)的形式出現在兩個地方（§3.2.3）：

- **編碼器**：Query、Key、Value 都來自前一層的輸出，每個位置都能關注前一層的所有位置。
- **解碼器**：每個位置只能關注自己與之前的位置。實作方式是在[縮放點積注意力](../concepts/scaled-dot-product-attention.md)的 softmax 輸入中，把不合法連結對應的值設為 $-\infty$，藉此避免資訊往左流動，維持自迴歸特性。

Transformer 沒有循環也沒有卷積，所以要另外加上[位置編碼](../concepts/positional-encoding.md)，模型才能利用序列的順序（§3.5）。

## 為什麼重要

作者以三個標準比較不同層類型：每層計算複雜度、可平行化程度（以最少依序運算數衡量）、任兩位置之間的最長路徑長度（§4、Table 1）。

| 層類型 | 每層複雜度 | 最少依序運算 | 最長路徑長度 |
|---|---|---|---|
| 自注意力 | $O(n^2 \cdot d)$ | $O(1)$ | $O(1)$ |
| 循環 | $O(n \cdot d^2)$ | $O(n)$ | $O(n)$ |
| 卷積 | $O(k \cdot n \cdot d^2)$ | $O(1)$ | $O(\log_k(n))$ |
| 受限自注意力 | $O(r \cdot n \cdot d)$ | $O(1)$ | $O(n/r)$ |

其中 $n$ 是序列長度，$d$ 是表示維度，$k$ 是卷積核大小，$r$ 是受限自注意力的鄰域大小。作者由此歸納出以下幾點：

- **速度**：當 $n$ 小於 $d$ 時，自注意力層比循環層快，而當時機器翻譯的句子表示大多符合這個條件（§4）。
- **平行化**：自注意力只需常數個依序運算就能連結所有位置，循環層則需要 $O(n)$ 個（§4）。
- **遠距離依賴**：路徑越短越容易學習遠距離依賴，自注意力的最長路徑是常數（§4）。
- **可解釋性**：檢視注意力分布時，許多頭的行為看似和句子的語法與語意結構有關（§4、Figure 3 至 5）。

代價是對注意力加權平均後，有效解析度會下降，作者以多頭注意力來彌補（§2）。

**解讀：** 從 Table 1 也看得出長序列時的取捨：自注意力的複雜度隨 $n$ 平方成長，$n$ 大於 $d$ 時就失去速度優勢，這也是作者提出受限自注意力的原因。

## 在各論文中的發展

- [Vaswani et al., 2017](../papers/vaswani-2017-attention-is-all-you-need.md)（§2、§4）：自注意力先前已用於閱讀理解、摘要等任務。作者表示，就其所知，這篇是第一個完全依靠它、不使用與序列對齊的循環網路或卷積的轉換模型。作者也提出受限自注意力，並列為未來工作。

## 相關頁面

- [Attention Is All You Need](../papers/vaswani-2017-attention-is-all-you-need.md)：讓轉換模型完全依靠自注意力的論文
- [Transformer](../models/transformer.md)：以自注意力為核心的模型
- [縮放點積注意力](../concepts/scaled-dot-product-attention.md)：底層的計算方式
- [多頭注意力](../concepts/multi-head-attention.md)：Transformer 使用自注意力的形式
- [位置編碼](../concepts/positional-encoding.md)：為不含循環與卷積的模型補上順序資訊

## 待補

- 匯入後續論文時，補上受限自注意力的實際發展
- 值得之後開頁的主題：循環神經網路、卷積序列模型
