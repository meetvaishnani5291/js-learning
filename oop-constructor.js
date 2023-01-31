const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  
};

let meet = new Person("meet", "vaishnani");
let p2 = new Person("fn", "ln");

// console.log(meet);
// console.log(p2);
// console.log(meet instanceof Person);
// p2.fullName = p2.firstName + "    " + p2.lastName;
// console.log(p2);
// console.log(p2 instanceof Person);

Person.prototype.fullName = function () {
  console.log(this.firstName + " " + this.lastName);
};
// meet.fullName();
// delete meet.firstName;
// meet.fullName();

// console.log(p2.fullName());
// // Person.prototype


// console.log(Person.prototype===meet.__proto__);
// console.log(meet.__proto__);
// console.log(meet.__proto__.__proto__);
// console.log(meet.__proto__.__proto__.__proto__);

// console.log(Person.prototype.isPrototypeOf(meet));
// console.log(meet.hasOwnProperty('firstName'));

// console.log(meet.prototype);
// console.log(meet.__proto__);

// console.log(Person.prototype);
// console.log(Function.prototype);
// console.log(Person.__proto__);
// console.log(Person.__proto__.__proto__);

// meet.__proto__.__proto__=null;
// console.log(meet.fullName());
// console.log(p2.fullName());
// console.log(Person.prototype);
// console.log(meet.__proto__);
// console.log(p2.__proto__);
// console.log(p2.__proto__.__proto__);

let p3 = new Person ("mm","nn");
console.log(p3.toString());
p3.fullName();
console.log(p3.__proto__);
console.log(typeof p3);