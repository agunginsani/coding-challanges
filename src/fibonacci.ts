export function normal(n: number) {
  if (n <= 1) return n;
  let iterator = n;
  let prev = 0;
  let current = 1;
  while (iterator > 1) {
    const temp = current + prev;
    prev = current;
    current = temp;
    iterator--;
  }
  return current;
}

export function recursive(n: number): number {
  if (n <= 1) return n;
  return recursive(n - 2) + recursive(n - 1);
}

export function tailRecursive(n: number, prev = 0, current = 1): number {
  if (n === 0) return 0;
  if (n === 1) return current;
  return tailRecursive(n - 1, current, current + prev);
}
