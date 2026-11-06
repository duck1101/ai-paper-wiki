---
title: An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale
type: reference
authors: [Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob Uszkoreit, Neil Houlsby]
year: 2020
venue: ICLR
url: https://arxiv.org/abs/2010.11929
tags: [computer-vision, transformer, image-classification]
date: 2026-11-06
updated: 2026-11-06
---

> **閱讀範圍：** 本頁只依據 arXiv 摘要頁，尚未閱讀全文。

## 一句話總結

這篇論文提出 Vision Transformer（ViT），把影像切成圖塊序列後直接輸入純 Transformer 來做影像分類，不必依賴卷積網路。

## 與 Wiki 的關係

- **類型：** 延伸研究
- **關聯：** 它把 [Transformer](../models/transformer.md) 用在影像上。[Attention Is All You Need](../papers/vaswani-2017-attention-is-all-you-need.md) 的作者曾表示，計畫把 Transformer 延伸到圖片等文字以外的資料（§7）。兩篇論文都有 Jakob Uszkoreit 參與。

## 摘要重點

- **背景：** Transformer 已是自然語言處理的主流架構，但在電腦視覺的應用有限，多半搭配卷積網路使用或只取代部分元件。
- **做法：** 把影像切成多個圖塊組成序列，直接輸入純 Transformer。
- **結果：** 在大規模資料上預訓練，再遷移到 ImageNet、CIFAR-100、VTAB 等基準後，表現可與當時最先進的卷積網路相比，所需的運算資源明顯較少。

## 相關頁面

- [Attention Is All You Need](../papers/vaswani-2017-attention-is-all-you-need.md)：提出本文所延伸架構的論文
- [Transformer](../models/transformer.md)：ViT 使用的架構
