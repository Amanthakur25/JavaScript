// Functions 

// 1. Simple Function
// function add(a,b)
// {
//     return a+b;
// }

// console.log(add(2,3));  

// 2. Anonymous funtion

// let fun =function(){
//     console.log("this is an example of anonymous fun");
// }

// fun();

// Arrow function 
// no need to use function keyword 
// no need to use () if single parameter 
// no need to use {}v if single line of expression 
// no nned to use return statment if single line of code 

// let invitation= name=> `welome ${name}  to the party`;

// console.log(invitation("aman"));


// Higher Order Function 

// 1. Passing functions as an argument (Higer Order Function)

// let Uppercase=function(str)
// {
//     return str.toUpperCase();
// }

// let Lowercase=function(str)
// {
//     return str.toLowerCase();
// }

// let transformer=function(str,fun)
// {
//     return fun(str);
// }

// console.log(transformer("hello this transformer funn is higher order function",Uppercase));

// higher order function returning another function

// let compleminent=function(msg)
// {
//     return function(name)
//     {
//         console.log(`${msg} ${name}`)
//     }
// }

// compleminent("you are a good coder")("aman");


// Immediately invoke function expression 

// (function(name)
// {
//     console.log(`this function will never execute again `,name);
// })("IIFI")

// Set timeout function

// function fun()
// {
//     console.log("hello with delay")
// }

// setTimeout(fun, 5000);


// hoisting variable are hoisted on the top of the scope 


// test()

// function test()
// {
//     console.log("this is hoisting ");
// }



