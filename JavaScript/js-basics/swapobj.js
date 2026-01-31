let obj = { a: "x", b: "y", c: "z" }

function fun(obj){
    let result = {};
    for(let key in obj){
        result[obj[key]] = key;
    }
    return result;
}

console.log(fun(obj));