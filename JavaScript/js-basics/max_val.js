let obj = { a: 10, b: 50, c: 2100 ,d:400}
let maxi = 0;
let max;
function fun(obj){

    for(let key in obj){
        if(obj[key]>maxi){
            maxi = obj[key];
            max = key;
        }
    }

    return max;
}

console.log(fun(obj));