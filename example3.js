

// var person = {
//     firstname: 'Jason',
//     lastname: 'Rader',    
//     age: '23'
// }

// var personTwo = {
//     firstname: 'Justin',
//     lastname: 'Rader',    
//     age: '32'
// }

// var personThree = {
//     firstname: 'Jessica',
//     lastname: 'Rader',    
//     age: '31'
// }

// // var people = [person, personTwo, personThree]

// var people = [];

// people.push(person, personTwo, personThree)

// console.log(people);


// var tmp = {
//     repete3: function(x){
//         for(var i = 1; i <= 3; i++){
//             x();
//         }
//     }
//     },

//     hello: function(){
//     console.log("Goodbye");
//     }
// }

// // function hello(){
// //     console.log("Hello");
// // }

// var functionName = 'hello';

// tmp['repete3']( tmp[functionName] );
// tmp.repete3( tmp.hello );


var maths = {
    add: function(x,y){
        return x + y;
    },

    subtract: function(x,y){
        return x - y;
    },

    divide: function(x,y){
        return x / y;
    },

    multiply: function(x,y,){
        return x * y;
    },
}

console.log("Adding 5 + 87");
var answer = maths.add(5,87)
console.log(answer);
console.log("And add 522 and 739473649");
console.log(maths.add(522,739473649));