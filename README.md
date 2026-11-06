# AI 論文 Wiki

用繁體中文整理 AI 領域論文的知識庫網站，採用 Karpathy 的 LLM Wiki 模式：由 AI 依照 [AGENTS.md](AGENTS.md) 的規則，把每篇論文整合進持續累積的 Wiki，再發布成網頁。

## 作業題目與要求

生成式 AI 課程第九週作業：建立一個自己的 AGENTS.md 或 CLAUDE.md。

- 設計一個小專案，並寫出讓 AI 理解專案規則、結構與開發方式的文件
- 規則要能讓之後依同一套方式，繼續快速新增頁面或內容
- 專案上傳 GitHub，並有一個可實際瀏覽的網頁
- 繳交期限：11/16 23:59（遲交期限：11/17 16:00）

## 完成方式與重點

| 層 | 位置 | 說明 |
|---|---|---|
| 原始資料 | `raw/` | 論文 PDF，AI 只能讀取 |
| 知識層 | `wiki/` | AI 撰寫的論文頁、概念頁、模型頁與相關文獻頁 |
| 規則層 | `AGENTS.md`、`templates/` | 頁面格式、命名方式與工作流程 |
| 網站 | `index.html`、`assets/` | 直接渲染 `wiki/` 的 Markdown，沒有建置步驟 |

新增內容時只需新增 Markdown 並更新 `wiki/index.md`，不必修改網站程式。

## 如何執行

在這個資料夾內啟動本機伺服器：

```bash
python -m http.server 8000
```

然後開啟 <http://localhost:8000>。直接開啟 `index.html` 無法讀取 Markdown。

## 如何新增內容

1. 把論文 PDF 交給 AI。
2. AI 依 AGENTS.md 把論文存進 `raw/papers/`，建立或更新相關頁面與 `wiki/index.md`，再回報重點與異動的頁面。
3. 用本機伺服器檢查結果，再 commit 並 push。

## 目前進度

- [x] 專案規則、範本與網站外殼
- [x] 匯入第一篇論文
- [ ] 上傳 GitHub 並開啟 GitHub Pages
