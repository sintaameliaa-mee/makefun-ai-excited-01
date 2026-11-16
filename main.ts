// ai-excited-01 entry: "The Marble"
// Copies the pre-rendered entry.png from this directory into the output dir.
// Deterministic: the same bytes are written on every run. No network calls,
// no randomness, no timestamps, standard library only.
import { copyFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

// Create the output directory if it does not exist. Never remove the
// directory itself: on the grader /output is a mounted volume, and
// removing a mount point fails. Only clear stale contents inside it.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

copyFileSync(source, target);
console.log(`wrote ${target}`);
