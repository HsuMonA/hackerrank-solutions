// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  let maxNumber = Math.max(...candles);
  let maxNumbers = candles.filter((el) => el == maxNumber);
  return maxNumbers.length;
}

console.log(birthdayCakeCandles([4, 4, 1, 2]));
