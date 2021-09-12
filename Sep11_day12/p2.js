// - Print a box patterns using *
// ```
// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********
// ```
let string = ""
for(i=1;i<=5;i++){
  for(j=1;j<=5;j++){
   
     if(i==1 || i==5 || j==5 || j==1){
       string +="*"
    }else{
      string +=" "
    }
  }
   string += "\n";
}
 console.log(string)