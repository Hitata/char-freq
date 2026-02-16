import { useMemo } from 'react';
import { LETTERS, ALL_KEYS } from '../utils/keyboard';
import { computeGematria, digitalRoot, digitalRootSteps } from '../utils/gematria';

export function useCharFrequency(text) {
  return useMemo(() => {
    const lower = text.toLowerCase();

    const freq = {};
    ALL_KEYS.forEach(c => (freq[c] = 0));
    for (const ch of lower) {
      if (ch in freq) freq[ch]++;
    }

    const letterCounts = LETTERS.map(l => freq[l]);
    const maxCount = Math.max(...ALL_KEYS.map(k => freq[k]), 1);
    const maxLetterCount = Math.max(...letterCounts, 1);
    const totalLetters = letterCounts.reduce((a, b) => a + b, 0);
    const uniqueLetters = letterCounts.filter(c => c > 0).length;

    let topLetter = '\u2014';
    let topCount = 0;
    LETTERS.forEach(l => {
      if (freq[l] > topCount) {
        topCount = freq[l];
        topLetter = l.toUpperCase();
      }
    });

    const gematria = computeGematria(text);
    const rootNumber = gematria.totalValue > 0 ? digitalRoot(gematria.totalValue) : 0;
    const rootSteps = gematria.totalValue > 9 ? digitalRootSteps(gematria.totalValue) : [];

    return {
      freq,
      totalChars: text.length,
      totalLetters,
      uniqueLetters,
      topDisplay: topCount > 0 ? `${topLetter} (${topCount})` : '\u2014',
      maxCount,
      maxLetterCount,
      gematria: { ...gematria, rootNumber, rootSteps },
    };
  }, [text]);
}
