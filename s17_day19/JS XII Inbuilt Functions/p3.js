
// String Starts With

//     Write a custom function that has the same behavior of inbuilt String StartsWith Function
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

function stWit(str,a)
{
  let count =0
  for(let i = 0; i<=a.length-1;i++){
        //console.log(str[i],a[i])
    if(str[i] == a[i]){
          count++
          //console.log(count)
          if(count== a.length){
            
            return true
          }
      
     //return false
    }else
      return false;
    

  }
}

const str1 = 'Saturday night plans';
console.log(stWit(str1,"Saturday"))