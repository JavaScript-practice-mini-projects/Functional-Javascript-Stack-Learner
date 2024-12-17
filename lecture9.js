var arr = [44, 66, 88, 9, 6, 3, 22,]

arr.sort((a, b) => {
    return b - a;
})

console.log(arr)

const people = [
    { name: "Charlie", age: 22 },
    { name: "Ethan", age: 35 },
    { name: "Bob", age: 30 },
    { name: "Diana", age: 28 },
    { name: "Alice", age: 25 }
  ];

people.sort( function(a, b) {
    return  b.age - a.age;
})

people.sort(function(a, b){
    return b.name.localeCompare(a.name)
})

console.log(people)