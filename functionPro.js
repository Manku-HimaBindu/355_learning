// // function main(a,b){
// //     console.log(b);
// //     console.log(a());
// // }

// // main(function(){
// //     return"I am cbf1"
// // },10)

// // main(function(){
// //     return"I am cbf2"
// // },20)

// // main(function(){
// //     return 10+20;

// // },35)
// // main(function(){
// //     return 10/2
// // })

// let operation=function (task){
//     let a=Number(prompt("enter a: "));
//     let b=Number(prompt("enter b: "))
   
//     console.log( task(a,b)
// );
    
// }

// operation(function(a,b){
//     return a+b
// })

// operation(function(a,b){
//     return a-b
// })

// operation(function(a,b){
//     return a*b
// })


let a=()=>console.log("hello");
console.log(a);
a();

let b = () => {return "hello"}
console.log(b)
console.log( b())



let operation=(task)=>{
    let a=Number(prompt("enter a: "));
    let b=Number(prompt("enter b: "));
    console.log(task(a,b));



}

operation((a,b)=>{console.log("addition")
    return a+b})
operation((a,b)=>{console.log("subtraction");

    return a-b})
operation((a,b)=>{console.log("multiplication");

    return a*b})






   