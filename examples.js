// ****************************************** examples ******************************************

// Example 1 :
// 1. `.find()` – First even number **Real life:** Find first available even seat number
const seats = [3, 5, 8, 10, 7];
const firstEvenSeat = seats.find(seat => seat % 2 === 0);

// Answer : 8
// Why : .find() returns the FIRST element that satisfies the condition

// Example 2 :
// 2. `.some()` – Any even number? **Real life:** Check if any VIP seat exists
const seats1 = [3, 5, 7, 9];
const hasEvenSeat = seats1.some(seat => seat % 2 === 0);

// Answer : False
// Why : .some() returns true only if AT LEAST ONE element matches the condition


// Example 3 :
//3. `.find()` – First passing mark  **Real life:** Find first student who passed
const marks = [25, 35, 40, 60];
const firstPass = marks.find(mark => mark >= 40);

// Answer : 40
// Why : .find() stops and returns the first value that meets the condition

// Example 4 :
// 4. `.some()` – Any failed student? **Real life:** Check if re-test is needed
const marks1 = [60, 70, 55, 30];
const hasFail = marks.some(mark => mark < 40);

// Answer : true
// Why : .some() checks if any value satisfies the condition


 // Example 5 :
 //5. `.find()` – First affordable product **Real life:** Shopping app price filter
const prices = [1500, 1200, 800, 2000];
const affordable = prices.find(price => price <= 1000);

// Answer : 800
// Why : .find() returns the first matching element

// Example 6 :
// 6. `.some()` – Any discount item? **Real life:** Show discount banner
const prices1 = [500, 800, 1200, 300];
const hasDiscountItem = prices.some(price => price < 500);

// Answer : False
// Why : At least one item (300) matches the condition


// Example 7 :
// 7. `.find()` – First long word **Real life:** Auto-suggestion keyword
const words = ['hi', 'hello', 'javascript', 'ok'];
const longWord = words.find(word => word.length > 5);

// Answer : "javascript"
// Why : It is the first word whose length is greater than 5


// Example 8 :
// 8. `.some()` – Any empty input? **Real life:** Form validation
const inputs = ['name', 'email', '', 'password'];
const hasEmpty = inputs.some(input => input === '');

// Answer : true
// Why : .some() returns true when at least one empty string is found


// Example 9 :
// 9. `.find()` – First high transaction **Real life:** Fraud detection
const transactions = [200, 500, 1200, 3000, 400];
const highTransaction = transactions.find(amount => amount > 1000);

// Answer : 1200
// Why : .find() returns the first value greater than 1000


// Example 10 :
// 10. `.some()` – System alert check **Real life:** Check if any value exceeds limit
const temperatures = [30, 32, 35, 42, 36];
const isOverheated = temperatures.some(temp => temp > 40);

// Answer : true
// Why : Temperature 42 exceeds the limit



// ****************************************** examples ******************************************

// ============================================================================
// ANSWER SET 2: ADVANCED ARRAY METHODS (Q1-Q20)
// ============================================================================

// Q1. Shopping List – Price Increase
// Increase each price by ₹20 using map()
console.log('\n========== Q1: Price Increase ==========');
const q1_prices = [100, 200, 300];
const q1_result = q1_prices.map(price => price + 20);
console.log('Input:', q1_prices);
console.log('Output:', q1_result); // [120, 220, 320]

// Q2. Exam Marks – Passing Students
// Filter out only passing marks (>= 40)
console.log('\n========== Q2: Passing Students ==========');
const q2_marks = [35, 60, 45, 20, 80];
const q2_result = q2_marks.filter(mark => mark >= 40);
console.log('Input:', q2_marks);
console.log('Output:', q2_result); // [60, 45, 80]

// Q3. Attendance Check
// Check if any day attendance is less than 75% using some()
console.log('\n========== Q3: Attendance Check ==========');
const q3_attendance = [80, 90, 70, 85];
const q3_result = q3_attendance.some(att => att < 75);
console.log('Input:', q3_attendance);
console.log('Output:', q3_result); // true

// Q4. Find First Discounted Item
// Find the first price less than 500 using find()
console.log('\n========== Q4: First Discounted Item ==========');
const q4_prices = [1200, 800, 450, 600];
const q4_result = q4_prices.find(price => price < 500);
console.log('Input:', q4_prices);
console.log('Output:', q4_result); // 450

// Q5. Salary Calculation
// 1. Keep salaries above 20,000
// 2. Add bonus of 2,000
// 3. Calculate total payout (Use filter, map, reduce)
console.log('\n========== Q5: Salary Calculation ==========');
const q5_salaries = [18000, 25000, 30000, 15000];
const q5_result = q5_salaries
  .filter(salary => salary > 20000)
  .map(salary => salary + 2000)
  .reduce((total, salary) => total + salary, 0);
console.log('Input:', q5_salaries);
console.log('After filter (>20000):', q5_salaries.filter(salary => salary > 20000));
console.log('After map (+2000):', q5_salaries.filter(salary => salary > 20000).map(salary => salary + 2000));
console.log('Output (total):', q5_result); // 59000

// Q6. Product Quality Check
// Check if all products have rating >= 4 using every()
console.log('\n========== Q6: Product Quality Check ==========');
const q6_ratings = [4, 5, 4, 4];
const q6_result = q6_ratings.every(rating => rating >= 4);
console.log('Input:', q6_ratings);
console.log('Output:', q6_result); // true

// Q7. Daily Expenses – Total
// Calculate total expenses using reduce()
console.log('\n========== Q7: Daily Expenses Total ==========');
const q7_expenses = [200, 150, 300, 100];
const q7_result = q7_expenses.reduce((total, expense) => total + expense, 0);
console.log('Input:', q7_expenses);
console.log('Output:', q7_result); // 750

// Q8. Scores Update
// 1. Keep scores above 50
// 2. Add 10 bonus points
console.log('\n========== Q8: Scores Update ==========');
const q8_scores = [45, 60, 80, 30, 70];
const q8_result = q8_scores
  .filter(score => score > 50)
  .map(score => score + 10);
console.log('Input:', q8_scores);
console.log('Output:', q8_result); // [70, 90, 80]

// Q9. Array Destructuring – Top Scores
// Extract the first two scores into variables
console.log('\n========== Q9: Array Destructuring ==========');
const q9_scores = [95, 90, 85, 80];
const [q9_first, q9_second] = q9_scores;
console.log('Input:', q9_scores);
console.log('First Score:', q9_first);    // 95
console.log('Second Score:', q9_second);  // 90

// Q10. Shopping Cart Merge
// Merge two carts using the spread operator
console.log('\n========== Q10: Shopping Cart Merge ==========');
const q10_cart1 = [200, 400];
const q10_cart2 = [300, 500];
const q10_result = [...q10_cart1, ...q10_cart2];
console.log('Cart 1:', q10_cart1);
console.log('Cart 2:', q10_cart2);
console.log('Output:', q10_result); // [200, 400, 300, 500]

// Q11. Expense Validation
// Check if all expenses are below 1000 using every()
console.log('\n========== Q11: Expense Validation ==========');
const q11_expenses = [200, 450, 800, 1200];
const q11_result = q11_expenses.every(expense => expense < 1000);
console.log('Input:', q11_expenses);
console.log('Output:', q11_result); // false

// Q12. Transaction Analysis
// 1. Find first transaction above 1000
// 2. Check if any transaction is negative
console.log('\n========== Q12: Transaction Analysis ==========');
const q12_transactions = [500, -200, 1200, 300];
const q12_firstAbove1000 = q12_transactions.find(trans => trans > 1000);
const q12_hasNegative = q12_transactions.some(trans => trans < 0);
console.log('Input:', q12_transactions);
console.log('First above 1000:', q12_firstAbove1000); // 1200
console.log('Has negative:', q12_hasNegative);       // true

// Q13. Student Result Summary
// 1. Keep passing marks (>= 40)
// 2. Calculate average marks
console.log('\n========== Q13: Student Result Summary ==========');
const q13_marks = [30, 45, 60, 25, 80];
const q13_passingMarks = q13_marks.filter(mark => mark >= 40);
const q13_average = q13_passingMarks.reduce((sum, mark) => sum + mark, 0) / q13_passingMarks.length;
console.log('Input:', q13_marks);
console.log('Passing marks:', q13_passingMarks); // [45, 60, 80]
console.log('Average:', q13_average.toFixed(2)); // 61.67

// Q14. Temperature Alert System
// 1. Check if any temperature exceeds 40
// 2. Check if all temperatures are above 20
console.log('\n========== Q14: Temperature Alert System ==========');
const q14_temps = [22, 30, 45, 28];
const q14_exceeds40 = q14_temps.some(temp => temp > 40);
const q14_allAbove20 = q14_temps.every(temp => temp > 20);
console.log('Input:', q14_temps);
console.log('Any exceeds 40:', q14_exceeds40);    // true
console.log('All above 20:', q14_allAbove20);     // true

// Q15. Spread + Reduce Combo
// Combine two arrays and find the total sum
console.log('\n========== Q15: Spread + Reduce Combo ==========');
const q15_a = [1, 2, 3];
const q15_b = [4, 5, 6];
const q15_combined = [...q15_a, ...q15_b];
const q15_sum = q15_combined.reduce((sum, num) => sum + num, 0);
console.log('Array a:', q15_a);
console.log('Array b:', q15_b);
console.log('Combined:', q15_combined); // [1, 2, 3, 4, 5, 6]
console.log('Sum:', q15_sum);           // 21

// Q16. Bonus Eligibility
// Check if every score is above the class average
console.log('\n========== Q16: Bonus Eligibility ==========');
const q16_scores = [60, 70, 80, 90];
const q16_average = q16_scores.reduce((sum, score) => sum + score, 0) / q16_scores.length;
const q16_allAboveAvg = q16_scores.every(score => score > q16_average);
console.log('Input:', q16_scores);
console.log('Average:', q16_average);         // 75
console.log('All above average:', q16_allAboveAvg); // false

// Q17. First Valid Input
// Find the first non-empty input
console.log('\n========== Q17: First Valid Input ==========');
const q17_inputs = ['', '', 'name', 'email'];
const q17_result = q17_inputs.find(input => input !== '');
console.log('Input:', q17_inputs);
console.log('Output:', q17_result); // 'name'

// Q18. Salary Spread
// Create a new salary list by copying existing salaries and adding a new one
console.log('\n========== Q18: Salary Spread ==========');
const q18_salaries = [20000, 30000, 40000];
const q18_newSalaries = [...q18_salaries, 35000];
console.log('Original:', q18_salaries);
console.log('New list:', q18_newSalaries); // [20000, 30000, 40000, 35000]

// Q19. Performance Check
// 1. Check if any performance score is below 50
// 2. Check if all scores are above 60
console.log('\n========== Q19: Performance Check ==========');
const q19_performance = [55, 65, 45, 80];
const q19_anyBelow50 = q19_performance.some(score => score < 50);
const q19_allAbove60 = q19_performance.every(score => score > 60);
console.log('Input:', q19_performance);
console.log('Any below 50:', q19_anyBelow50);    // true
console.log('All above 60:', q19_allAbove60);    // false

// Q20. Interview Finisher – COMPLEX COMBO
// 1. Merge arrays
// 2. Keep even numbers
// 3. Square them
// 4. Find total sum
console.log('\n========== Q20: Interview Finisher (Complex) ==========');
const q20_x = [1, 2, 3];
const q20_y = [4, 5, 6];
const q20_result = [...q20_x, ...q20_y]
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log('Array x:', q20_x);
console.log('Array y:', q20_y);
console.log('Merged:', [...q20_x, ...q20_y]); // [1, 2, 3, 4, 5, 6]
console.log('Even only:', [...q20_x, ...q20_y].filter(num => num % 2 === 0)); // [2, 4, 6]
console.log('Squared:', [...q20_x, ...q20_y].filter(num => num % 2 === 0).map(num => num * num)); // [4, 16, 36]
console.log('Final Sum:', q20_result); // 56

// ============================================================================


