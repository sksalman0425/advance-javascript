// Rest Operator and Spread Operator----(...)
const numbers = [2, 4, 5, 7];
// Rest Operator (...)
//Rest Operator normally used during function argument
const [first, ...restItems] = numbers;
// here Rest of the element in numbers array after first element are put into restItems variable i.e. Array
console.log("First:", first);
console.log("restItems newArray:", restItems);
const obj1 = {
  temp1: "34",
  fName: "Azhar",
  lName: "Shaikh",
  height: 5.9,
  temp2: 546,
};

const { temp1, temp2, ...person } = obj1;
// here Rest of the element in obj1 object  excluding temp1 and temp2  element are put into person variable i.e. object
console.log("temp1 variable ",temp1);
console.log("temp2 variable ",temp2);
console.log("person variable ",person);
// Spread Operator----   creates a new copy of the whole object or array
// Spread Operator normal used during function calling
const obj2 = obj1;// shallow copying i.e. only reference of obj1 is copy into obj2
obj2.color = "Fair";
// above command affect both obj1 and obj2 objects bz of shallow copy. 
console.log("obj2", obj2);
console.log("Obj1", obj1);
const obj3 = { ...obj1 };// deep copying
obj3.age = 30;
// above command affect only obj3 object only
console.log("obj3", obj3);
console.log("Obj1", obj1);

const newArray = [...numbers];//deep copying
newArray.push(8);
console.log("newArray", newArray);