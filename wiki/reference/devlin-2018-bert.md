---
title: BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding
type: reference
authors: [Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova]
year: 2018
url: https://arxiv.org/abs/1810.04805
tags: [nlp, transformer, pre-training]
date: 2026-11-06
updated: 2026-11-06
---

> **閱讀範圍：** 本頁只依據 arXiv 摘要頁，尚未閱讀全文。

## 一句話總結

這篇論文提出 BERT，在無標註文本上同時利用左右文脈預訓練模型，再微調用於多種自然語言處理任務。

## 與 Wiki 的關係

- **類型：** 延伸研究
- **關聯：** BERT 全名中的 Transformers，延續了 [Transformer](../models/transformer.md) 這個架構。

**解讀：** [Attention Is All You Need](../papers/vaswani-2017-attention-is-all-you-need.md) 的 Transformer 用於翻譯等序列轉換任務，BERT 則把它用來學習可重複使用的語言表示。

## 摘要重點

- **預訓練：** 在無標註文本上訓練，同時考慮左右兩側的文脈。
- **應用：** 預訓練後只需加上一個輸出層即可微調，能用於問答、語言推論等任務。
- **結果：** 在十一項自然語言處理任務上取得當時最佳結果，其中 GLUE 分數達到 80.5%。

## 相關頁面

- [Attention Is All You Need](../papers/vaswani-2017-attention-is-all-you-need.md)：提出本文所延伸架構的論文
- [Transformer](../models/transformer.md)：BERT 使用的架構
