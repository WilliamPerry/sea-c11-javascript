//XOR with ^

 function preferredName (){
var Name = FirstName + LastName;
var FirstOrLast = !FirstName ^ !LastName ? Name : false;
return FirstOrLast;
 }

