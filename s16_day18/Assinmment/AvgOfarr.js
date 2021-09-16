// Problem-4

//     Write code to calculate the average of an array
//     If there are no items in the array it should return 0
//     NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function avg(a,n){
//console
console.log(a,n)
return a/n

}
function sum(arr){
  console.log(arr)
  let count =0
  let d = arr.length
if(arr.length<0){
  return 0
}
for(let i = 0;i<=arr.length;i++){
  count +=arr[i]
  //console.log(count)

}avg(count,d)
}
console.log(sum([1,2,3]))