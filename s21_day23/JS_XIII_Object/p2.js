//Given a string print the number of times each character appears

let a = "abcdeab";
let obj = {}

for(let i = 0;i<=a.length-1;i++){
  let char = a[i]
  if(obj[char] == undefined ){
      obj[char] = 1
  }else {
    let prv = obj[char]
    console.log(a[i])
     obj[char] = prv + 1; 
  }

}
for(key in obj ){
  console.log(key +"-"+ obj[key])
}