// ai-excited-01 entry (Node 22, standard library only).
// The image lives in this repository as entry.png. This program hands it in
// by writing its exact bytes to /output/entry.png — nothing is redrawn,
// re-encoded, or changed, so two runs produce byte-identical output.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), readFileSync(join(here, 'entry.png')));
