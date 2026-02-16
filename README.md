# charfreq

A real-time character frequency visualizer with an A–Z bar chart and a US keyboard heatmap.

## Why I Built This

Two things collided that made me want to build this quick little tool:

1. **I just got a Sofle V2** — a split, columnar-staggered ergonomic keyboard. Switching to a new layout made me hyper-aware of which keys my fingers actually hit and how often. I wanted a way to see the distribution of characters I type across a standard US QWERTY layout and understand what my fingers are actually doing all day.

2. **Letters carry weight** — I'd come across the concept of gematria, a centuries-old system rooted in Kabbalistic (Jewish mystical) tradition where each Hebrew letter corresponds to a numerical value. The idea is that letters aren't just phonetic symbols — they carry quantitative, even spiritual, significance. Words with equal numerical sums are believed to share hidden connections. The practice dates back to at least the 8th century BCE (an Assyrian inscription by Sargon II is the earliest documented use) and was formalized in early Kabbalistic texts like the Sefer Yetzirah (c. 2nd century CE). It made me curious: if every letter has a "weight," what does the weight distribution of ordinary English text actually look like?

This tool is the intersection of those two curiosities — a fast, visual way to explore how characters distribute across the alphabet and across a physical keyboard.

## What It Does

Type (or paste) any text up to 500 characters and instantly see:

* **Frequency bar chart** — A–Z on the x-axis, count on the y-axis. Each bar is color-coded from cold blue (low frequency) to hot red (high frequency).
* **Keyboard heatmap** — A standard US QWERTY layout (number row + three letter rows) where each key lights up on a blue-to-red color scale based on how often that character appears. The count is shown in the bottom-right corner of each key.
* **Live stats** — Total characters, letter count, unique letters used, and the single most frequent letter.

Everything updates in real time as you type.

## How to Use

It's a single HTML file with zero dependencies. Just open it in a browser:

```
open character-frequency.html
```

Or double-click the file. That's it.

## Tech

* Pure HTML, CSS, and vanilla JavaScript
* No frameworks, no build step, no dependencies
* Single file (~400 lines)
* Works offline

## Color Scale

The heatmap uses a multi-stop gradient:

```
Dark Blue → Blue → Cyan-Blue → Green → Yellow → Orange → Red → Hot Red
(0%)                                                            (100%)
```

The scale is relative — the most frequent character at any moment is always mapped to the hot end, and everything else is proportional.

## Background: Gematria

The ancient practice of gematria assigns numerical values to letters and uses those values to find hidden relationships between words. In the standard Hebrew system, Aleph = 1, Bet = 2, and so on, with values jumping by tens and then hundreds for later letters. The Kabbalistic tradition holds that God created the universe through the power of these letters and their numerical values — the Sefer Yetzirah describes the 22 Hebrew letters as the "stones used to build a house."

While this tool doesn't implement gematria directly, it was inspired by the same underlying intuition: that the frequency and distribution of letters in text is meaningful and worth visualizing. Whether you're optimizing a keyboard layout, studying English letter frequencies, or just curious about what your writing looks like at the character level, this tool makes the invisible visible.

## License

MIT
