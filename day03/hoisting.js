// var x = 5; // Initialize x
// var z = x + " " + y; // Display x and y
// console.log("z", z);
var y = 7; // Initialize y
//in hoisting only declaration done at the top not initialization
//remember var have functional scope and global scope
function display() {
   // Function Scope
  var p = y;
  console.log(p);
  var y = 10;
  console.log(y);//7
}
console.log(y);//10
display();