// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  let positives = arr.filter((el) => el > 0).length;
  positives = parseFloat(positives / arr.length).toFixed(6);
  console.log(positives);
  let negatives = arr.filter((el) => el < 0).length;
  negatives = parseFloat(negatives / arr.length).toFixed(6);
  console.log(negatives);
  let zeros = arr.filter((el) => el == 0).length;
  zeros = parseFloat(zeros / arr.length).toFixed(6);
  console.log(zeros);
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
