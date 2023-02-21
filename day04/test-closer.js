let a = 1;
const closure1 = function () {
  console.log(a);
  a = 2;
};
a = 3;//act's as global variable
const closure2 = function () {
  console.log(a);
};
closure1();
closure2();