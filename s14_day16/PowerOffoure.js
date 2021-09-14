// Description

//     You are given a number stored in a variable with the name,nums

//     You have to find the value of the number raised to the power of 4

//     For example, if the value stored innum = 3. Therefore, the value of 3 raised to the power of 4, equals3 * 3 * 3 * 3 = 81, which is the required answer

//     Therefore, the output is81

function Powof(num){
  let i = 1 
  let pow = 1
  while(i<=num){
    pow = pow * num
    i++
    console.log(num)
  }
  
}
Powof(3)