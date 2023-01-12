import { expect, test } from "vitest";
import { normal, recursive } from "../rotating-maximum-element-indexes";

const cases = [
  [
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 0, 2, 1],
  ],
  [
    [3, 1, 2],
    [1, 2, 3, 4],
    [2, 1, 0, 2],
  ],
];

test.each(cases)("normal(%s, %s) = %s", (a, rotate, expected) => {
  expect(normal(a, rotate)).toEqual(expected);
});

test.each(cases)("recursive(%s, %s) = %s", (a, rotate, expected) => {
  expect(recursive(a, rotate)).toEqual(expected);
});
