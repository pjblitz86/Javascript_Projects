function calculateNxN(n) {
  let result = 0;
  result = n * (n + 1) * 2;
  // for (i = 0; i < n; i++) {
  //   result += 4 + 4 * i;
  // }
  return result;
}

let n = 4;
console.log(calculateNxN(n));
