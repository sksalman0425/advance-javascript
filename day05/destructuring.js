// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const obj = {
  fName: "Azhar",
  lName: "Shaikh",
  fullName: "",
  color: "",
  height: "",
};

// const fName = obj.fName;
// const lName = obj.lName;
// This is knwon as destructuring of object. here we are creating local variable and we get those variable which are needed.
const { fName, lName } = obj; // here we have taken only two properties of object into variables.
const { PI, E, SQRT2 } = Math; // here we have taken only three properties of Math object into variables.
// Remember here variable name must be same as property name.
console.log(PI);
console.log(E);
console.log(SQRT2);
console.log(fName);
console.log(lName);

// Array destructuring example
const numbers1 = [1, 3, 5, 7, 8];
console.log(numbers1[2]);
//access array value without using index?
const [p, q, r, s, t] = numbers1;
console.log("accessing array value without using index", r);

const numbers2 = [2, 4, 5, 7];
console.log(numbers2[2]);
const [a, , , b] = numbers2;
console.log(a, b);

function sum({ a, b }) {
  // here we are getting direct arg from obj. remember here arg and obj properties name should be same
  return a + b;
}

// const z=9;
// const y=98;
// console.log(sum(y,z)) // here arg name can be different bz here obj destructuring not done
const sumValue = sum({
  a: 5,
  b: 6,
});
// In case of object Destructuring remember arg name and obj properties name must be same
// below we are doing object destructuring in function argument. 
// draw:{diameter} is written in arg bz x obj have {diameter:8} obj inside it
function circleArea({ radius, draw: { diameter } }) {
  return PI * radius * radius;
}
// this is object
const x = {
  radius: 4,
  title: "C1",
  width: "2px",
  draw: { diameter: 8 }, // obj inside obj
};
console.log(circleArea(x)); // here we are passing object in arg

