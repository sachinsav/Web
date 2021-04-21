console.log(true.__proto__ == Boolean.prototype);
console.log(Boolean, Boolean.prototype, typeof [1, 2]);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  constructor(name, age, rollno) {
    super(name, age);
    this.rollno = rollno;
  }
  isAdult() {
    return this.age >= 18;
  }
}

stud1 = new Student("sachin", 21, 46);
console.log(stud1, "Is Adult: " + String(stud1.isAdult()));

(function (x) {
  console.log(x);
  delete x;
  console.log(x);
  return x;
})(1);

function a(x) {
  delete x;
  console.log(x);
}

a(10);

const xx = 11;
console.log(delete xx);

function foo() {
  this.bar = 10;
}
//foo.prototype.bar = 42;
foo1 = new foo();
console.log(
  foo.prototype,
  foo1.__proto__,
  foo.__proto__,
  foo.__proto__.__proto__,
  foo.__proto__.__proto__.__proto__,
  foo1
);

var foo = {
  bar: function () {
    console.log(this);
    return this.baz;
  },
  baz: 1,
};
console.log(
  (function () {
    arguments[0].baz = 1;
    console.log("here", arguments[0]());
    return typeof arguments[0]();
  })(foo.bar)
);
console.log("--------------------");
var x = 1;
if (function f() {}) {
  x += typeof f;
}
console.log(x);
