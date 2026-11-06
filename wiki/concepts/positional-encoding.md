---
title: 位置編碼（Positional Encoding）
type: concept
tags: [transformer, embedding]
date: 2026-11-06
updated: 2026-11-06
---

## 定義

位置編碼是加到輸入嵌入上的向量，用來提供 token 在序列中的相對或絕對位置資訊。它的維度和嵌入相同（$d_{\text{model}}$），兩者可以直接相加（[Vaswani et al., 2017](../papers/vaswani-2017-attention-is-all-you-need.md)，§3.5）。

## 運作方式

位置編碼有可學習與固定兩類做法。[Transformer](../models/transformer.md) 採用固定的做法，使用不同頻率的正弦與餘弦函數（§3.5）：

$$
PE_{(pos,2i)}=\sin\left(pos/10000^{2i/d_{\text{model}}}\right)
$$

$$
PE_{(pos,2i+1)}=\cos\left(pos/10000^{2i/d_{\text{model}}}\right)
$$

其中 $pos$ 是位置，$i$ 是維度。每個維度都對應一個正弦波，波長從 $2\pi$ 到 $10000 \cdot 2\pi$ 構成等比數列（§3.5）。

位置編碼加在編碼器與解碼器堆疊底部的輸入嵌入上，訓練時兩者的總和也會套用 dropout（§3.5、§5.4）。

## 為什麼重要

Transformer 沒有循環也沒有卷積，必須另外注入位置資訊，模型才能利用序列的順序（§3.5）。

作者選擇正弦函數，是基於兩個想法（§3.5）：

- **容易學習相對位置**：作者假設，對任何固定的位移 $k$，$PE_{pos+k}$ 都能表示成 $PE_{pos}$ 的線性函數，所以模型應該能輕易學會依相對位置來關注。
- **可能可以外推**：模型也許能處理比訓練時更長的序列。

作者也實驗過改用可學習的位置嵌入，結果幾乎相同（§3.5）。在 Table 3 的開發集上，可學習版本的 BLEU 是 25.7，正弦版本的基礎模型是 25.8（§6.2）。

**解讀：** 這些理由是作者的假設，論文本身沒有實驗驗證外推能力。論文真正比較的只有兩種做法的翻譯品質，而兩者差異很小。

## 在各論文中的發展

- [Vaswani et al., 2017](../papers/vaswani-2017-attention-is-all-you-need.md)（§3.5、Table 3 列 E）：在完全不用循環與卷積的模型中，採用正弦位置編碼，並與 ConvS2S 使用的可學習位置嵌入比較。

## 相關頁面

- [Attention Is All You Need](../papers/vaswani-2017-attention-is-all-you-need.md)：提出正弦位置編碼的論文
- [Transformer](../models/transformer.md)：使用位置編碼的模型
- [自注意力](../concepts/self-attention.md)：取代循環層後，模型需要位置編碼補上順序資訊
