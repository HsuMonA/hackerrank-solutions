// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  let extractStr = s.substr(0, 2);
  let convertToInt = parseInt(extractStr);
  let sum = convertToInt + 12;
  let convertToStr = sum.toString();
  let strSlice = s.slice(0, -2);
  let result = strSlice.replace(extractStr, convertToStr);
  if (s.includes("AM") == true && extractStr === "12") {
    return strSlice.replace("12", "00");
  } else if (s.includes("PM") == true && extractStr === "12") {
    return strSlice;
  } else if (s.includes("AM") == true) {
    return strSlice;
  } else if (s.includes("PM") == true) {
    return result;
  }
}

// console.log(timeConversion("07:05:45PM"));
// console.log(timeConversion("03:00:00AM"));
// console.log(timeConversion("12:01:00PM"));
// console.log(timeConversion("12:01:00AM"));
console.log(timeConversion("12:40:22AM"));
