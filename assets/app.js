// 讀取 wiki/ 內的 Markdown 並渲染。新增內容不需要修改這個檔案（見 AGENTS.md 第 10 節）。

const HOME = "overview";
const ROUTE_PATTERN = /^[a-z0-9-]+(\/[a-z0-9-]+)*$/; // 對應 AGENTS.md 第 5 節的檔名規則
const WIKI_ROOT = new URL("wiki/", location.href);
const SITE_TITLE = "AI 論文 Wiki";

const nav = document.getElementById("nav");
const page = document.getElementById("page");

// 數學式要在 Markdown 解析之前處理，否則底線和星號會被當成強調語法。
function mathExtension(name, level, startPattern, pattern, displayMode) {
  return {
    name,
    level,
    start: (src) => src.search(startPattern),
    tokenizer(src) {
      const match = pattern.exec(src);
      if (match) return { type: name, raw: match[0], text: match[1].trim() };
    },
    renderer: (token) =>
      katex.renderToString(token.text, { displayMode, throwOnError: false }),
  };
}

marked.use({
  extensions: [
    mathExtension("mathBlock", "block", /^\$\$/m, /^\$\$([\s\S]+?)\$\$[ \t]*(?:\r?\n+|$)/, true),
    mathExtension("mathInline", "inline", /\$/, /^\$([^\s$](?:[^$\n]*[^\s$])?)\$/, false),
  ],
  // 規則禁止在 Markdown 內寫 HTML，因此一律當純文字顯示。
  renderer: {
    html: (token) => escapeHtml(token.text),
  },
});

function escapeHtml(text) {
  const holder = document.createElement("div");
  holder.textContent = text;
  return holder.innerHTML;
}

function parseFrontmatter(source) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) return { meta: {}, body: source };

  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    meta[key] = /^\[.*\]$/.test(value)
      ? value.slice(1, -1).split(",").map((item) => item.trim()).filter(Boolean)
      : value;
  }
  return { meta, body: source.slice(match[0].length) };
}

async function fetchMarkdown(route) {
  const response = await fetch(new URL(`${route}.md`, WIKI_ROOT));
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.text();
}

// wiki/ 內的相對連結改成網站路由，圖片改成正確的路徑，外部連結開新分頁。
function fixLinks(container, route) {
  const base = new URL(`${route}.md`, WIKI_ROOT);

  for (const link of container.querySelectorAll("a[href]")) {
    const href = link.getAttribute("href");
    if (/^[a-z][a-z0-9+.-]*:/i.test(href)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else if (href.endsWith(".md")) {
      const target = new URL(href, base).href;
      link.href = `#/${target.slice(WIKI_ROOT.href.length, -".md".length)}`;
    }
  }
  for (const image of container.querySelectorAll("img[src]")) {
    image.src = new URL(image.getAttribute("src"), base).href;
    image.loading = "lazy";
  }
}

function renderMeta(meta) {
  const items = [];
  if (Array.isArray(meta.authors)) items.push(escapeHtml(meta.authors.join("、")));
  for (const key of ["year", "venue", "organization"]) {
    if (meta[key]) items.push(escapeHtml(meta[key]));
  }
  if (/^https?:\/\//.test(meta.url || "")) {
    items.push(`<a href="${escapeHtml(meta.url)}">原文</a>`);
  }
  if (meta.updated) items.push(`更新於 ${escapeHtml(meta.updated)}`);

  const tags = Array.isArray(meta.tags) && meta.tags.length
    ? `<p class="tags">${meta.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</p>`
    : "";
  const info = items.length ? `<p class="meta">${items.join(" · ")}</p>` : "";
  return info + tags;
}

async function renderPage() {
  const route = location.hash.replace(/^#\/?/, "") || HOME;
  highlightCurrent(route);
  window.scrollTo(0, 0);

  if (!ROUTE_PATTERN.test(route)) return showNotFound();

  try {
    const { meta, body } = parseFrontmatter(await fetchMarkdown(route));
    const title = meta.title || (route === "log" ? "更新紀錄" : route === "index" ? "全部頁面" : route);
    page.innerHTML =
      `<header><h1>${escapeHtml(title)}</h1>${renderMeta(meta)}</header>` + marked.parse(body);
    fixLinks(page, route);
    document.title = route === HOME ? SITE_TITLE : `${title} | ${SITE_TITLE}`;
  } catch {
    showNotFound();
  }
}

function showNotFound() {
  page.innerHTML = `<header><h1>找不到這個頁面</h1></header><p><a href="#/${HOME}">回到首頁</a></p>`;
  document.title = SITE_TITLE;
}

// 側欄由 wiki/index.md 產生：每個 ## 是一個分類，分類內的連結是頁面。
async function renderNav() {
  const source = await fetchMarkdown("index");
  const sections = [];
  for (const line of source.split(/\r?\n/)) {
    const heading = /^##\s+(.+)$/.exec(line);
    const entry = /^-\s+\[([^\]]+)\]\(([^)]+)\.md\)/.exec(line);
    if (heading) sections.push({ name: heading[1], pages: [] });
    else if (entry && sections.length) {
      sections.at(-1).pages.push({ title: entry[1], route: entry[2] });
    }
  }

  const links = (pages) =>
    pages.map(({ title, route }) => `<li><a href="#/${route}">${escapeHtml(title)}</a></li>`).join("");

  nav.innerHTML =
    `<ul>${links([
      { title: "總覽", route: HOME },
      { title: "全部頁面", route: "index" },
      { title: "更新紀錄", route: "log" },
    ])}</ul>` +
    sections
      .map(({ name, pages }) => `<h2>${escapeHtml(name)}</h2>` +
        (pages.length ? `<ul>${links(pages)}</ul>` : `<p class="empty">尚無內容</p>`))
      .join("");
}

function highlightCurrent(route) {
  for (const link of nav.querySelectorAll("a")) {
    const isCurrent = link.getAttribute("href") === `#/${route}`;
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  }
}

window.addEventListener("hashchange", renderPage);
renderNav()
  .catch(() => { nav.innerHTML = `<p class="empty">目錄載入失敗</p>`; })
  .finally(renderPage);
