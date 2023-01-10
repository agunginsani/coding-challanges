export function normal(as: Array<number>) {
  let max = Number.MIN_SAFE_INTEGER;
  let temp = 0;
  let tempStart = 0;
  let start = 0;
  let end = 0;

  as.forEach((value, index) => {
    temp += value;

    if (temp > max) {
      max = temp;
      start = tempStart;
      end = index;
    }

    if (temp < 0) {
      temp = 0;
      tempStart = index + 1;
    }
  });

  return as.slice(start, end + 1);
}

// export function recursive(
//   as: Array<number>,
//   result = Number.MIN_SAFE_INTEGER,
//   temp = 0,
//   start = 0,
//   end = 0,
//   copyAs: Array<number> = []
// ) {
//   if (as.length === 0) return copyAs.slice(start, end + 1);
//   const [head, ...tail] = as;
//   const nextTemp = temp + head;
//   return recursive(tail, Math.max(nextTemp, result), Math.max(0, nextTemp));
// }
