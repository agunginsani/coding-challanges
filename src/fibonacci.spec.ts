import { expect, test } from 'vitest';
import { normal, recursive, tailRecursive } from './fibonacci';

const cases = [
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 5],
  [6, 8],
  [7, 13],
  [8, 21],
];

test.each(cases)('normal(%i) -> $i', (input, expected) => {
  expect(normal(input)).toBe(expected);
});

test.each(cases)('recursive(%i) -> $i', (input, expected) => {
  expect(recursive(input)).toBe(expected);
});

test.each(cases)('tailRecursive(%i) -> $i', (input, expected) => {
  expect(tailRecursive(input)).toBe(expected);
});
