/**
 * lecture 3 about inner function 
 */

function outer(){

    function inner(){
        console.log('I\'m Inner function')
    }
    inner()
    console.log('This is outer function ')
}
outer()

function mathFunc(a, b){

    function sum(){
        return a + b
    }
    
    function sub(){
        return a - b
    }

    function times(){
        return a * b
    }

    function div(){
        return a / b
    }

    return sum() + sub() + times() + div() 
}

var result = mathFunc(5,10)
console.log(result)