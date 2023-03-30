// https://www.hackerrank.com/challenges/mini-max-sum/problem
function miniMaxSum(arr) {
  let sumArrMax = 0;
  let sumArrMin = 0;
  let maxElToRemove = Math.max(...arr);
  let minElToRemove = Math.min(...arr);
  let indexToRemove = arr.findIndex((element) => element == maxElToRemove);
  let indexToRemoveMin = arr.findIndex((element) => element == minElToRemove);

  let arrMax = arr.filter((el, index) => index !== indexToRemove);
  arrMax.forEach((item) => {
    sumArrMax += item;
  });

  let arrMin = arr.filter((el, index) => index !== indexToRemoveMin);
  arrMin.forEach((item) => {
    sumArrMin += item;
  });
  console.log(sumArrMax, sumArrMin);
}
miniMaxSum([1, 3, 5, 7, 9]);

// miniMaxSum([5, 5, 5, 5, 5]);
