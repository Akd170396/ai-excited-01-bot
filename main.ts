// ai-excited-01 — "Ant lifting a giant star" (round 2 rebuild).
// Entry program, Node 22+ standard library only.
//
// The artwork lives in this repo as entry.png (a JPEG image stored under a
// .png name, which the bounty rules allow). This program's only job is to
// place those exact bytes at /output/entry.png. It does no generation, no
// network access and uses no randomness, so every run writes the same file.
//
// To try it locally without touching /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = resolve(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, readFileSync(resolve(repoRoot, "entry.png")));
console.log(`wrote ${target}`);
