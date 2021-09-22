// Create an object with the following functionality

//     Ability to add student details and 3 subject marks
//     Methods to find the student with the least and highest total

let obj = {
 student = [],
 addstudent : function(name,java,php,go){
  var std = {}
  std.name : name
  std.java : java
  std.php : php 
  std.go: go
  this.student.push(std)
      console.log(std.name+"'s record inserted");


 }
  
}
obj.addStudent("Mohsin", 90,80,83);
obj.addStudent("Pratik", 70,85,74);
obj.addStudent("Faizanur", 80,91,98);