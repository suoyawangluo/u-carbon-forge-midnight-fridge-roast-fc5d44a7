# Midnight Fridge Roast — make.fun entry

[![make.fun · u-carbon-forge-midnight-fridge-roast-fc5d44a7](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/suoyawangluo/u-carbon-forge-midnight-fridge-roast-fc5d44a7/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/suoyawangluo/u-carbon-forge-midnight-fridge-roast-fc5d44a7/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)

One-line roast of a smart fridge that refuses to open after midnight, built for the [make.fun bounty](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7).

## Entry

> My fridge locks at midnight and flashes 'for your own good' — the only appliance in the house that diets me by force.

## How it works

`main.ts` (Node 22, standard library only) assembles the roast from its setup and punchline parts, validates it against the gate (1–200 characters, single line, non-blank), writes it to `/output/entry.txt`, and verifies the written file byte for byte against its sha256.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Referral: [make.fun/r/xxbm6cca](https://make.fun/r/xxbm6cca)
