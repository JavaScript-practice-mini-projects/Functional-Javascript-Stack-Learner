var arr = [57, 74, 61, 84, 63, 36, 33, 19, 4, 100];

var newArr = []

for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 === 1){
        newArr.push(arr[i])
    }
}

var newarr = arr.filter(function(value){
    return value % 2 === 1
})

console.log(newarr)

function myFun(arr, callback){
    var value = []

    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            value.push(arr[i])
        }
    }
    return value
}

var result = myFun(arr, function(element){
    return element % 2 === 1
})

console.log(result)