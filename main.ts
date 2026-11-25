// groan-off-26 — The One-Liner Groan-Off (u-alfasurya91-the-one-liner-groan-off-5a1febd5)
//
// Deterministically writes one original one-line dad joke to /output/entry.txt.
// The entry must be UTF-8 text of 1 to 140 characters; the chosen line is 93.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I told my kids the vacuum cleaner went on strike. They said, 'So that's why the house sucks.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
