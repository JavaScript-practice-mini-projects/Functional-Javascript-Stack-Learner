var arr = [5,3,2,6,8,9]



function callBackfn(a){
    console.log(a)
}
arr.forEach(callBackfn)

arr.forEach(function(a){
    console.log(a)
})


arr.forEach((a) => {
    console.log(a)
})


function caller(){
    return function(name){
        return 'called you ' + name
    }
}

const x = caller()
const y = x('Habib')

var a = x("Fency")
console.log( y, a)