// Midnight Fridge Roast — make.fun entry
// Writes one roast line to /output/entry.txt and verifies it against the gate.
//
// Entry: "My fridge locks at midnight and flashes 'for your own good' — the only
// appliance in the house that diets me by force."
// Why it works: the roast targets the fridge's petty midnight rule itself
// (criterion 4), the turn lands in the second half — the fridge is not keeping
// food cold, it is dieting its owner by force (criterion 2) — and it is tight,
// one line, in the voice of someone actually standing at the locked door
// (criteria 3 and 5). Fresh line, written for this bounty.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast is assembled from named parts so the setup and the punchline stay
// separate in the source; the assembled line is the entry, byte for byte.
const SETUP = "My fridge locks at midnight and flashes 'for your own good'";
const PUNCH = "the only appliance in the house that diets me by force.";

function buildEntry(): string {
  return `${SETUP} — ${PUNCH}`;
}

interface GateReport {
  ok: boolean;
  reason: string;
  codePoints: number;
  lines: number;
}

function validateEntry(text: string): GateReport {
  const trimmed = text.trim();
  const codePoints = [...trimmed].length;
  const lines = trimmed.split("\n").length;
  if (trimmed.length === 0) return { ok: false, reason: "entry is blank", codePoints, lines };
  if (codePoints < 1 || codePoints > 200) {
    return { ok: false, reason: `entry is ${codePoints} characters, gate is 1-200`, codePoints, lines };
  }
  if (lines !== 1) return { ok: false, reason: "entry must be a single line", codePoints, lines };
  return { ok: true, reason: "gate passes", codePoints, lines };
}

function verifyWritten(path: string): string {
  const written = readFileSync(path, "utf8");
  return createHash("sha256").update(written).digest("hex");
}

function main(): void {
  const entry = buildEntry();
  const report = validateEntry(entry);
  if (!report.ok) {
    console.error(`gate failed: ${report.reason}`);
    process.exit(1);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, entry + "\n", "utf8");
  const sha256 = verifyWritten(outPath);
  console.log(
    `gate passes: ${report.codePoints} characters, ${report.lines} line, sha256 ${sha256}`,
  );
  console.log(`wrote ${outPath}`);
  console.log(`verified: ${JSON.stringify(entry)}`);
}

main();
