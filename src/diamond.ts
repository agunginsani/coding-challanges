export function normal(n: number) {
  function generateRow(row: number) {
    let result = "";
    const blank = " ";
    const totalLeft = n;
    const totalRight = n - 1;

    for (let i = 1; i <= totalLeft; i += 1) {
      result += i >= row ? "*" : blank;
    }

    for (let i = totalRight; i > 0; i -= 1) {
      result += i >= row ? "*" : blank;
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

  return results.join("\n");
}

export function recursive(n: number) {
  function generateRow(row: number) {
    function left(i = 1): string {
      if (i > n) return "";
      return (i >= row ? "*" : " ") + left(i + 1);
    }

    function right(i = n - 1): string {
      if (i === 0) return "";
      return (i >= row ? "*" : " ") + right(i - 1);
    }

    return left() + right();
  }

  function top(i = 1): Array<string> {
    if (i <= n) return [...top(i + 1), generateRow(i)];
    return [];
  }

  function bottom(i = 2): Array<string> {
    if (i <= n) return [generateRow(i), ...bottom(i + 1)];
    return [];
  }

  return [...top(), ...bottom()].join("\n");
}

export function tailRecursive(n: number) {
  function generateRow(row: number) {
    function left(i = 1, result = ""): string {
      if (i > n) return result;
      return left(i + 1, result + (i >= row ? "*" : " "));
    }

    function right(i = n - 1, result = ""): string {
      if (i === 0) return result;
      return right(i - 1, result + (i >= row ? "*" : " "));
    }

    return left() + right();
  }

  function top(i = 1, results: Array<string> = []): Array<string> {
    if (i > n) return results;
    return top(i + 1, [generateRow(i), ...results]);
  }

  function bottom(i = 2, results: Array<string> = []): Array<string> {
    if (i > n) return results;
    return bottom(i + 1, [...results, generateRow(i)]);
  }

  return [...top(), ...bottom()].join("\n");
}
