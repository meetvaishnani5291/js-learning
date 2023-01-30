const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let meet = new Person("meet", "vaishnani");
let p2 = new Person("fn", "ln");

console.log(meet);
console.log(p2);
console.log(meet instanceof Person);
p2.fullName = p2.firstName +" "+ p2.lastName;
console.log(p2);
console.log(p2 instanceof Person);