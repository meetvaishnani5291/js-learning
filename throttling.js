let heavyFunction = function () {
    console.log("this function doing heavy task");
}

// document.querySelector('.btn1').addEventListener('click', heavyFunction);


let throttle = function (fun, time) {
    let flag = true;
    
    return function () {
        if(flag) {
            flag = false;
            fun();
            setTimeout(() => flag = true ,  time);
        }
    }
    
}

document.querySelector('.btn1').addEventListener('click', throttle(heavyFunction, 3000));
