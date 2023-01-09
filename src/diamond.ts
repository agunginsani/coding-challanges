export function normal(n: number) {
  function generateRow(row: number) {
    let result = '';
    const blank = ' ';
    const totalLeft = n;
    const totalRight = n - 1;

    for (let i = 1; i <= totalLeft; i += 1) {
      result += i >= row ? '*' : blank;
    }

    for (let i = totalRight; i > 0; i -= 1) {
      result += i >= row ? '*' : blank;
    }

    return result;
  }

  const results: Array<string> = [];

  for (let i = 1; i <= n; i += 1) {
    results.unshift(generateRow(i));
  }

  for (let i = 2; i <= n; i += 1) {
    results.push(generateRow(i));
  }

  return results.join('\n');
}

export function recursive(n: number) {
  function generateRow(row: number) {
    let result = '';
    const blank = ' ';
    const totalLeft = n;
    const totalRight = n - 1;

    for (let i = 1; i <= totalLeft; i += 1) {
      result += i >= row ? '*' : blank;
    }

    for (let i = totalRight; i > 0; i -= 1) {
      result += i >= row ? '*' : blank;
    }

    return result;
  }

  function normalAux(i = 1): Array<string> {
    if (i <= n) return [...normalAux(i + 1), generateRow(i)];
    return [];
  }

  function reverseAux(i = 2): Array<string> {
    if (i <= n) return [generateRow(i), ...reverseAux(i + 1)];
    return [];
  }

  return [...normalAux(), ...reverseAux()].join('\n');
}
