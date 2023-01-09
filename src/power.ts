export function normal(x: number, n: number) {
  let result = 1;
  let iterator = n;
  if (iterator > 0) {
    while (iterator > 0) {
      result *= x;
      iterator -= 1;
    }
  } else {
    while (iterator < 0) {
      result *= 1 / x;
      iterator += 1;
    }
  }
  return result;
}

export function recursive(x: number, n: number) {
  if (n === 0) return 1;
  if (n > 0) {
    if (n === 1) return x;
    return x * recursive(x, n - 1);
  }
  if (n === 1) return 1 / x;
  return (1 / x) * recursive(x, n + 1);
}

export function tailRecursive(x: number, n: number, result = 1) {
  if (n === 0) return result;
  if (n > 0) return tailRecursive(x, n - 1, result * x);
  return tailRecursive(x, n + 1, result * (1 / x));
}
