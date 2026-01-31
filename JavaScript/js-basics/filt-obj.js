let obj = { a: 20, b: 60, c: 40, d: 90 };

function fun(obj){
    return Object.fromEntries(Object.entries(obj).filter(([key,value])=> value>50));
}

console.log(fun(obj));