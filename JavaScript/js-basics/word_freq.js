let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

function fun(arr){

    return arr.reduce((freq,word)=>{freq[word]=(freq[word]||0)+1;return freq},{});


}

console.log(fun(arr));