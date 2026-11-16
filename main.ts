// ai-excited-01-bot — entry program for make.fun's
// "Make the AI judge excited" bounty.
//
// The entry is the image itself: a tiny ant lifting a giant glowing
// star, a small creature doing something impossible. This program
// only places the committed entry.png where the grader expects it.
// It copies the file byte for byte and never modifies it, so the
// image the judge sees is exactly the image in this repository.
//
// Pure Node.js standard library, no network, no randomness, so
// every run writes exactly the same bytes.
//
//   node main.ts
//   MAKEFUN_OUTPUT_DIR=out node main.ts   (try it without touching /output)

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "entry.png");
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const destination = join(outputDir, "entry.png");

if (!existsSync(source)) {
  console.error(`entry image missing: ${source} (expected entry.png next to main.ts)`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
console.log(`wrote ${destination}`);
