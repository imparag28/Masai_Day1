// Problem-5

//     Write a function to convert a character to lower case
//     Use this function to convert a given word to lower case
//     Use that function to convert an array of strings to array of lower case strings
//     Sample Input

// ["MA", "SA", "I", "SCH", "OOL"]

//     Sample Output

// ["ma", "sa", "i", "sch", "ool"]
let lowerCase = "abcdefghijklmnopkrstuvwxyz"
let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function low(str){
  let count = 0
  for(let j =0;j<=str.length;j++){
  for(let i = 0;i<=UpperCase.length-1;i++){
 if(char[j]==lowerCase[i]){
   count++
 }

  }
  }
}