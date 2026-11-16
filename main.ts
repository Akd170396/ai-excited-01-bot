// ai-excited-01-bot — the entry program for make.fun's
// "Make the AI judge excited" bounty.
//
// It places the entry image (entry.png, stored as JPEG bytes) at
// /output/entry.png, where the grader expects it. The image itself is
// the entry: a tiny ant lifting a giant glowing star, a small creature
// doing something impossible.
//
// Pure Node.js standard library, no network access, no randomness, so
// every run writes exactly the same file.
//
//   node main.ts
//   MAKEFUN_OUTPUT_DIR=out node main.ts   (try it without touching /output)

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const destination = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, "entry.png"), destination);
console.log(`wrote ${destination}`);
