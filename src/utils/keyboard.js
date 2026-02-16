export const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
export const NUMBERS = '1234567890'.split('');
export const ALL_KEYS = [...LETTERS, ...NUMBERS];

export const KB_ROWS = [
  { keys: NUMBERS, type: 'number' },
  { keys: 'qwertyuiop'.split(''), type: 'letter' },
  { keys: 'asdfghjkl'.split(''),  type: 'letter' },
  { keys: 'zxcvbnm'.split(''),    type: 'letter' },
];

export const SOFLE_COL_OFFSETS_L = [12, 6, 0, 3, 8, 12];
export const SOFLE_COL_OFFSETS_R = [12, 8, 3, 0, 6, 12];

export const SOFLE_LEFT = [
  [
    { key: '`', type: 'mod' }, { key: '1', type: 'char' }, { key: '2', type: 'char' },
    { key: '3', type: 'char' }, { key: '4', type: 'char' }, { key: '5', type: 'char' },
  ],
  [
    { key: 'Esc', type: 'mod' }, { key: 'q', type: 'char' }, { key: 'w', type: 'char' },
    { key: 'e', type: 'char' }, { key: 'r', type: 'char' }, { key: 't', type: 'char' },
  ],
  [
    { key: 'Tab', type: 'mod' }, { key: 'a', type: 'char' }, { key: 's', type: 'char' },
    { key: 'd', type: 'char' }, { key: 'f', type: 'char' }, { key: 'g', type: 'char' },
  ],
  [
    { key: 'Sft', type: 'mod' }, { key: 'z', type: 'char' }, { key: 'x', type: 'char' },
    { key: 'c', type: 'char' }, { key: 'v', type: 'char' }, { key: 'b', type: 'char' },
  ],
  [
    { key: 'Gui', type: 'thumb' }, { key: 'Alt', type: 'thumb' }, { key: 'Ctrl', type: 'thumb' },
    { key: 'Lo', type: 'thumb' }, { key: 'Ent', type: 'thumb' },
  ],
];

export const SOFLE_RIGHT = [
  [
    { key: '6', type: 'char' }, { key: '7', type: 'char' }, { key: '8', type: 'char' },
    { key: '9', type: 'char' }, { key: '0', type: 'char' }, { key: '`', type: 'mod' },
  ],
  [
    { key: 'y', type: 'char' }, { key: 'u', type: 'char' }, { key: 'i', type: 'char' },
    { key: 'o', type: 'char' }, { key: 'p', type: 'char' }, { key: 'Bks', type: 'mod' },
  ],
  [
    { key: 'h', type: 'char' }, { key: 'j', type: 'char' }, { key: 'k', type: 'char' },
    { key: 'l', type: 'char' }, { key: ';', type: 'mod' }, { key: "'", type: 'mod' },
  ],
  [
    { key: 'n', type: 'char' }, { key: 'm', type: 'char' }, { key: ',', type: 'mod' },
    { key: '.', type: 'mod' }, { key: '/', type: 'mod' }, { key: 'Sft', type: 'mod' },
  ],
  [
    { key: 'Spc', type: 'thumb' }, { key: 'Ra', type: 'thumb' }, { key: 'Ctrl', type: 'thumb' },
    { key: 'Alt', type: 'thumb' }, { key: 'Gui', type: 'thumb' },
  ],
];
