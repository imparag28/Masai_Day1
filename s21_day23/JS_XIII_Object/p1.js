//Given an array find the unique items in the array

let a = ["a","b","c","d","a"]
let unq = []
for(let i = 0;i<= a.length;i++){
  let state = false
  for(let j = 0;j<= unq.length;j--){
    if(a[i] == unq[j]){
      state = true
      break
    }
  }
  if(!state){
    unq.push(a[i])
  }
}

