
// Given an array print the position (starting with 1) and the element in a single line

let arr = ["a", "b", "c", "d"]
for (let i = 0; i <= arr.length - 1; i++) {

  console.log(i + 1 + "-" + arr[i])
}
//===========================================

// Given a character in lower case print the upper case character
let char = "a"
let b = char.toUpperCase()
console.log(b)

// Given an array of numbers find the average of all the even numbers

let arr2 = [1, 2, 3, 4, 5]
let sum = 0
for(let j = 0; j <= arr2.length - 1; j++){
  sum += arr2[j];
 // console.log(sum);
}

console.log(sum /(arr2.length));