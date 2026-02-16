export const GEMATRIA = {
  a: { hebrew: '\u05D0', name: 'Aleph',      value: 1 },
  b: { hebrew: '\u05D1', name: 'Bet',        value: 2 },
  c: { hebrew: '\u05D2', name: 'Gimel',      value: 3 },
  d: { hebrew: '\u05D3', name: 'Dalet',      value: 4 },
  e: { hebrew: '\u05D4', name: 'He',         value: 5 },
  f: { hebrew: '\u05D5', name: 'Vav',        value: 6 },
  g: { hebrew: '\u05D6', name: 'Zayin',      value: 7 },
  h: { hebrew: '\u05D7', name: 'Chet',       value: 8 },
  i: { hebrew: '\u05D8', name: 'Tet',        value: 9 },
  j: { hebrew: '\u05D9', name: 'Yod',        value: 10 },
  k: { hebrew: '\u05DB', name: 'Kaf',        value: 20 },
  l: { hebrew: '\u05DC', name: 'Lamed',      value: 30 },
  m: { hebrew: '\u05DE', name: 'Mem',        value: 40 },
  n: { hebrew: '\u05E0', name: 'Nun',        value: 50 },
  o: { hebrew: '\u05E1', name: 'Samekh',     value: 60 },
  p: { hebrew: '\u05E2', name: 'Ayin',       value: 70 },
  q: { hebrew: '\u05E4', name: 'Pe',         value: 80 },
  r: { hebrew: '\u05E6', name: 'Tsade',      value: 90 },
  s: { hebrew: '\u05E7', name: 'Qof',        value: 100 },
  t: { hebrew: '\u05E8', name: 'Resh',       value: 200 },
  u: { hebrew: '\u05E9', name: 'Shin',       value: 300 },
  v: { hebrew: '\u05EA', name: 'Tav',        value: 400 },
  w: { hebrew: '\u05D5\u05D5', name: 'Double Vav', value: 12 },
  x: { hebrew: '\u05E1', name: 'Samekh',     value: 60 },
  y: { hebrew: '\u05D9', name: 'Yod',        value: 10 },
  z: { hebrew: '\u05D6', name: 'Zayin',      value: 7 },
};

export function wordGematria(word) {
  let total = 0;
  for (const ch of word.toLowerCase()) {
    if (GEMATRIA[ch]) total += GEMATRIA[ch].value;
  }
  return total;
}

export function digitalRoot(n) {
  if (n === 0) return 0;
  const r = n % 9;
  return r === 0 ? 9 : r;
}

export function digitalRootSteps(n) {
  if (n <= 0) return [0];
  const steps = [n];
  let current = n;
  while (current > 9) {
    let sum = 0;
    while (current > 0) {
      sum += current % 10;
      current = Math.floor(current / 10);
    }
    steps.push(sum);
    current = sum;
  }
  return steps;
}

export function computeGematria(text) {
  const lower = text.toLowerCase();
  let totalValue = 0;
  let letterCount = 0;

  for (const ch of lower) {
    if (GEMATRIA[ch]) {
      totalValue += GEMATRIA[ch].value;
      letterCount++;
    }
  }

  const words = text.split(/\s+/).filter(w => w.length > 0);
  const wordBreakdown = words.map(w => ({
    text: w,
    value: wordGematria(w),
  }));

  const letterBreakdown = [];
  for (const ch of lower) {
    if (GEMATRIA[ch]) {
      letterBreakdown.push({
        char: ch,
        hebrew: GEMATRIA[ch].hebrew,
        name: GEMATRIA[ch].name,
        value: GEMATRIA[ch].value,
        isAlpha: true,
      });
    } else {
      letterBreakdown.push({
        char: ch === ' ' ? '\u2423' : ch,
        hebrew: '',
        name: '',
        value: 0,
        isAlpha: false,
      });
    }
  }

  return { totalValue, letterCount, wordBreakdown, letterBreakdown };
}
