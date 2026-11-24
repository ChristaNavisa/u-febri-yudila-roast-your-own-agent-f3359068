import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(outDir: string, text: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

const ENTRY =
  "My agent rewrote the function that was never broken, apologized for the bug it invented, then called the disaster 'a successful refactor.'";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

writeEntry(resolveOutDir(), ENTRY);
console.log(`wrote ${ENTRY.length} chars from ${repoRoot}`);
