// groan-off-26 — The One-Liner Groan-Off (u-alfasurya91-the-one-liner-groan-off-5a1febd5)
//
// Deterministically writes one original one-line dad joke to /output/entry.txt.
// The entry must be UTF-8 text of 1 to 140 characters; the chosen line is 77.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I told my guitar it was out of tune. It said, 'I'm just a little strung out.'";

// Runtime gate: the entry must be a single non-blank line of 1 to 140
// characters, exactly what the sealed scorer checks. Fail loudly if not.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(
    `entry must be 1-140 characters, got ${LINE.length}`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
