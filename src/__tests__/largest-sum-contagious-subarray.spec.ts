import { test, expect } from "vitest";
import { normal } from "../largest-sum-contagious-subarray";

const cases: Array<[Array<number>, Array<number>]> = [
  [
    [-2, -3, 4, -1, -2, 1, 5, -3],
    [4, -1, -2, 1, 5],
  ],
  [
    [5, 4, -1, 7, 8],
    [5, 4, -1, 7, 8],
  ],
  [[1], [1]],
  [[-2, -1], [-1]],
];

test.each(cases)("normal(%s) = %i", (input, expected) => {
  expect(normal(input)).toEqual(expected);
});
