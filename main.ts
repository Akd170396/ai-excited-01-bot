// ai-excited-01 entry (Node 22, standard library only).
// The image is committed as entry.png (JPEG bytes under a .png name, which
// the rules allow). This program hands it in unchanged: it copies the file's
// exact bytes to /output/entry.png, so two runs write byte-identical output.
//
// Local test:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), readFileSync(join(here, 'entry.png')));
