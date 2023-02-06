myfun1 = function (a, b, c) {
  console.log(this.name + a * b * c);
};

// myBindedFun1 = myfun1.bind({name:"meet"});

// myBindedFun1();

// myOwnBind = function (obj, fun1) {

//     return function () {
//         obj.fun1 = fun1;
//         obj.fun1();
//         obj.fun1 = undefined;
//     }
// }
// p1 = {name: "meet "};
// myBindedFun2 = myOwnBind (p1, myfun1);
// myBindedFun2();
// p1.name = "meet vaishnani";
// myBindedFun2();

myOwnBind2 = function (obj) {
  let otherArgs = Array.from(arguments).slice(1);
  // console.log(arguments);
  console.log(otherArgs);
  let this2 = this;
  return function () {
    // console.log(this);
    // console.log(arguments);
    obj.fun1 = this2;
    obj.fun1(...otherArgs, ...Array.from(arguments));
    obj.fun1 = undefined;
  };
};

myfun1.__proto__.bind2 = myOwnBind2;
p1 = { name: 'meet ' };
myBindedFun2 = myfun1.bind2(p1, 1, 2, 3);
myBindedFun2(6, 7, 8);

myBindedFun3 = myfun1.bind2(p1);
myBindedFun3(6, 7, 8);