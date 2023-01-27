x = 3.145;

function myfun1() {
    console.log("1");
}
myfun1();
function myownwait(seconds) {
    console.log("2");
    myPromise = new Promise(function (resolve, reject) {
        console.log("3");
        if (!isNaN(seconds)) {
            setTimeout(() => resolve("hii after " + seconds), seconds * 1000);
        } else {
            myerr = Error("not a number.");
            reject(myerr);
        }
    });
    return myPromise;
}

myownwait(2)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


myfun1();
console.log("4");

