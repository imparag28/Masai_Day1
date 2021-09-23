var name = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
var age = [32, 30, 26, 28, 44];
var  obj =
{
   data : [],
   moreThanThirty : function()
   {
     var names = [];
     for(let i = 0 ; i < this.data.length ; i++)
     {
        if(this.data[i].age > 30)
         names.push(this.data,name[i]);
     }
      return names 
   }

};
for(let i = 0 ; i < name.length ; i++){
  //console.log(name[i],age[i])
  obj.data[i] = { name:name[i],age:age[i] }
  
}
console.log(obj.data)
console.log(obj.moreThanThirty())