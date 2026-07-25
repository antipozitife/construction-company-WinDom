import { readdir, readFile, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const imageDir = path.join(root, "img");
const sourceDirs = [path.join(root, "src")];
const mapping = new Map();

for (const name of await readdir(imageDir)) {
  if (!name.endsWith(".svg")) continue;
  const filePath = path.join(imageDir, name);
  if ((await stat(filePath)).size < 500_000) continue;

  const svg = await readFile(filePath, "utf8");
  const match = svg.match(/data:image\/(jpeg|png);base64,([\s\S]*?)(?=["'])/);
  if (!match) continue;

  const extension = match[1] === "jpeg" ? ".jpg" : ".png";
  const rasterName = name.replace(/\.svg$/, extension);
  await writeFile(
    path.join(imageDir, rasterName),
    Buffer.from(match[2].replace(/\s+/g, ""), "base64"),
  );
  mapping.set(name, rasterName);
}

const updateTree = async (directory) => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await updateTree(filePath);
      continue;
    }
    if (!/\.(css|js|jsx|ts|tsx)$/.test(entry.name)) continue;

    const original = await readFile(filePath, "utf8");
    let updated = original;
    for (const [svgName, rasterName] of mapping) {
      updated = updated.replaceAll(svgName, rasterName);
    }
    if (updated !== original) await writeFile(filePath, updated);
  }
};

for (const directory of sourceDirs) await updateTree(directory);

for (const svgName of mapping.keys()) {
  await unlink(path.join(imageDir, svgName));
}

console.log(`Extracted and relinked ${mapping.size} embedded raster assets.`);
