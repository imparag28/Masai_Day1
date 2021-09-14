// You are given two numbers, stored in the variable with the namesleft, rightrespectively

// You have to print all the numbers in the range of [left, right],(including the values stored in left and right) such that the current number is double of the previous number

// For example, consider the value stored inleft = 2, and the value stored inright = 10, then the required output will be

function nam(left , right){
  while(left <= right){
    console.log(left)
    left+=left;
    
  }
  
}
nam(11,50)