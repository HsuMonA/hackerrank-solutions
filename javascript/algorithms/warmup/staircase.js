// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  for (let i = n; i > 0; i--) {
    console.log("#".padStart(i).padEnd(n, "#"));
  }
}

staircase(6);
