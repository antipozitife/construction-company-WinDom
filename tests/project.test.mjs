import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => readFile(path.join(root, file), "utf8");

test("документ настроен для русскоязычной страницы", async () => {
  const html = await read("public/index.html");
  assert.match(html, /<html lang="ru">/);
  assert.match(html, /name="description"/);
  assert.doesNotMatch(html, /Construction Company/);
});

test("маршрутизация содержит страницу 404", async () => {
  const routes = await read("src/pages/mainPage.tsx");
  assert.match(routes, /path="\*"/);
  assert.match(routes, /NotFoundPage/);
});

test("ссылка IQ CLUB использует канонический id", async () => {
  const footer = await read("src/components/Footer.tsx");
  assert.match(footer, /projects\/iqclub/);
  assert.doesNotMatch(footer, /projects\/IQClub/);
});

test("в исходниках нет изображений тяжелее 6 МБ", async () => {
  const files = await readdir(path.join(root, "img"));
  for (const file of files) {
    const info = await stat(path.join(root, "img", file));
    assert.ok(info.size < 6 * 1024 * 1024, `${file} слишком большой`);
  }
});

test("production build не хранится в Git", async () => {
  const gitignore = await read(".gitignore");
  assert.match(gitignore, /^build\/$/m);
  assert.match(gitignore, /^node_modules\/$/m);
});
