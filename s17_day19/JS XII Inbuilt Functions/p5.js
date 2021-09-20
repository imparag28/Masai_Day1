// Array Includes

//     Write a custom function that has the same behavior of inbuilt Array Includes Function
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function myIncludes( arr,find){
  for(let i = 0; i<=arr.length-1;i++){
   // console.log(arr[i],find)
    if(arr[i]==find){
      return true;
      
    }
  }
  return false
  
}




const array1 = [1, 2, 3];

console.log(myIncludes(array1,0));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(myIncludes(pets,'ct'));
// expected output: true

//console.log(pets.includes('at'));
// expected output: false