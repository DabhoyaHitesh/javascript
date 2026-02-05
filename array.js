// Array - Hold multiple values at a same time
// [1, 2, 3, 4, 5]
// ["Hello", "a", "B", "C"]
// [2, "Bye", "Hello", 50]

// Create
// define a vairiable = [multiple values]
let arr = [1, 2, 3, 4];

// access
// position = [0, 1, 2, 3]
// access
// array_name[position]
// arr[3], arr[2], arr[10]

// modify
// array_name[position] = new_value
// arr[0] = 10; 

// Array Methods: (variable_name.method_name())
// push, pop, shift, unshift, length, toString, sort, reverse
// push --> enter new value into array -- place it into last
arr.push(5);
// variable || function.method --> koi variable ke function ni pachal dot(.) kari ne lakho to te method kevai
// use case -- enter new products into existing product list
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange"); // ["Apple", "Banana", "Mango", "Orange"]
fruits.pop();
// pop --> remove last value from array
arr.pop();
// use case -- remove last product you add into your list

// shift --> remove first value into array
arr.shift();
// use case -- remove old product automatic after sometime

// // unshift --> add value into  -- first
arr.unshift(10);
// // use case -- add a value into top of that data you receive

// splice  - remove value into array -- specific position and specific number of values
// into () - first index(position), how many values you want to remove
let e = [10, 20, 30, 40, 50];
e.splice(3, 2);
// use case -- select msg and remove multiple msg at on click


// slice - copy values from array -- specific position and specific number of values
// new variable = array_name.slice(start_position, end_position)
// start index -- include into copy
// end index -- exclude from copy
let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3);
// use case -- copy specific data and save it into new variable
let products = ["Shirt", "Pant", "Jeans", "Socks", "Belt"];
let new_products = products.slice(1, 4);

// generate a report based on data and generate a file or save the file into your local machine

// splice vs slice
// splice -- remove values into main array -- modify new array
// slice -- copy values from main array -- create a new array that hold the value that you can into

// reverse -- reverse the array values
let g = [25, 30, 35, 40, 85];
g.reverse();
// use case -- show latest update first into your frontend

//sort -- set into asending order
let h = [50, 20, 80, 10, 40];
h.sort();
// let h = [11, 62, 3, 4, 25];
// let sorted_h = h.sort(function(a, b) {
//     return a - b;// asending order
// });

// let h = [11, 62, 3, 4, 25];
// let sorted_h = h.sort(function(a, b) {
//     return b - a;// dsending order
// })
// use case -- sort product price from low to high

// ************************************** excerise **********************************

// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
// Answer: tasks = ['Wake up', 'Brush teeth', 'Buy milk']
// Why : added 'Buy milk' at the end of the array using push method

// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
// Answer: notifications = ['Email', 'Message']
// Why : removed 'Reminder' from the end of the array using pop method

// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
// Answer: customers = ['Customer2', 'Customer3']
// Why : removed 'Customer1' from the beginning of the array using shift method

// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
// Answer: playlist = ['Song A', 'Song B', 'Song C']
// Why : added 'Song A' at the beginning of the array using unshift method

// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
// Answer: students = ['Mike', 'John', 'Sara', 'Emma', 'Sophia']
// Why : removed 'Alex' from index 1 and added 'John' and 'Sara' at the same position

// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
// Answer: menu = ['Burger', 'Salad']
// Why : removed 'Pizza' and 'Pasta' starting from index 1 using splice method

// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5, 7);
// Answer: weekend = ['Saturday', 'Sunday']
// Why : copied 'Saturday' and 'Sunday' from index 5 to 7 using slice method




// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
// Answer: levels = ['Hard', 'Medium', 'Easy']
// Why : reversed the order of elements in the array using reverse method




// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
// Answer: scores = [12, 34, 45, 78, 89]
// Why : sorted the scores from lowest to highest using sort method with comparison function



// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
// Answer: prices = [49, 149, 199, 299, 999]
// Why : sorted the prices from lowest to highest using sort method with comparison function




// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products1 = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);
// Answer: firstThree = ['Laptop', 'Phone', 'Tablet']
// products remains unchanged
// Why : copied first 3 items from index 0 to 3 using slice method without modifying original array




// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
ans: colors.splice(2, 1, 'Purple', 'Orange')
// Answer: colors = ['Red', 'Green', 'Purple', 'Orange', 'Yellow']
// why : removed 'Blue' from index 2 and added 'Purple' and 'Orange' at the same position



// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
// Answer: steps = ['Step 3', 'Step 2', 'Step 1', 'Final Step']
// Why : reversed the order of elements using reverse method and added 'Final Step' at the end using push method


// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
ans: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
// Answer: names = ['alice', 'Bob', 'charlie', 'David']
// Why : sorted names alphabetically ignoring case sensitivity using sort method with comparison function





// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
// Answer: movies = ['Gladiator', 'Inception', 'Titanic']
// Why : added 'Inception' at the end using push, removed first movie using shift, sorted alphabetically using sort

// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);
// Answer: [2, 3]
// Why : splice returns an array of removed elements, which are 2 and 3 in this case




// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
// Answer: No, nums2 remains [10, 20, 30, 40]
// Why : slice does not modify the original array, it creates a new array with the selected elements


// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
// Answer: letters is now ['c', 'b', 'a'] as reverse() mutates the original array
// Why : reverse() method modifies the original array in place


// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr1 = ['x', 'y', 'z'];
arr1.splice(1, 0, 'new');
// Answer: 'new' is inserted at index 1, arr1 becomes ['x', 'new', 'y', 'z']
// Why : when deleteCount is 0, splice inserts new elements without removing any



// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
// Answer: []
// why : negative value not considered in slice method



// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array
// b) Keep the original array unchanged
// Answer:
// a) splice()
// b) slice()
// Why : splice modifies the original array, while slice creates a new array without changing the original




// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
// Answer: arr2 = [2, 3, 1]
// Why : shift removes 1 and returns it, push adds it to the end, resulting in [2, 3, 1]


// use case -- sort product price low to high

let arr11 = [10, 2, 5, 20, 30]
let sort_var1 = arr11.sort((a, b) => a - b)

let arr22 = ['b', 'f', 'z', 'q', 'm', 'k']
arr22.sort()
let sort_var2 = arr22.sort((a, b) => a - b)


// For Each Loop
// for Each -- Array ni darek value mate loop chalse
let i = [10, 35, 40, 68]

i.forEach(val => {
    let new_val = val + 10;
    console.log(new_val);
})
// for Each -- Array ni darek string mate loop chalse
let j = ['Laptop', 'Watch', 'Phone', 'TV']

j.forEach(str => {
    let new_str = str + 'Add Now';
    console.log(new_str);
})

// .map() Method:
// map tyare j use karvu ke jare ek new array create karvo chhe
// first map create a black array -- only for understanding
let data = [10, 20, 50, 40, 15];
// same like a for each loop but map return a new array
let temp_data = data.map(val => {
    if (val > 20) {
        return val;
    }
});

// 1. Double daily steps count

// Real life: Fitness app doubling step goal

// const step = [1000, 2000, 3000];

// function doubleSteps(step) {
//   return step * 2;
// }
// const newSteps = step.map(doubleSteps);
// Answer: [2000, 4000, 6000]

// 2. Convert minutes to seconds
// Real life: Video duration calculation

// const minutes = [1, 5, 10];

// const seconds = minutes.map(function(min) {
//   return min * 60;
// });
// Answer: [60, 300, 600]

// 3. Add ₹50 delivery charge to prices

// Real life: Food delivery app

// const price = [200, 350, 500];

// const finalPrices = price.map(price => price + 50);
// Answer: [250, 400, 550]


// 4. Convert exam marks to grades

// Real life: Result system

// const marks = [35, 72, 88, 40];

// function getGrade(mark) {
//   return mark >= 40 ? 'Pass' : 'Fail';
// }

// const grades = marks.map(getGrade);
// Answer: ['Fail', 'Pass', 'Pass', 'Pass']


// 5. Capitalize names

// Real life: Display usernames properly

const name = ['rahul', 'neha', 'amit'];

const formattedNames = names.map(name =>
    name[0].toUpperCase() + name.slice(1)
);
// Answer: ['Rahul', 'Neha', 'Amit']


// 6. Apply 10% discount

// Real life: Shopping sale

// const prices = [500, 1000, 1500];

// function applyDiscount(price) {
//   return price - price * 0.10;
// }

// const discounted = prices.map(applyDiscount);
// Answer: [450, 900, 1350]


// 7. Add bonus points to scores based on condition

// Real life: Game scoring system

// const scores = [45, 60, 85];

// const finalScores = scores.map(score => {
//   if (score >= 80) return score + 20;
//   if (score >= 50) return score + 10;
//   return score;
// });

// Answer: [45, 70, 105]

// 8. Convert temperatures with formula

// Real life: Weather app

const celsius = [0, 20, 30];

function toFahrenheit(temp) {
    return (temp * 9 / 5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);
// Answer: [32, 68, 86]


// 9. Generate table of numbers

// Real life: Math learning app

// const numbers = [1, 2, 3, 4];

// const tableOfTwo = numbers.map(num => num * 2);

// Answer: [2, 4, 6, 8]

// 10. Combine map with string formatting

// Real life: SMS notification system

const balances = [500, 1200, 300];

const messages = balances.map(balance =>
    `Your balance is ₹${balance}`
);
// Answer: [ "Your balance is ₹500", "Your balance is ₹1200", "Your balance is ₹300" ]

// filter
// filter tyare use karvu ke jare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];

let expensive_laptops = laptops_price.filter((price) => {
    if (price > 30000) return true;
});

// je value 30000 thi vadhare chhe te new array ma add thase and biji value ne array ma add nahi kare
// use case -- data ma thi specific data new array ma store karvo hoy based on condition
// EX. PRODUCT MA THI SPECIFIC PRICE NA PRODUCAT NEW ARRAY MA STORE KARVA HOY
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price 
let product_type = ['Mobile', 'Tablet', 'Laptop', 'Mouse', 'Keyboard'];
let filter_product_type = product_type.filter((type) => {
    if (type === 'Tablet' || type === 'Mobile') return true;
});


// 1. Get even numbers
// **Real life:** Find even roll numbers
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// // Answer: [2, 4, 6]

// // ### 2. Filter adults
// // **Real life:** Allow only 3+ users
// const ages = [2, 1, 10, 16, 5];
// function isAdult(age) {
//   return age >= 18;
// }
// const adults = ages.filter(isAdult);
// // Answer: []

// // ### 3. Remove empty items
// // **Real life:** Clean user input

// const inputs = ['Hello', '', 'World', '', 'JS'];
// const validInputs = inputs.filter(text => text !== '');
// // Answer: ['Hello', 'World', 'JS']

// // ### 4. Filter passing marks
// // **Real life:** Exam result system
// const marks = [35, 72, 88, 40, 25];
// const passedStudents = marks.filter(mark => mark >= 40);
// // Answer:  [72, 88, 40] 

// // ### 5. Get affordable prices
// // **Real life:** Shopping app price filter

// const prices = [199, 499, 999, 1499, 299];
// const affordable = prices.filter(price => price <= 500);
// // Answer: [199, 499, 299]

// // ### 6. Filter long words
// // **Real life:** Search keyword validation

// const words = ['hi', 'hello', 'javascript', 'ok'];
// function isLongWord(word) {
//   return word.length > 3;
// }
// const longWords = words.filter(isLongWord);
// // Answer:  ['hello', 'javascript']

// // ### 7. Filter positive numbers
// // // **Real life:** Bank transaction validation
// const transactions = [200, -100, 500, -50, 300];
// const credits = transactions.filter(amount => amount > 0);
// // Answer:  [200, 500, 300]

// // ### 8. Filter numbers within a range
// // **Real life:** Score selection

// const scores = [45, 60, 85, 30, 90];
// const selectedScores = scores.filter(score => score >= 50 && score <= 90);
// // Answer:  [60, 85, 90]


// reduce
// reduce tyare juse karvu ke jare ek single value calculate karvi hoy from array
let total_price = [15, 68, 45, 58, 52, 48];

let final_price = total_price.reduce((accumulator, val) => {
    return accumulator + val;
}, 0); //initial value of accumulator
// 0 + 10 => 10
// 10 + 10 => 20
// 20 + 10 => 30
// 30 + 10 => 40
// accumulator --> je value function ma return thase te accumulator ma store thase --> accumulator name change kari sako cho
// val --> array ni darek value

// use case -- data ma thi ek single value calulate karvi hoy
// ex. producat ma thi total price calculate karvi hoy


// // ### 1. Total money in wallet
// // **Real life:** Add all cash amounts

// const money = [100, 200, 50];
// const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
// // Answer: 350

// // ### 2. Total steps walked in a week
// // *Real life:** Fitness tracker

// const steps = [3000, 5000, 4000, 6000];
// function addSteps(total, step) {
//   return total + step;
// }
// const weeklySteps = steps.reduce(addSteps, 0);
// // Answer: 18000

// // ### 3. Find total cart price
// // **Real life:** Shopping bill
// const prices = [499, 299, 199];
// const totalPrice = prices.reduce((total, price) => total + price, 0);
// // Answer: 997

// // ### 4. Find maximum score
// // **Real life:** Highest exam mark

// const marks = [45, 88, 67, 92];
// const highest = marks.reduce((max, mark) => {
//   return mark > max ? mark : max;
// }, marks[0]);
// // Answer: 92

// // ### 5. Count total characters
// // **Real life:** Text length calculation

// const words = ['Hi', 'Hello', 'JS'];
// const totalChars = words.reduce((count, word) => count + word.length, 0);
// // Answer: 9

// // ### 6. Combine words into a sentence
// // **Real life:** Message builder

// const words1 = ['Learning', 'JavaScript', 'is', 'fun'];
// const sentence = words1.reduce((text, word) => text + ' ' + word);
// // Answer: 'Learning JavaScript is fun'

// // ### 7. Count passed students
// // **Real life:** Result summary

// const marks1 = [35, 72, 88, 40, 25];
// const passCount = marks1.reduce((count, mark) => {
//   return mark >= 40 ? count + 1 : count;
// }, 0);
// // Answer: 3

// // ### 8. Calculate final balance
// // **Real life:** Bank account calculation

// const transactions = [1000, -200, -300, 500];
// const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
// // Answer: 1000


// // ### 10. Build comma-separated string
// // **Real life:** Display values in UI

// const items = ['Pen', 'Book', 'Pencil'];
// const result = items.reduce((text, item) => text + ', ' + item);
// // Answer: 'Pen, Book, Pencil'


// // ### Q1. Shopping App – Discounted Total
// // You are given a list of item prices.

// // **Tasks:**

// // 1. Keep only items costing more than 500
// // 2. Apply a 10% discount to those items
// // 3. Find the total amount to pay

// const prices = [200, 800, 1200, 450, 700];

// const total = prices
//   .filter(price => price > 500)   
//   .map(price => price * 0.9)      
//   .reduce((sum, price) => sum + price, 0);

// console.log(total);
// // Answer: 2430


// // ### Q2. Fitness App – Total Active Minutes
// // You are given daily activity minutes.

// // **Tasks:**

// // 1. Keep only days with more than 30 minutes activity
// // 2. Convert minutes to calories (1 min = 5 calories)
// // 3. Calculate total calories burned

// const minutes = [20, 45, 60, 15, 90];
// const totalCalories = minutes
// .filter(min => min > 30)
// .map(min => min * 5)
// .reduce((total, cal) => total + cal, 0);
// console.log(totalCalories);
// // Answer: 975

// // ### Q3. Exam System – Average of Passed Marks
// // You are given marks of students.
// // **Tasks:**
// // 1. Keep only passing marks (>= 40)

// // 2. Calculate the average of passed marks

// const marks = [35, 72, 88, 40, 25, 90];
// const passed = marks.filter(mark => mark >= 40);
// const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;
// console.log(average);
// console.log(passed)
// // Answer: 72.5  [72, 88, 40, 90]

// // Q4. Salary System – Monthly Payout
// // You are given daily wages.
// // **Tasks:**

// // 1. Keep wages greater than 500
// // 2. Add a bonus of 100 to each
// // 3. Calculate total payout

// const wages = [300, 800, 450, 1000, 600];
// const totalPayout = wages
// .filter(wage => wage > 500)
// .map(wage => wage + 100)
// .reduce((total, wage) => total + wage, 0);
// console.log(totalPayout)
// // Answer: 2700

// // ### Q5. Online Course – Completion Points
// // You are given lesson completion percentages.
// // **Tasks:**

// // 1. Keep only completed lessons (>= 50%)
// // 2. Convert percentage into points (percentage × 2)
// // 3. Calculate total points

// const progress = [20, 50, 75, 40, 100];
// const totalPoints = progress
// .filter(p => p >= 50)
// .map(p => p * 2)
// .reduce((sum, p) => sum + p, 0);
// console.log(totalPoints)
// // Answer: 450

// // ### Q6. Bank Transactions – Final Balance
// // You are given a list of transactions.
// // **Tasks:**

// // 1. Keep only credit transactions (positive values)
// // 2. Add 2% interest to each credit
// // 3. Calculate final credited amount

// const transactions = [1000, -500, 2000, -300, 1500];
// const creditedAmount = transactions
// .filter(amount => amount > 0)
// .map(amount => amount * 1.02)
// .reduce((total, amount) => total + amount, 0);
// console.log(creditedAmount)
// // Answer: 4590

// // ### Q7. Game App – Final Score
// // You are given scores from multiple rounds.
// // **Tasks:**

// // 1. Keep scores greater than 50
// // 2. Add bonus points (+10)
// // 3. Calculate final score

// const scores = [30, 60, 90, 45, 80];
// const finalScore = scores
// .filter(score => score > 50)
// .map(score => score + 10)
// .reduce((sum, score) => sum + score, 0);
// console.log(finalScore)
// // Answer: 260

// // ### Q8. E-commerce – Total Taxed Amount
// // You are given item prices.
// // **Tasks:**

// // 1. Keep items priced above 1000
// // 2. Add 18% tax
// // 3. Calculate final payable amount

// const prices1 = [500, 1200, 3000, 800, 1500];
// const finalAmount = prices1
// .filter(price => price > 1000)
// .map(price => price * 1.18)
// .reduce((sum, price) => sum + price, 0);
// console.log(finalAmount)
// // Answer: 6726

// // ### Q9. Attendance System – Reward Points
// // You are given daily attendance hours.

// // **Tasks:**

// // 1. Keep days with attendance >= 8 hours
// // 2. Convert hours into points (1 hour = 10 points)
// // 3. Find total points earned

// const hours = [6, 8, 9, 7, 10];
// const totalPoints1 = hours
// .filter(hour => hour >= 8)
// .map(hour => hour * 10)
// .reduce((sum, point) => sum + point, 0);
// console.log(totalPoints1)
// // Answer: 270

// // ### Q10. Interview Brain Teaser 
// // You are given a list of numbers.
// // **Tasks:**
// // 1. Keep only even numbers
// // 2. Square each number
// // 3. Find the sum of squares

// const numbers = [1, 2, 3, 4, 5, 6];
// const sumOfSquares = numbers
// .filter(num => num % 2 === 0)
// .map(num => num * num)
// .reduce((sum, num) => sum + num, 0);
// console.log(sumOfSquares)
// // Answer: 56

// ### Q1. Grocery Store – Total Cost

// 1. Keep items costing more than 100
// 2. Add 5% tax
// 3. Find total cost


const prices1 = [50, 120, 300, 80, 200];
const total = prices1
    .filter(p => p > 100)
    .map(p => p * 1.05)
    .reduce((s, p) => s + p, 0);
console.log(total);
// Answer: 651
// ### Q2. Fitness App – Weekly Calories

// 1. Keep days with workout minutes >= 20
// 2. Convert minutes to calories (1 min = 4 cal)
// 3. Find total calories

const minutes = [10, 25, 40, 15, 60];
const totalCalories = minutes
    .filter(m => m >= 20)
    .map(m => m * 4)
    .reduce((s, c) => s + c, 0);
console.log(totalCalories)
// Answer: 500

// ### Q3. Exam Results – Total Passed Marks

// 1. Keep passing marks (>= 40)
// 2. Find total marks

const marks = [35, 55, 80, 20, 45];
const totalPassed = marks
    .filter(m => m >= 40)
    .reduce((s, m) => s + m, 0);
console.log(totalPassed)
// Answer: 180

// ### Q4. Bank App – Total Credits

// 1. Keep only positive transactions
// 2. Find total credited amount

const transactions = [500, -200, 1000, -300, 700];
const totalCredit = transactions
    .filter(t => t > 0)
    .reduce((s, t) => s + t, 0);
console.log(totalCredit)
// Answer: 2200

// ### Q5. Online Sale – Discounted Bill

// 1. Keep items above 1000
// 2. Apply 15% discount
// 3. Find total payable amount

const prices2 = [800, 1500, 3000, 600, 1200];
const total1 = prices
    .filter(p => p > 1000)
    .map(p => p * 0.85)
    .reduce((s, p) => s + p, 0);
console.log(total1)
// Answer: 3995

// ### Q6. Attendance – Reward Points

// 1. Keep attendance hours >= 7
// 2. Convert hours to points (×10)
// 3. Find total points


const hour = [5, 7, 8, 6, 9];
const totalPoints = hour
    .filter(h => h >= 7)
    .map(h => h * 10)
    .reduce((s, p) => s + p, 0);
console.log(totalPoints)
// Answer: 240


// ### Q7. Delivery App – Total Distance
// 1. Keep trips longer than 5 km
// 2. Add 1 km bonus per trip
// 3. Find total distance


const distances = [3, 6, 10, 4, 8];
const totalDistance = distances
    .filter(d => d > 5)
    // 10,6,8
    .map(d => d + 1)
    // 11, 7, 9
    .reduce((s, d) => s + d, 0);
console.log(totalDistance)
// Answer: 27

// ### Q8. Salary System – Final Salary

// 1. Keep salaries above 20,000
// 2. Add 2,000 bonus
// 3. Find total salary payout

const salaries = [18000, 25000, 30000, 15000];
const totalSalary = salaries
    .filter(s => s > 20000)
    .map(s => s + 2000)
    .reduce((s, a) => s + a, 0);
console.log(totalSalary)
// Answer: 59000

// ### Q9. Study App – Total Study Time

// 1. Keep sessions longer than 1 hour
// 2. Convert hours to minutes
// 3. Find total study minutes


const hour1 = [0.5, 1.5, 2, 0.75, 3];
const totalMinutes = hour.filter(h => h > 1).map(h => h * 60).reduce((s, m) => s + m, 0);
console.log(totalMinutes)
// Answer: 360

// ### Q10. Electricity Usage – Monthly Bill

// 1. Keep usage above 100 units
// 2. Multiply by cost per unit (₹6)
// 3. Find total bill

const units = [80, 120, 200, 90, 150];
const bill = units
    .filter(u => u > 100)
    .map(u => u * 6)
    .reduce((s, b) => s + b, 0);
console.log(bill)
// Answer: 2820

// ### Q11. Game Scores – Final Power Score

// 1. Keep scores above 40
// 2. Double each score
// 3. Find total power score


const scores1 = [30, 50, 90, 20, 70];
const powerScore = scores
    .filter(s => s > 40)
    .map(s => s * 2)
    .reduce((s, p) => s + p, 0);
console.log(powerScore)
// Answer: 420


// ### Q12. Travel App – Total Fare

// 1. Keep rides longer than 10 km
// 2. Add ₹50 service fee
// 3. Find total fare

const rides = [5, 12, 20, 8, 15];
const totalFare = rides
    .filter(r => r > 10)
    .map(r => r + 50)
    .reduce((s, f) => s + f, 0);
console.log(totalFare)
// Answer:147

// ### Q13. Office Work – Productive Hours

// 1. Keep hours >= 6
// 2. Convert hours to minutes
// 3. Find total productive minutes

const hours = [4, 6, 8, 5, 9];
const productiveMinutes = hours
    .filter(h => h >= 6)
    .map(h => h * 60)
    .reduce((s, m) => s + m, 0);
console.log(productiveMinutes)
// Answer: 1380

// ### Q14. Shopping Cart – Reward Coins

// 1. Keep purchases above ₹500
// 2. Give 10 coins per purchase
// 3. Find total coins earned

const purchases = [300, 800, 1200, 400];
const coins = purchases
    .filter(p => p > 500)
    .map(() => 10)
    .reduce((s, c) => s + c, 0);
console.log(coins)
// Answer: 20

// ### Q15. Fuel App – Total Fuel Cost

// 1. Keep fuel purchases above 5 liters
// 2. Multiply by ₹105 per liter
// 3. Find total cost

const liters = [3, 6, 10, 4, 8];
const fuelCost = liters
    .filter(l => l > 5)
    .reduce((sum, l) => sum + l * 105, 0);

console.log(fuelCost);

// Answer: 2520

// ### Q16. Interview Classic – Sum of Cubes
// 1. Keep odd numbers
// 2. Cube each number
// 3. Find total sum

const numbers1 = [1, 2, 3, 4, 5];
const sumOfCubes = numbers1
    .filter(n => n % 2 !== 0)
    .map(n => n ** 3)
    .reduce((a, b) => a + b, 0);

console.log(sumOfCubes);
// Answer: 153

// ### Q17. Performance Tracking – Bonus Points

// 1. Keep values above average
// 2. Add 5 bonus points
// 3. Find total score

const scores2 = [10, 20, 30, 40, 50];
const avg = scores2.reduce((a, b) => a + b, 0) / scores2.length;

const totalScore = scores2
    .filter(s => s > avg)
    .map(s => s + 5)
    .reduce((a, b) => a + b, 0);

console.log(totalScore);
// Answer: 100

// ### Q18. Subscription App – Final Bill

// 1. Keep subscriptions above ₹300
// 2. Add 18% tax
// 3. Find final bill

const plans = [199, 399, 599, 299];
const finalBill = plans
    .filter(p => p > 300)
    .map(p => p * 1.18)
    .reduce((a, b) => a + b, 0);

console.log(finalBill);
// Answer: 1178.64

// ### Q19. Learning App – Achievement Score

// 1. Keep scores >= 60
// 2. Square each score
// 3. Find total score

// const scores = [45, 60, 70, 30, 80];
// const achievementScore = scores
//   .filter(s => s >= 60)
//   .map(s => s ** 2)
//   .reduce((a, b) => a + b, 0);

// console.log(achievementScore);
// Answer: 14900

// ### Q20. Interview Finisher 

// 1. Keep numbers divisible by 3
// 2. Multiply by 10
// 3. Find total sum

const numbers = [3, 6, 9, 10, 12];
const finalSum = numbers
    .filter(n => n % 3 === 0)
    .map(n => n * 10)
    .reduce((a, b) => a + b, 0);

console.log(finalSum);
// Answer: 300




// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nahi
// never returns what you return inside it
// returns the array element itself -- not return array
// .find() stops at the first match
// It does not continue looping
let product = ["Laptop", "Mobile", "Tablet",
    "Desktop", "Smart Watch"];
let find_product = product.find((item) => {
    //console.log("can't find product"); // not working why??
    if (item === "Mobile") {
        return true;
    } else if (item === "Tablet") {
        return true;
    } else {
        return false;
    }
});

// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall 
// chack the list of visitors
let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];
// find --> you are looking for the first person named "Sara" in the list and stop searching (Pehli var j male, bas e j and Anagal check j na kare) 
let person = people.find((name) => name === "Sara");
console.log(person);

// filter -- > you want to find all visitors named "Sara" in the list (all data check kare and list na end sudhi check kare)
let AllSara = people.filter((name) => name === "Sara");
console.log(AllSara);

// example 2: Book bus for travel

// some
// check kare c he ke array ma koi pan ek item condition satisfy kare che ke nahi
// condition ture aave tyare stop kare
// some() vs find() return value of array
// give ans in true and false
let marks1 = [10, 20, 35, 90];
let any = marks1.some((val) => {
    if (val > 85) return true;
    // if (val <85) return "need improvement";
});
console.log(any)
// use case -- check if some product are out of stock in your cart                                              

// every
// check kare che l array badha j items confition satisfiy kare che ke nahi
// true -- badha items condition match kare
// false -- ek pan fail thay to
let def = [20, 30, 90, 45];
let num = def.every((val) => {
    if (val > 40);
});
// use case --> check all student is pass or not

// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// method --> condition --> output
// .some() --> item === "Mobile" --> true
// .find() --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile", "Mobile"]
// .every() --> item === "Mobile" --> false

// Destructuring oprator give value to variable (ex. we don't use every time arr1[1], just save it into variable let [k] = arr1)
let arr4 = [1, 2, 3, 4, 5]
// let j = arr4 [0];
// let k = arr4[2];
let [x, k] = arr4; // --> destructuring
// let [j,, k] = arr;
console.log(k);
let user_data = ["test", "test@gmail.com", "Male", "Surat"]
// name, email, gender, city
// //console.log("name", name)

let [name5, email, gender, city] = user_data; // default value
console. log( "name5 :", name5 , "" ,"email :", email, "", "gender :", gender, "", "city :", city);
// spread oprator --copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3; // - just give reference not copy value (when you change into arr4 that will be change arr3 too)
let arr9 = [...arr8];
// ... -->rest --> into function
// ...--> spred --> into Array and Object
let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];
let mix_arr = [...temp_arr, ...temp_arr2];