const number = Math.random()
// // console.log(number)

// if (number < 0.1){
//     console.log('Faulty Calculator')
//     const calculator = (a,b) =>{
//         let sum = a-b;
//         let product = a+b;
//         let diff = a/b;
//         let divide = a**b;
//         return [sum, product, diff, divide];
//     }
//     console.log(calculator(5,2));
// }
// else{
//     console.log('Normal Calculator')
//     const calculator = (a,b) =>{
//         let sum = a+b;
//         let product = a*b;
//         let diff = a-b;
//         let divide = a/b;
//         return [sum, product, diff, divide]
//         }
//     console.log(calculator(5,2));
// }
let a  = prompt("Enter a : ")
let b = prompt("Enter b : ")
let opr = prompt("Enter Operation")
const obj = {
    '+':'-',
    '*':'+',
    '-':'/',
    '/':'**',
}

if (number < 0.1){
    opr = obj[opr]
    alert(`The result is ${eval(`${a} ${opr} ${b}`)}`)   
}
else{
    alert(`The result is ${eval(`${a} ${opr} ${b}`)}`)
}



