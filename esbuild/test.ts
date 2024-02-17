import * as esbuild from "esbuild";
import path from "path";
import fs from "fs/promises";
import { existsSync } from "fs";

const entry = path.resolve(__dirname, "..", "src", "index.ts");
const dist = path.resolve(__dirname, "..", "dist");
const out = path.resolve(dist, "esbuild.js");

(async function () {
  if (!existsSync(dist)) {
    await fs.mkdir(dist);
  }
  const ts_content = await fs.readFile(entry, { encoding: "utf-8" });
  const result = await esbuild.transform(ts_content, {
    loader: "ts",
    target: "ES6",
  });

  fs.writeFile(out, result.code);
})();
