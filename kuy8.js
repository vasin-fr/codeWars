// Complete the solution so that it reverses the string passed into it.
const solution = (str) => str.split("").reverse().join("");
console.log(solution("Hell"));

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(a) {
  return +(a + "")
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
