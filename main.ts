import { mkdirSync, writeFileSync } from "node:fs";

// The whole joke is one power with three catches: the mind is mine, the
// thoughts are yesterday's, and the announcement comes out squeaky.
const line: string = "I can read minds — but only my own, and only yesterday's thoughts, which I must then announce out loud in a squeaky voice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
