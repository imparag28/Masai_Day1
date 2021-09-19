// String Trim Start

//     Write a custom function that has the same behavior of inbuilt String Trim Start Function
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart

const str = "   Hello world!   ";
console.log(Newtrim(str))

function Newtrim(str){
  let i = 0;
  while(str[i]== " "){
    i++
    //console.log(i)
  }
  console.log(i)
  var nstring = "";
  for(let j = i ; j <= str.length-1; j++){
   //console.log(str[j])
    nstring += str[j]
   
  }
 return nstring
}
let str = "   Hello world";
console.log(Newtrim(str))
