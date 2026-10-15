// Renders every page to static HTML in dist/, so content is readable before (and without) JS.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render } = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href);
const { PAGES, SITE, PERSON, AWARD, EMAIL, GITHUB } = await import(pathToFileURL(path.resolve("src/data.js")).href);

const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON.legal,
  alternateName: PERSON.name,
  url: SITE + "/",
  email: "mailto:" + EMAIL,
  address: { "@type": "PostalAddress", addressLocality: "Hong Kong" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "The Hong Kong University of Science and Technology" },
  award: `${AWARD.title} (sponsored by bolttech), ${AWARD.event}, Oct 2026`,
  knowsAbout: ["Industrial engineering", "Operations research", "LLM application design", "LLM evaluation", "AI agents", "Optimization", "Machine learning"],
  knowsLanguage: ["Cantonese", "English", "Mandarin"],
  sameAs: [GITHUB],
};

for (const p of PAGES) {
  const url = SITE + (p.id === "404" ? "/404.html" : p.path);
  const head = [
    `<title>${esc(p.title)}</title>`,
    `<meta name="description" content="${esc(p.desc)}">`,
    p.noindex ? `<meta name="robots" content="noindex">` : `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="${p.id === "home" ? "profile" : "article"}">`,
    `<meta property="og:title" content="${esc(p.title)}">`,
    `<meta property="og:description" content="${esc(p.desc)}">`,
    `<meta property="og:url" content="${url}">`,
    p.id === "home" ? `<script type="application/ld+json">${JSON.stringify(person)}</script>` : "",
  ].filter(Boolean).join("\n");
  const html = template
    .replace("<!--head-->", head)
    .replace("<!--app-->", render(p.id))
    .replace('"__PAGE_ID__"', JSON.stringify(p.id));
  const out = p.id === "404" ? path.join(dist, "404.html") : path.join(dist, p.path, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log("prerendered", path.relative(dist, out));
}
fs.rmSync(path.resolve("dist-ssr"), { recursive: true, force: true });
