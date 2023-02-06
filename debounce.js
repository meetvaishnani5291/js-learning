
let heavyFunction = function () {
    console.log("this function doing heavy task");
}

// document.querySelector('.btn1').addEventListener('click', heavyFunction);


let debounce = function (fun, time) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(fun, time);
    }
}

document.querySelector('.btn1').addEventListener('click', debounce(heavyFunction, 3000));
