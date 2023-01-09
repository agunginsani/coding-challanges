import { expect, test } from 'vitest';
import { normal, recursive, tailRecursive } from './power';

const cases = [
  [-2, 2, 4],
  [-1, 2, 1],
  [0, -1, Infinity],
  [0, 0, 1],
  [0, 1, 0],
  [0, 2, 0],
  [2, -3, 0.125],
  [2, -2, 0.25],
  [2, -1, 0.5],
  [2, 0, 1],
  [2, 1, 2],
  [2, 2, 4],
  [2, 3, 8],
];

test.each(cases)('normal(%i, %i) = %i', (x, n, expected) => {
  expect(normal(x, n)).toBe(expected);
});

test.each(cases)('recursive(%i, %i) = %i', (x, n, expected) => {
  expect(recursive(x, n)).toBe(expected);
});

test.each(cases)('tailRecursive(%i, %i) = %i', (x, n, expected) => {
  expect(tailRecursive(x, n)).toBe(expected);
});
