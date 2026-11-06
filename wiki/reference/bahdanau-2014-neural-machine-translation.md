---
title: Neural Machine Translation by Jointly Learning to Align and Translate
type: reference
authors: [Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio]
year: 2014
venue: ICLR 2015
url: https://arxiv.org/abs/1409.0473
tags: [nlp, attention, machine-translation]
date: 2026-11-06
updated: 2026-11-06
---

> **閱讀範圍：** 本頁只依據 arXiv 摘要頁，尚未閱讀全文。

## 一句話總結

這篇論文讓翻譯模型在預測每個目標詞時，自動在來源句中軟性搜尋相關部分，不必把整句壓縮成固定長度的向量。

## 與 Wiki 的關係

- **類型：** 參考文獻
- **關聯：** 這是 [Attention Is All You Need](../papers/vaswani-2017-attention-is-all-you-need.md) 的文獻 [2]。該論文把它列為加法注意力的來源，並引用它說明注意力能不受距離限制地建立依賴關係（§1、§3.2.1）。

## 摘要重點

- **問題：** 作者認為，傳統編碼器－解碼器架構使用固定長度的向量，會限制翻譯效能。
- **做法：** 模型預測每個目標詞時，會自動軟性搜尋來源句中相關的部分。
- **結果：** 英譯法的表現可與當時最先進的片語式統計翻譯系統相當，模型學到的對齊結果也符合直觀判斷。

## 相關頁面

- [Attention Is All You Need](../papers/vaswani-2017-attention-is-all-you-need.md)：引用本文的論文
- [縮放點積注意力](../concepts/scaled-dot-product-attention.md)：與本文的加法注意力相比較的做法
