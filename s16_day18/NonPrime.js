//Use the above function to print the NonPrimes from 2 to a given limit

function Isprime(n){
let count = 0
for(let i = 1; i<=n;i++){
if(n%i==0){

  count++
  }
}if(count == 2){
  return true
  //Console.log("Yes")
}else {
  //console.log("No")
  return false
}
}
console.log(Isprime(11))
let limit = 50;
for(let i = 2 ;i<=limit;i++){
  if(Isprime(i) == false){
    console.log(i)
  }
}