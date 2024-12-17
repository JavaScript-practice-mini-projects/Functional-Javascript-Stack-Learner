function hello(name){
    print(name);
    print('something else')
}

hello('Habib')


function print(params){
    console.log(params)
}

function func(name, print2){
    print2(name)
}


func('Fency, Habib', abc)

function abc(params){
    console.log(params)
}

func('I will trying', function(params){
    console.log(params)
})

func('Fency', (params) => {
    console.log(params + ' Hi, what do you do now?')
})