// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  return Math.abs(primary(arr) - secondary(arr));
}

function primary(arr) {
  let primarySum = 0;
  let i = 0;
  let j = 0;
  while (i < arr.length && j < arr.length) {
    primarySum += arr[i][j];
    i++;
    j++;
  }
  return primarySum;
}

function secondary(arr) {
  let secondarySum = 0;
  let i = 0;
  let j = arr.length - 1;
  while (i < arr.length && j < arr.length) {
    secondarySum += arr[i][j];
    i++;
    j--;
  }
  return secondarySum;
}

console.log(
  diagonalDifference([
    [-1, 1, -7, -8],
    [-10, -8, -5, -2],
    [0, 9, 7, -1],
    [4, 4, -2, 1],
  ])
);
