let obj = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

function fun(obj){
    return Object.values(obj).reduce((acc,arr)=>{
        return acc.concat(arr)
    },[]);
}

console.log(fun(obj));