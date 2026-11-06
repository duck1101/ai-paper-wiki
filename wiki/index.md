## 論文

- [Vaswani 2017：Attention Is All You Need](papers/vaswani-2017-attention-is-all-you-need.md)：提出完全以注意力機制構成的 Transformer

## 概念

- [多頭注意力](concepts/multi-head-attention.md)：平行執行多組注意力，同時關注不同的表示子空間
- [自注意力](concepts/self-attention.md)：在單一序列內計算不同位置之間的關聯
- [位置編碼](concepts/positional-encoding.md)：為不含循環與卷積的模型提供順序資訊
- [縮放點積注意力](concepts/scaled-dot-product-attention.md)：以 $\sqrt{d_k}$ 縮放點積的注意力計算方式

## 模型

- [Transformer](models/transformer.md)：捨棄循環與卷積的編碼器－解碼器序列轉換模型

## 相關文獻

- [Bahdanau 2014：Neural Machine Translation](reference/bahdanau-2014-neural-machine-translation.md)：讓翻譯模型在預測時軟性搜尋來源句，是 Vaswani et al. 引用的文獻
- [Devlin 2018：BERT](reference/devlin-2018-bert.md)：同時利用左右文脈預訓練的 Transformer 語言模型
- [Dosovitskiy 2020：Vision Transformer](reference/dosovitskiy-2020-vision-transformer.md)：把影像圖塊序列直接輸入純 Transformer 做影像分類
