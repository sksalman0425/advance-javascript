   function sum(a, b) {
    //fuction scope
    var result = a + b;
    console.log("result inside of function",result);//it gives output
 
  }
  sum(4, 5);
  //this will throw reference error bz var have functional scope
  // console.log("result outside of function",result);
  
  {
    // Block Scope
  }
  if (true) {
    // Block Scope
  }
  //for (condition) inside of () is written in block that's why var i.e. i can access outside of for(){}.
  for (var i = 1; i <= 10; i++) {
    var z = 9;
    // Block Scope
  }
  console.log("VALUE OF I", i);// can access outside block
  console.log("z::", z);// can access outside block

    //for (condition) inside of () is written in block that's why let i.e. j can not access outside of for(){}.
  // for (let j = 1; j <= 5; j++) {
  //   let y = 3;
  //   // Block Scope
  //   console.log("VALUE OF y inside for loop::", y);
  //   console.log("VALUE OF J inside for loop", j);
  //  }
  //  console.log("VALUE OF J outside for loop", j);//can't access outside block
  //  console.log("VALUE OF y inside for loop", y);//can't access outside block
  function doSomething() {
    // Function Scope
    var k = 9;
  }
  
  doSomething();
 // console.log("k", k); // can't access outside function
 //const variable value can't be reassigned/changed in case of primitive datatype but incase of object and array we can change their properties value and we can add new properties.
  const person = {
    fname: "Azhar",
  };
  person.fname = "John";
  person.lname = "Deo";
  console.log(person);