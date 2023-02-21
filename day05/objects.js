//Object literals:- by using this concept we can add dyanamic property in object
const mystery = "answer";
const institute = "Azhar Academy";
const a = 7;
const obj = {
  a,//this means a:a,
  b: 4,
  foo() {},
  xyz: () => {},
  ["first name"]: "Azhar",
  ["lname"]: "Shaikh",
  [mystery]: 65,//dyanamic property
  institute,//this means institute:institute, i.e. property and it's value is same
};
//another way to access object's property when space is present in the name of property
console.log(obj["first name"]);
console.log(obj.mystery);//it gives undefined output
console.log(obj.answer);
console.log(obj.lname);
console.log(obj.a);
console.log(obj.institute);