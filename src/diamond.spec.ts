import { expect, test } from "vitest";
import { normal, recursive, tailRecursive } from "./diamond";

const cases: Array<[number, string]> = [
  [1, ["*"].join("\n")],
  [2, [" * ", "***", " * "].join("\n")],
  [3, ["  *  ", " *** ", "*****", " *** ", "  *  "].join("\n")],
  [
    4,
    [
      "   *   ",
      "  ***  ",
      " ***** ",
      "*******",
      " ***** ",
      "  ***  ",
      "   *   ",
    ].join("\n"),
  ],
];

test.each(cases)("normal", (input, expected) => {
  expect(normal(input)).toEqual(expected);
});

test.each(cases)("recursive", (input, expected) => {
  expect(recursive(input)).toBe(expected);
});

test.each(cases)("tailRecursive", (input, expected) => {
  expect(tailRecursive(input)).toBe(expected);
});
