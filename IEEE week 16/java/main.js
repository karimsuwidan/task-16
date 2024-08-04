
// 01
// let now=new Date()
// let birthday= new Date("aug 3 2002")
// let birth=now-birthday
// console.log(`${birth/1000}  seconds`)
// console.log(`${birth/1000/60}  Minutes`)
// console.log(`${birth/1000/60/60}  Hours`)
// console.log(`${birth/1000/60/60/24} Days`)
// console.log(`${birth/1000/60/60/24/365*30} Months`)
// console.log(`${birth/1000/60/60/24/365} Years`)


// 02
// let now=  new Date()
// now.setTime(1000)
// now.setFullYear("1980")

// console.log(now)




// 03
// let now=  new Date()
// now.setDate(0)
// console.log(now)
// let months=["jan","feb","march","april","may","juni","july","aug","sep","oct","nov","dec"]
// console.log(`Previous Month Is ${months[now.getMonth()]} And Last Day Is ${now.getDate()}`)



// 04

// let now=new Date()
// let birth1=new Date("oct 25 1982")
// let birth2=new Date(1982,9,25)
// let birth3=new Date("1982-10-25T00:00:00")
// console.log(birth1)
// console.log(birth2)
// console.log(birth3)




// IMPORTANT
// 05
// IMPORTANT
// let start = performance.now(); 
// for (let i = 1; i <= 99999; i++) { 
// 	console.log(i); 
// } 
// let end = performance.now(); 
// let duration = end -start
// document.write(`time duration is ${duration.toFixed()}/ms`)




// 06
// function* generation(){
//     let index=14;
//     let first=140;
//     let sum=index+first;
//     while(true){
//         yield sum;
//         sum+=first+=200;
//     }
// }
// let generator=generation()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())


// 07
// function* genNumbers() {
//     yield* [1, 2, 2, 2, 3, 4, 5];
//   }
//   function* genLetters() {
//     yield* ["A", "B", "B", "B", "C", "D"];
//   }

// function* genAll(){
//     yield* new Set (genNumbers());
//     yield* new Set(genLetters())
// }  
//   let generator = genAll();

//   console.log(generator.next()); // {value: 1, done: false}
//   console.log(generator.next()); // {value: 2, done: false}
//   console.log(generator.next()); // {value: 3, done: false}
//   console.log(generator.next()); // {value: 4, done: false}
//   console.log(generator.next()); // {value: 5, done: false}
//   console.log(generator.next()); // {value: "A", done: false}
//   console.log(generator.next()); // {value: "B", done: false}
//   console.log(generator.next()); // {value: "C", done: false}
//   console.log(generator.next()); // {value: "D", done: false}



// 08
// // main.js File
// import calc from "./mod-one.js"
// import * as modOne from "./mod-two.js"

// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); 




