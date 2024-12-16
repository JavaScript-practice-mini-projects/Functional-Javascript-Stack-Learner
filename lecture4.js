/**
 * lecture 4 about ..........
 */


function fullName(firstName, lastName, gender){

    let fullName;

    if(gender === 'male'){
        fullName = 'Mr.' + ' ' + firstName + ' ' + lastName
    }else if(gender === 'female'){
        fullName = 'Mst' + ' ' + firstName + ' ' + lastName
    }
    return fullName
}

const result = fullName('Habibur', 'Rahman', 'male')
console.log(result)


function example(){
    return {
        name: 'Habib',
        skill: ['HTML', 'CSS'],
        print: function(){
            console.log(this.name, this.skill)
        }
    }
}

const obj = example()
obj.print()