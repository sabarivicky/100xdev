let obj = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };

function fun(obj){
    const result = {};

    for(let key in obj){
        result[key] = obj[key].reduce((a,b)=>a+b,0);
    }
    return result;
}


console.log(fun(obj));