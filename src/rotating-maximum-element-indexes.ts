export function normal(as: Array<number>, rotate: Array<number>) {
  const results: Array<number> = [];

  let maxIndex = 0;
  as.forEach((a, i) => {
    if (as[maxIndex] < a) {
      maxIndex = i;
    }
  });

  for (let i = 0; i < rotate.length; i++) {
    const rotateModifier = rotate[i] % as.length;
    const temp = maxIndex - rotateModifier;
    const newIndex = temp < 0 ? temp + as.length : temp;
    results.push(newIndex);
  }

  return results;
}

export function recursive(
  as: Array<number>,
  rotate: Array<number>,
  results: Array<number> = [],
  maxIndex?: number
) {
  const getMaxIndex = (i = 0, max = 0) => {
    if (i === as.length) return max;
    return getMaxIndex(i + 1, as[i] > as[max] ? i : max);
  };
  if (rotate.length === 0) return results;
  const [h, ...t] = rotate;
  const rotateModifier = h % as.length;
  const _maxIndex = getMaxIndex();
  const temp = (maxIndex ?? _maxIndex) - rotateModifier;
  const index = temp < 0 ? temp + as.length : temp;
  return recursive(as, t, [...results, index], _maxIndex);
}
