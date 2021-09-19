// String Sub String

//     Write a custom function that has the same behavior of inbuilt String Substring Function
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
function Custmsubstring(str,Start,End=0){
  //console.log(str,Start,End)
  if(End == 0){
    End = str.length
  }
  
  let str1 = ""
  for(let i = Start; i < End; i++) {
    //console.log(str[i])
    str1+=str[i];
  }
// console.log(str1)
  return str1
}




const str = 'Mozilla';

console.log(Custmsubstring(str,1, 5));
// expected output: "oz"

console.log(Custmsubstring(str,2));
// expected output: "zilla"
