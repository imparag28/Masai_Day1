// Problem-3

//     Write a function isOdd which returns a boolean value based the number is odd or not
//     Use this function to print the odd numbers from 0 to a given limit(included)
function Oddn(n){
//let count = 0
//for(let i = 1; i<=n;i++){
if(n%2==1){
  return n
  //count++
  }
}
//console.log(Isprime(11))
let limit = 50;
for(let i = 1 ;i<=limit;i++){
  if(Oddn(i)){
    console.log(i)
  }
}