//Write a function to check if the char is a small case or not
let lowerCase = "abcdefghijklmnopkrstuvwxyz"
//let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function lower(char){
  let count = 0
  for(let j =0;j<=char.length;j++){
  for(let i = 0;i<=lowerCase.length-1;i++){
 if(char[j]==lowerCase[i]){
   count++
 }

 }
  }if(count==0){
    console.log("No small case char")
  }else{
    console.log("Yes")
  }
//console.log(count)
}
lower("PaRG")