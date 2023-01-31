x = 3.145;

function myfun1() {
  console.log("1");
}
// myfun1();
function myownwait(seconds) {
  //   console.log("2");
  myPromise = new Promise(function (resolve, reject) {
    // console.log("3");
    if (!isNaN(seconds)) {
      setTimeout(() => resolve("hii after " + seconds), seconds * 1000);
    } else {
      myerr = Error("not a number.");
      reject(myerr);
    }
  });
  return myPromise;
}

// myownwait(2)
//     .then((res) => res+1)
//     .then(res => console.log(res))
//     .catch((err) => console.log(err));

console.log(
  myownwait("dd")
  .then(() => {
      console.log("hii from then1");
      throw "err1";
      return 1;
    })
    .then(() => {
      console.log("this will never displayed.");
    })
    .catch(function (err) {
      console.log(err);
    })
  // .then((data) => {
  //   console.log(data);
  //   return myownwait("mm");
  // })
  // .catch(function (err) {
  //     console.log("hi from catch"+err);
  // })
);

// myfun1();
console.log("4");


let fun1 = function (){
  return Promise.resolve("promise1 resolved.")
    
}

let fun2 = function (){
  return Promise.reject("promise2 resolved.")
}

// Promise.all([fun1() , fun2()]);
fun1().then((res)=>{
  console.log(res);
});