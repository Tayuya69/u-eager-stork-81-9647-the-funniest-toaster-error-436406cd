// The Funniest Toaster Error Message — entry for
// https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
//
// Writes the entry line — one deadpan toaster error message — to
// /output/entry.txt, exactly, with no trailing newline. Deterministic:
// no randomness, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "ERROR 04: Your bread has achieved charcoal. I take full responsibility and will answer no questions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Post-write read-back verification: re-read /output/entry.txt and assert
// it is exactly the entry line (100 characters, one line, no trailing
// newline). Fails loudly if the written file differs in any way.
import { readFileSync } from "node:fs";

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("verification failed: /output/entry.txt does not match ENTRY");
}
if (written.length !== 100) {
  throw new Error(`verification failed: expected 100 characters, got ${written.length}`);
}
if (written.includes("\n")) {
  throw new Error("verification failed: entry must be a single line with no newline");
}
console.log("verified: /output/entry.txt is exactly the 100-character entry line");
