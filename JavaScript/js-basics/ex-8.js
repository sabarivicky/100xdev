let obj = { x: [1,2,3], y: [2,3,4], z: [4,5] }

function fun(data){
    return Object.values(data).flat().reduce((acc,num)=>{
        if(!acc.includes(num)){
            acc.push(num);
        }
        return acc;
    },[])
}

console.log(fun(obj));