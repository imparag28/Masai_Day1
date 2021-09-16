function Isprime(n){
let count = 0
for(let i = 1; i<=n;i++){
if(i%2==0){

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
console.log(Isprime(5))