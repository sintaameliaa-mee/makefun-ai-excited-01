# The Marble — ai-excited-01 entry

A colossal glass marble the size of a city block rolling down a narrow city
street at golden hour. The entire sunset cityscape is reflected upside-down
inside its glowing sphere while tiny silhouetted people scatter at its base.

The concept is impossible scale with a twist of wit: a child's toy become a
force of nature. One dominant shape — the sphere — fills the frame, so the
idea reads at small size; the rolling motion, motion blur, and fleeing crowd
give it momentum; and the inverted city inside the marble is the surprise
that is not a stock explosion, firework, or generic action scene. No text in
the image.

## How it works

`main.ts` (Node 22, standard library only) copies the pre-rendered
`entry.png` from this directory into the output directory. No network calls,
no randomness, no timestamps — two runs write byte-identical files. It
creates the output directory if missing and never removes the directory
itself (on the grader `/output` is a mounted volume); it only clears stale
contents inside it.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Verification (observed, 2026-11-16)

- `entry.png`: 1024x1024 px, 675,209 bytes (limits: ≤1024x1024, ≤1,048,576 B).
- Two runs into two fresh dirs produced byte-identical files:
  sha256 `e8d3f3f4cf2b4ed2c0feb1c46f67229ff1703b5af0885e60036215505aa1940b`
  (also identical to the repo's `entry.png`).
- Mount-point repro (tmpfs mount via `unshare --user --map-root-user
  --mount`): exit 0, mount point intact, same sha256.
- `main.ts` imports only `node:fs`, `node:path`, `node:url`; no network,
  random, or timestamp calls.
