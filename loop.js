// loops -- repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6

// for loop
// why use for loop? when you know how many time you want to repeat a block.
// print 1 to  10 --> console.log(1); console.log(2);....console.log(10);
// Kaya thi javnu chhe --> kaya sudhi javnu chhe
// for (ex.1 -> 50 -> increment by 1)
// (start; end; change)
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }
// for (let i = 20; i >= 10; i--){
//     console.log(i);
// }

// while loop -- do while loop
// kaya thi javanu chhe --> Kaya rokavanu chhe --> kevi rite javanu chhe
// while (ex. 1 -> Hello World -> stop when condition false)
// start
// while(end){
// code
// change
// }
// let j = 10;
// while (j <= 20) {
//     console.log("j :", j);
//     j++;
// }

// let k = 20;
// while (k >= 10) {
//     console.log("k :", k);
//     k--;
// }
// loop
// let a = 50;
// while (a >= 20) {
//     console.log(a);
//     a--;
// }

// let b = 60;
// while (b <= 20) {
//     console.log("b :", b);
//     b++;
// }

// let c = 30;
// while (c >= 20) {
//     console.log("c :", c);
//     c--;
// }

// let d = 0;
// while (d < 5) {
//     console.log("Hello");
//     d++;
// }

// let f = 50;
// while (f <= 60) {
//     console.log("f", f);
//     f++;
// }

// let q = 50;
// while (q <= 60) {
//     console.log("q :", q);
//     q++;
// }

// do while loop
// do {} while (end);
// start
// do{
// code
// change
// }
// while (end);
// let g = 10;
// do {
//     console.log("do while : ", g);
//     g++;
// } while (g <= 20);

// let h = 10;
// do {
//     console.log("do while : ", h);
//     h--;
// } while (h >= 1); // while check after executing code block

// break
// for (let k = 1; k <= 201; k++) {
//     console.log(k);
//     if (k === 32) {
//         break;
//     }
// }
// for (let j = 1; j <= 80; j++) {
//     console.log(j);
//     if (j === 56) {
//         break;
//     }
// }

// continue 
// for (let l = 1; l <= 10; l++) {
//     if (l === 5) {
//         continue;
//     }
//     console.log(l);
// }
// for (let p = 1; p <= 90; p++) {
//     if (p === 45) {
//         continue;
//     }
//     console.log(p);
// }
// Example 1:
// Print number from 1 to 10 using a for loop.
for (let a = 1; a <= 10; a++) {
    console.log(a);
}
// Answer: 1,2,3,4,5,6,7,8,9,10

// Example 2:
// Print number from 10 to 1 using while loop.
// why:
let b = 10;
while (b >= 1) {
     console.log("b :", b);
     b--;
}
// Answer:10,9,8,7,6,5,4,3,2,1
// why:

// Example 3:
// Print even numbers from 1 to 20 using for loop.
// for(let i=1; i <= 20; i++){
//     if(i%2 === 0){
//     console.log(i);
//     }
// }
// // Answer:2,4,6,8,10,12,14,16,18,20

// // Example 4:
// // Print odd numbers from 1 to 15 using while loop.
// let i= 1;
// while(i <= 15){
//     if(i%2 !== 0){ 
//     console.log(i);
//     }
//     i++;
// }
// // Answer: 1,3,5,7,9,11,13,15

// // Example 5:
// // Print the multiplication table of 5.
// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }
// // Answer: 5 * 1 = 5

// // Example 6:
// // Find the sum of numbers from 1 to 100 using a loop.
// let sum = 0;
// for(let i=1; i <= 100; i++){
//     sum = sum + i;
// }
// console.log(sum);
// // Answer: 5050

// // Example 7:
// // Print all numbers between 1 to 50 that are divisible by 3.
// for(let i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }
// Answer: 3,6,9,12,15........

// Example 8:
// Ask the user for a number and print whether each number from 1 to that number is even or odd.
// let num = prompt("give a number");

// for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log(i, "is even");
//     } else {
//         console.log(i, "is odd");
//     }
// }
// // Answer: odd = 1, even = 2.

// // Example 9:
// // Count how many numbers between 1 to 100 are divisible by 3 or 5.
// for(let i=1; i<=100; i++){
//     if(i%3 ===0 || i%5 ===0){
//         console.log(i);
//     }
// }
// // Answer:3,5,6,9,10...........

// (Break and Continue)Example 10:
// Stop at First Multiple of 7
// Write a Loop from 1 to 100 that:
// Prints Each number
// Stop Completely when it finds the first number divisible by 7

// for(let i=1; i<=100; i++){
//     console.log(i);
//     if(i%7 === 0){
//         break;
//     }
// }
// Answer: 1,2,3,4,5,6,7

// Break and Continue)Example 11:
// Skip Multiples of 3
// Write a Loop From 1 to 20 that:
// Skip number divisible by 3
// Prints all other numbers
// for(let i=1; i<=20; i++){
//     if(i%3 === 0){
//         continue;
//     }
//     console.log(i);
// }
// Answer:3,6,9,12,15.....

// (Break and Continue)Example 12:
// Print First 5 Odd Numbers
// Write a loop from 1 to 100 that:
// Prints only 5 odd numbers
// Then stops the loop
// Use Both if, continue and a counter + break
count = 0;
for(let i = 1; i <= 10; i++){
    if(i%2 === 1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count === 5){
        break;
    }
}
// Answer:1,1,2,2,3,3,4,5,5,6,7,7,8,9,9
