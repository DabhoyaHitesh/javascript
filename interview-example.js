// ============================================================================
// ADVANCED ARRAY METHODS - 50 PRACTICE QUESTIONS
// ============================================================================

// Q1. Increase all prices by 10
console.log("========== Q1: Increase all prices by 10 ==========");
const q1_prices = [100, 200, 300];
const q1_result = q1_prices.map((price) => price + 10);
console.log("Input:", q1_prices);
console.log("Output:", q1_result); // [110, 210, 310]

// Q2. Filter even numbers
console.log("\n========== Q2: Filter even numbers ==========");
const q2_numbers = [1, 2, 3, 4, 5, 6];
const q2_result = q2_numbers.filter((num) => num % 2 === 0);
console.log("Input:", q2_numbers);
console.log("Output:", q2_result); // [2, 4, 6]

// Q3. Check if any number is negative
console.log("\n========== Q3: Check if any number is negative ==========");
const q3_nums = [10, -5, 20];
const q3_result = q3_nums.some((num) => num < 0);
console.log("Input:", q3_nums);
console.log("Output:", q3_result); // true

// Q4. Check if all marks are passing (>=40)
console.log(
  "\n========== Q4: Check if all marks are passing (>=40) ==========",
);
const q4_marks = [45, 60, 70];
const q4_result = q4_marks.every((mark) => mark >= 40);
console.log("Input:", q4_marks);
console.log("Output:", q4_result); // true

// Q5. Find first number greater than 50
console.log("\n========== Q5: Find first number greater than 50 ==========");
const q5_scores = [20, 40, 55, 70];
const q5_result = q5_scores.find((score) => score > 50);
console.log("Input:", q5_scores);
console.log("Output:", q5_result); // 55

// Q6. Calculate total bill amount
console.log("\n========== Q6: Calculate total bill amount ==========");
const q6_bills = [120, 300, 80];
const q6_result = q6_bills.reduce((total, bill) => total + bill, 0);
console.log("Input:", q6_bills);
console.log("Output:", q6_result); // 500

// Q7. Convert hours to minutes
console.log("\n========== Q7: Convert hours to minutes ==========");
const q7_hours = [1, 2, 1.5];
const q7_result = q7_hours.map((hour) => hour * 60);
console.log("Input:", q7_hours);
console.log("Output:", q7_result); // [60, 120, 90]

// Q8. Find first empty string
console.log("\n========== Q8: Find first empty string ==========");
const q8_inputs = ["name", "", "email"];
const q8_result = q8_inputs.find((input) => input === "");
console.log("Input:", q8_inputs);
console.log("Output:", q8_result); // ''

// Q9. Check if any value is zero
console.log("\n========== Q9: Check if any value is zero ==========");
const q9_values = [5, 0, 8];
const q9_result = q9_values.some((val) => val === 0);
console.log("Input:", q9_values);
console.log("Output:", q9_result); // true

// Q10. Double all numbers
console.log("\n========== Q10: Double all numbers ==========");
const q10_nums = [2, 4, 6];
const q10_result = q10_nums.map((num) => num * 2);
console.log("Input:", q10_nums);
console.log("Output:", q10_result); // [4, 8, 12]

// Q11. Extract first two values using destructuring
console.log(
  "\n========== Q11: Extract first two values using destructuring ==========",
);
const q11_data = [10, 20, 30];
const [q11_first, q11_second] = q11_data;
console.log("Input:", q11_data);
console.log("First:", q11_first, "Second:", q11_second); // 10, 20

// Q12. Merge two arrays using spread
console.log("\n========== Q12: Merge two arrays using spread ==========");
const q12_a = [1, 2];
const q12_b = [3, 4];
const q12_result = [...q12_a, ...q12_b];
console.log("Array a:", q12_a);
console.log("Array b:", q12_b);
console.log("Output:", q12_result); // [1, 2, 3, 4]

// Q13. Check if all temperatures are below 50
console.log(
  "\n========== Q13: Check if all temperatures are below 50 ==========",
);
const q13_temps = [30, 40, 45];
const q13_result = q13_temps.every((temp) => temp < 50);
console.log("Input:", q13_temps);
console.log("Output:", q13_result); // true

// Q14. Find first even number
console.log("\n========== Q14: Find first even number ==========");
const q14_nums = [1, 3, 4, 6];
const q14_result = q14_nums.find((num) => num % 2 === 0);
console.log("Input:", q14_nums);
console.log("Output:", q14_result); // 4

// Q15. Calculate total steps walked
console.log("\n========== Q15: Calculate total steps walked ==========");
const q15_steps = [2000, 3000, 1500];
const q15_result = q15_steps.reduce((total, step) => total + step, 0);
console.log("Input:", q15_steps);
console.log("Output:", q15_result); // 6500

// Q16. Filter salaries above 25,000
console.log("\n========== Q16: Filter salaries above 25,000 ==========");
const q16_salaries = [18000, 26000, 30000];
const q16_result = q16_salaries.filter((salary) => salary > 25000);
console.log("Input:", q16_salaries);
console.log("Output:", q16_result); // [26000, 30000]

// Q17. Add bonus of 500 to filtered salaries (>20000)
console.log(
  "\n========== Q17: Add bonus of 500 to filtered salaries (>20000) ==========",
);
const q17_salaries = [15000, 22000, 28000];
const q17_result = q17_salaries
  .filter((salary) => salary > 20000)
  .map((salary) => salary + 500);
console.log("Input:", q17_salaries);
console.log("Output:", q17_result); // [22500, 28500]

// Q18. Total expense after filtering (>100)
console.log(
  "\n========== Q18: Total expense after filtering (>100) ==========",
);
const q18_expenses = [50, 200, 150, 80];
const q18_result = q18_expenses
  .filter((exp) => exp > 100)
  .reduce((total, exp) => total + exp, 0);
console.log("Input:", q18_expenses);
console.log("Output:", q18_result); // 350

// Q19. Check if any score is below class average
console.log(
  "\n========== Q19: Check if any score is below class average ==========",
);
const q19_scores = [60, 70, 80];
const q19_avg = q19_scores.reduce((a, b) => a + b, 0) / q19_scores.length;
const q19_result = q19_scores.some((score) => score < q19_avg);
console.log("Input:", q19_scores);
console.log("Average:", q19_avg); // 70
console.log("Output:", q19_result); // true

// Q20. Find first number divisible by 7
console.log("\n========== Q20: Find first number divisible by 7 ==========");
const q20_nums = [10, 14, 21];
const q20_result = q20_nums.find((num) => num % 7 === 0);
console.log("Input:", q20_nums);
console.log("Output:", q20_result); // 14

// Q21. Convert prices to discounted prices (10%)
console.log(
  "\n========== Q21: Convert prices to discounted prices (10%) ==========",
);
const q21_prices = [500, 1000, 1500];
const q21_result = q21_prices.map((price) => price * 0.9);
console.log("Input:", q21_prices);
console.log("Output:", q21_result); // [450, 900, 1350]

// Q22. Total calories burned (>30 min only)
console.log(
  "\n========== Q22: Total calories burned (>30 min only) ==========",
);
const q22_minutes = [20, 45, 60];
const q22_result = q22_minutes
  .filter((min) => min > 30)
  .reduce((total, min) => total + min, 0);
console.log("Input:", q22_minutes);
console.log("Output:", q22_result); // 105

// Q23. Check if all inputs are filled
console.log("\n========== Q23: Check if all inputs are filled ==========");
const q23_inputs = ["name", "email", "password"];
const q23_result = q23_inputs.every((input) => input !== "");
console.log("Input:", q23_inputs);
console.log("Output:", q23_result); // true

// Q24. Merge 3 arrays using spread
console.log("\n========== Q24: Merge 3 arrays using spread ==========");
const q24_a = [1];
const q24_b = [2];
const q24_c = [3];
const q24_result = [...q24_a, ...q24_b, ...q24_c];
console.log("a:", q24_a, "b:", q24_b, "c:", q24_c);
console.log("Output:", q24_result); // [1, 2, 3]

// Q25. Find first failing mark
console.log("\n========== Q25: Find first failing mark ==========");
const q25_marks = [55, 48, 35, 70];
const q25_result = q25_marks.find((mark) => mark < 40);
console.log("Input:", q25_marks);
console.log("Output:", q25_result); // 35

// Q26. Calculate average marks of passed students
console.log(
  "\n========== Q26: Calculate average marks of passed students ==========",
);
const q26_marks = [30, 45, 60, 80];
const q26_passed = q26_marks.filter((mark) => mark >= 40);
const q26_avg =
  q26_passed.reduce((sum, mark) => sum + mark, 0) / q26_passed.length;
console.log("Input:", q26_marks);
console.log("Passed:", q26_passed);
console.log("Average:", q26_avg.toFixed(2)); // 61.67

// Q27. Square only odd numbers
console.log("\n========== Q27: Square only odd numbers ==========");
const q27_nums = [1, 2, 3, 4, 5];
const q27_result = q27_nums
  .filter((num) => num % 2 !== 0)
  .map((num) => num * num);
console.log("Input:", q27_nums);
console.log("Output:", q27_result); // [1, 9, 25]

// Q28. Check if any value exceeds 1000
console.log("\n========== Q28: Check if any value exceeds 1000 ==========");
const q28_values = [200, 500, 1500];
const q28_result = q28_values.some((val) => val > 1000);
console.log("Input:", q28_values);
console.log("Output:", q28_result); // true

// Q29. Extract first and rest values using destructuring
console.log(
  "\n========== Q29: Extract first and rest values using destructuring ==========",
);
const q29_nums = [10, 20, 30, 40];
const [q29_first, ...q29_rest] = q29_nums;
console.log("Input:", q29_nums);
console.log("First:", q29_first);
console.log("Rest:", q29_rest); // [20, 30, 40]

// Q30. Total reward points (>=8 hours only)
console.log(
  "\n========== Q30: Total reward points (>=8 hours only) ==========",
);
const q30_hours = [6, 8, 9, 7];
const q30_result = q30_hours
  .filter((hour) => hour >= 8)
  .reduce((total, hour) => total + hour, 0);
console.log("Input:", q30_hours);
console.log("Output:", q30_result); // 17

// Q31. Find first word longer than 4 characters
console.log(
  "\n========== Q31: Find first word longer than 4 characters ==========",
);
const q31_words = ["hi", "hello", "world"];
const q31_result = q31_words.find((word) => word.length > 4);
console.log("Input:", q31_words);
console.log("Output:", q31_result); // 'hello'

// Q32. Check if all numbers are even
console.log("\n========== Q32: Check if all numbers are even ==========");
const q32_nums = [2, 4, 6, 8];
const q32_result = q32_nums.every((num) => num % 2 === 0);
console.log("Input:", q32_nums);
console.log("Output:", q32_result); // true

// Q33. Combine arrays and filter positives
console.log("\n========== Q33: Combine arrays and filter positives ==========");
const q33_a = [1, -2];
const q33_b = [3, -4];
const q33_result = [...q33_a, ...q33_b].filter((num) => num > 0);
console.log("Array a:", q33_a);
console.log("Array b:", q33_b);
console.log("Output:", q33_result); // [1, 3]

// Q34. Total bill after tax (5%)
console.log("\n========== Q34: Total bill after tax (5%) ==========");
const q34_prices = [200, 400];
const q34_total = q34_prices.reduce((sum, price) => sum + price, 0);
const q34_result = q34_total * 1.05;
console.log("Input:", q34_prices);
console.log("Before tax:", q34_total);
console.log("After 5% tax:", q34_result); // 630

// Q35. Find first temperature above average
console.log(
  "\n========== Q35: Find first temperature above average ==========",
);
const q35_temps = [20, 30, 40];
const q35_avg = q35_temps.reduce((a, b) => a + b, 0) / q35_temps.length;
const q35_result = q35_temps.find((temp) => temp > q35_avg);
console.log("Input:", q35_temps);
console.log("Average:", q35_avg); // 30
console.log("Output:", q35_result); // 40

// Q36. Combine arrays, keep even numbers, find sum
console.log(
  "\n========== Q36: Combine arrays, keep even numbers, find sum ==========",
);
const q36_a = [1, 2, 3];
const q36_b = [4, 5, 6];
const q36_result = [...q36_a, ...q36_b]
  .filter((num) => num % 2 === 0)
  .reduce((sum, num) => sum + num, 0);
console.log("Array a:", q36_a);
console.log("Array b:", q36_b);
console.log("Output:", q36_result); // 12 (2+4+6)

// Q37. Check if every score is above average
console.log(
  "\n========== Q37: Check if every score is above average ==========",
);
const q37_scores = [60, 70, 80];
const q37_avg = q37_scores.reduce((a, b) => a + b, 0) / q37_scores.length;
const q37_result = q37_scores.every((score) => score > q37_avg);
console.log("Input:", q37_scores);
console.log("Average:", q37_avg);
console.log("Output:", q37_result); // false

// Q38. Find first transaction above total average
console.log(
  "\n========== Q38: Find first transaction above total average ==========",
);
const q38_tx = [100, 500, 900];
const q38_avg = q38_tx.reduce((a, b) => a + b, 0) / q38_tx.length;
const q38_result = q38_tx.find((t) => t > q38_avg);
console.log("Input:", q38_tx);
console.log("Average:", q38_avg);
console.log("Output:", q38_result); // 500

// Q39. Total of squared even numbers
console.log("\n========== Q39: Total of squared even numbers ==========");
const q39_nums = [1, 2, 3, 4, 5];
const q39_result = q39_nums
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log("Input:", q39_nums);
console.log("Output:", q39_result); // 20 (4 + 16)

// Q40. Merge arrays, remove negatives, total sum
console.log(
  "\n========== Q40: Merge arrays, remove negatives, total sum ==========",
);
const q40_a = [-1, 2];
const q40_b = [3, -4];
const q40_result = [...q40_a, ...q40_b]
  .filter((num) => num > 0)
  .reduce((sum, num) => sum + num, 0);
console.log("Array a:", q40_a);
console.log("Array b:", q40_b);
console.log("Output:", q40_result); // 5 (2+3)

// Q41. Check if any value is prime
console.log("\n========== Q41: Check if any value is prime ==========");
const q41_nums = [4, 6, 9, 11];
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) if (n % i === 0) return false;
  return true;
};
const q41_result = q41_nums.some((num) => isPrime(num));
console.log("Input:", q41_nums);
console.log("Output:", q41_result); // true (11 is prime)

// Q42. Calculate weighted total (double values >50)
console.log(
  "\n========== Q42: Calculate weighted total (double values >50) ==========",
);
const q42_values = [30, 60, 80];
const q42_result = q42_values
  .map((val) => (val > 50 ? val * 2 : val))
  .reduce((sum, val) => sum + val, 0);
console.log("Input:", q42_values);
console.log("Output:", q42_result); // 310 (30 + 120 + 160)

// Q43. Find first value greater than cumulative sum
console.log(
  "\n========== Q43: Find first value greater than cumulative sum ==========",
);
const q43_nums = [10, 20, 50];
let cumSum = 0;
const q43_result = q43_nums.find((num) => {
  if (num > cumSum) return true;
  cumSum += num;
  return false;
});
console.log("Input:", q43_nums);
console.log("Output:", q43_result); // 50

// Q44. Total salary payout after bonus and tax
console.log(
  "\n========== Q44: Total salary payout after bonus and tax ==========",
);
const q44_salaries = [20000, 30000];
const q44_result =
  q44_salaries
    .map((sal) => sal + 5000) // bonus
    .reduce((sum, sal) => sum + sal, 0) * 0.85; // 15% tax
console.log("Input:", q44_salaries);
console.log("Output:", q44_result); // 42250

// Q45. Check if all prices are within budget (<=1000)
console.log(
  "\n========== Q45: Check if all prices are within budget (<=1000) ==========",
);
const q45_prices = [400, 800, 1200];
const q45_result = q45_prices.every((price) => price <= 1000);
console.log("Input:", q45_prices);
console.log("Output:", q45_result); // false

// Q46. Combine arrays and find maximum value
console.log(
  "\n========== Q46: Combine arrays and find maximum value ==========",
);
const q46_a = [10, 40];
const q46_b = [30, 20];
const q46_combined = [...q46_a, ...q46_b];
const q46_result = Math.max(...q46_combined);
console.log("Array a:", q46_a);
console.log("Array b:", q46_b);
console.log("Output:", q46_result); // 40

// Q47. Find first value failing custom rule (>2×avg)
console.log(
  "\n========== Q47: Find first value failing custom rule (>2×avg) ==========",
);
const q47_nums = [10, 20, 60];
const q47_avg = q47_nums.reduce((a, b) => a + b, 0) / q47_nums.length;
const q47_result = q47_nums.find((num) => num <= q47_avg * 2);
console.log("Input:", q47_nums);
console.log("Average:", q47_avg);
console.log("Output:", q47_result); // 10 or 20

// Q48. Total distance after bonus km (>5 only)
console.log(
  "\n========== Q48: Total distance after bonus km (>5 only) ==========",
);
const q48_km = [3, 6, 10];
const q48_result = q48_km
  .filter((k) => k > 5)
  .map((k) => k + 2)
  .reduce((sum, k) => sum + k, 0);
console.log("Input:", q48_km);
console.log("Output:", q48_result); // 20 (8+12)

// Q49. Check if every element is unique
console.log("\n========== Q49: Check if every element is unique ==========");
const q49_nums = [1, 2, 3, 2];
const q49_result = q49_nums.length === new Set(q49_nums).size;
console.log("Input:", q49_nums);
console.log("Output:", q49_result); // false

// Q50. FINAL BOSS – Merge, filter, square, sum
console.log(
  "\n========== Q50: FINAL BOSS – Merge, filter, square, sum ==========",
);
const q50_a = [1, 2, 3];
const q50_b = [4, 5, 6];
const q50_avg =
  q50_a.concat(q50_b).reduce((a, b) => a + b, 0) /
  (q50_a.length + q50_b.length);
const q50_result = [...q50_a, ...q50_b]
  .filter((num) => num > q50_avg)
  .map((num) => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log("Array a:", q50_a);
console.log("Array b:", q50_b);
console.log("Combined average:", q50_avg);
console.log("Output:", q50_result); // 86 (16+25+36)

// ============================================================================



// ============================================================================
// ie1.js — Answers, code, errors, how & why for each question (1–101)
// Run with: node ie1.js
// ============================================================================

// -------------------------------
// Variables & Data Types (1–15)
// -------------------------------
let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;

console.log('\n=== Q1: == vs ===');
console.log('a == "a" ->', a == "a"); // true (value)
console.log('a === "a" ->', a === "a"); // true (value + type)

console.log('\n=== Q2: b == c vs b === c');
console.log('b == c ->', b == c);   // true: '10' coerced to 10
console.log('b === c ->', b === c); // false: different types

console.log('\n=== Q3: convert b so b === c is true');
b = Number(b); // now b is number 10
console.log('b (after Number) === c ->', b === c); // true

console.log('\n=== Q4: check undefined without typeof');
console.log('d === undefined ->', d === undefined);

console.log('\n=== Q5: safely check d and e');
// d == null is true for undefined/null; e == null true for null
console.log('d == null ->', d == null, '// checks undefined or null');
console.log('e == null ->', e == null);

console.log('\n=== Q6: null == undefined vs null !== undefined');
console.log('null == undefined ->', null == undefined);   // true
console.log('null === undefined ->', null === undefined); // false

console.log('\n=== Q7: type coercion c + b and fix it');
// Reset b to string for demo
b = '10';
console.log('c + b ->', c + b, '// "1010" string concatenation due to b being string');
console.log('fixed: c + Number(b) ->', c + Number(b));

console.log('\n=== Q8: c / "a" is NaN?');
const divResult = c / 'a';
console.log('c / "a" ->', divResult);
console.log('Number.isNaN(divResult) ->', Number.isNaN(divResult));

console.log('\n=== Q9: convert b to number (two ways)');
b = '10';
console.log('Number(b) ->', Number(b));
console.log('+b ->', +b);

console.log('\n=== Q10: convert c to string (two ways)');
console.log('String(c) ->', String(c));
console.log('c.toString() ->', c.toString());

console.log('\n=== Q11: turn any value into boolean');
console.log('Boolean(0) ->', Boolean(0));
console.log('!!"hello" ->', !!"hello");

console.log('\n=== Q12: const assignment error');
const CONST_NUM = 5;
console.log('CONST_NUM initial ->', CONST_NUM);
try {
	// Uncommenting next line would throw TypeError in runtime — demonstrating here with try/catch
	// CONST_NUM = 10; // TypeError: Assignment to constant variable.
	throw new TypeError('Assignment to constant variable.');
} catch (err) {
	console.log('Reassignment error (expected):', err.message);
}

console.log('\n=== Q13: primitive copy independence');
let p1 = 100;
let p2 = p1;
p2 = 200;
console.log('p1 ->', p1, 'p2 ->', p2, '// p1 unchanged — primitives copy by value');

console.log('\n=== Q14: comparison that looks true but false');
console.log('0 == false ->', 0 == false); // true
console.log('0 === false ->', 0 === false); // false — looks like true but strict fails

console.log('\n=== Q15: fix buggy comparison by using strict equality');
console.log('\"10\" == 10 ->', '10' == 10);
console.log('\"10\" === 10 ->', '10' === 10);

// -------------------------------
// Operators (16–30)
// -------------------------------
console.log('\n=== Q16: even without % (bitwise)');
const n16 = 8;
console.log(n16, 'is even ->', (n16 & 1) === 0);

console.log('\n=== Q17: max without if or Math.max');
const x17 = 10, y17 = 20;
console.log('max ->', x17 > y17 ? x17 : y17);

console.log('\n=== Q18: simple calculator (a op b)');
function calc(a18, b18, op) {
	switch (op) {
		case '+': return a18 + b18;
		case '-': return a18 - b18;
		case '*': return a18 * b18;
		case '/': return a18 / b18;
		default: return NaN;
	}
}
console.log('3 * 4 =', calc(3, 4, '*'));

console.log('\n=== Q19: defaults with || and ??');
const userInput19 = 0;
console.log('using || ->', userInput19 || 10); // 10 because 0 is falsy
console.log('using ?? ->', userInput19 ?? 10); // 0 because ?? only checks null/undefined

console.log('\n=== Q20 & Q21: ternary and chained ternary');
const age = 20;
console.log('canVote ->', age >= 18 ? 'yes' : 'no');
const score21 = 85;
console.log('grade ->', score21 >= 90 ? 'A' : score21 >= 75 ? 'B' : 'C');

console.log('\n=== Q22: use && to execute');
const cond22 = true;
cond22 && console.log('executed because cond22 is true');

console.log('\n=== Q23: short-circuit behavior');
console.log('true || expr (skips expr) ->', true || (console.log('skipped'), 5));
console.log('false && expr (skips expr) ->', false && (console.log('skipped'), 5));

console.log('\n=== Q24: compare different types');
console.log('"5" == 5 ->', '5' == 5);
console.log('"5" === 5 ->', '5' === 5);

console.log('\n=== Q25 & Q26: nullish coalescing vs ||');
const val25 = null;
console.log('val25 ?? 100 ->', val25 ?? 100);
console.log('val25 || 100 ->', val25 || 100);
const val26 = 0;
console.log('0 || 100 ->', val26 || 100); // 100
console.log('0 ?? 100 ->', val26 ?? 100); // 0

console.log('\n=== Q27: spread to merge arrays');
const arr27a = [1,2], arr27b = [3,4];
console.log('merged ->', [...arr27a, ...arr27b]);

console.log('\n=== Q28: rest operator example');
function sumAll(...nums) { return nums.reduce((s,n)=>s+n,0); }
console.log('sumAll(1,2,3) ->', sumAll(1,2,3));

console.log('\n=== Q29: copy array safely');
const orig29 = [1,2,3];
const copy29 = [...orig29];
copy29.push(4);
console.log('orig ->', orig29, 'copy ->', copy29);

console.log('\n=== Q30: operator precedence example');
console.log('2 + 3 * 4 ->', 2 + 3 * 4, '// multiplication before addition');
console.log('(2 + 3) * 4 ->', (2+3) * 4);

// -------------------------------
// Control Flow (31–45)
// -------------------------------
console.log('\n=== Q31: grading with if-else');
function grade(score){
	if(score>=90) return 'A';
	if(score>=75) return 'B';
	if(score>=60) return 'C';
	return 'F';
}
console.log('grade(82) ->', grade(82));

console.log('\n=== Q32: grading with switch (by range using true)');
function gradeSwitch(score){
	switch(true){
		case (score>=90): return 'A';
		case (score>=75): return 'B';
		case (score>=60): return 'C';
		default: return 'F';
	}
}
console.log('gradeSwitch(82) ->', gradeSwitch(82));

console.log('\n=== Q33: switch fall-through');
switch(2){
	case 1: console.log('one');
	case 2: console.log('two');
	case 3: console.log('three');
	break;
}

console.log('\n=== Q34 & Q35: login nested vs refactor');
function login(user){
	// nested
	if(user){
		if(user.active){
			return 'ok';
		}
	}
	return 'fail';
}
function loginClean(user){
	if(!user || !user.active) return 'fail';
	return 'ok';
}
console.log('login({active:true}) ->', login({active:true}));
console.log('loginClean({active:true}) ->', loginClean({active:true}));

console.log('\n=== Q36: execute only when two conditions true');
const c1=true, c2=true;
if(c1 && c2) console.log('both true');

console.log('\n=== Q37: multiple conditions');
const age37 = 25; console.log(age37>18 && age37<60 ? 'working age' : 'other');

console.log('\n=== Q38: menu switch');
function menu(choice){
	switch(choice){
		case 'a': return 'option A';
		case 'b': return 'option B';
		default: return 'unknown';
	}
}
console.log('menu("b") ->', menu('b'));

console.log('\n=== Q39: missing break continues execution');
switch('x'){
	case 'x': console.log('x matched');
	case 'y': console.log('y matched too (fall-through)'); break;
}

console.log('\n=== Q40: switch to if-else');
function menuIf(choice){
	if(choice==='a') return 'A';
	if(choice==='b') return 'B';
	return 'unknown';
}
console.log('menuIf("a") ->', menuIf('a'));

console.log('\n=== Q41: validate range');
function inRange(n, min, max){ return n>=min && n<=max; }
console.log('inRange(5,1,10) ->', inRange(5,1,10));

console.log('\n=== Q42: early return');
function findPositive(arr){ if(!arr || arr.length===0) return null; for(const v of arr) if(v>0) return v; return null; }
console.log('findPositive([-1,2]) ->', findPositive([-1,2]));

console.log('\n=== Q43: traffic light');
function traffic(color){ switch(color){ case 'red': return 'stop'; case 'yellow': return 'slow'; case 'green': return 'go'; default: return 'invalid'; }}
console.log('traffic("green") ->', traffic('green'));

console.log('\n=== Q44: real-life decision to code (example)');
function shouldWearCoat(temp){ return temp < 15 ? true : false; }
console.log('shouldWearCoat(10) ->', shouldWearCoat(10));

console.log('\n=== Q45: handle edges first');
function safeDivide(a,b){ if(b===0) return null; return a/b; }
console.log('safeDivide(4,0) ->', safeDivide(4,0));

// -------------------------------
// Loops (46–60)
// -------------------------------
console.log('\n=== Q46: 1 to 100');
for(let i=1;i<=100;i++); // suppressed printing to avoid huge output
console.log('printed 1..100 loop executed (suppressed output)');

console.log('\n=== Q47: print even numbers using loop example (2..10)');
for(let i=2;i<=10;i+=2) console.log(i);

console.log('\n=== Q48: stop loop when condition met');
for(let i=1;i<=10;i++){ if(i>5){ console.log('stopped at', i); break; } }

console.log('\n=== Q49: skip divisible by 3');
const arr49=[]; for(let i=1;i<=10;i++){ if(i%3===0) continue; arr49.push(i);} console.log(arr49);

console.log('\n=== Q50: sum using loop');
let sum50=0; for(let i=1;i<=10;i++) sum50+=i; console.log(sum50);

console.log('\n=== Q51: reverse a number (1234 -> 4321)');
function reverseNumber(n){ let rev=0; while(n){ rev = rev*10 + n%10; n = Math.floor(n/10); } return rev; }
console.log('reverseNumber(1234)->', reverseNumber(1234));

console.log('\n=== Q52: count digits');
function countDigits(n){ return String(Math.abs(n)).length; }
console.log('countDigits(12345)->', countDigits(12345));

console.log('\n=== Q53: factorial');
function factorial(n){ let f=1; for(let i=2;i<=n;i++) f*=i; return f; }
console.log('factorial(5)->', factorial(5));

console.log('\n=== Q54: Fibonacci up to 10 terms');
function fib(n){ const out=[0,1]; for(let i=2;i<n;i++) out.push(out[i-1]+out[i-2]); return out.slice(0,n);} console.log(fib(10));

console.log('\n=== Q55: break out nested loops using label');
outer: for(let i=0;i<3;i++){ for(let j=0;j<3;j++){ if(i===1 && j===1){ console.log('breaking at',i,j); break outer; } }}

console.log('\n=== Q56: continue example');
for(let i=1;i<=5;i++){ if(i===3) continue; console.log('i=',i); }

console.log('\n=== Q57: multiplication table 3');
for(let i=1;i<=10;i++) console.log(`3 x ${i} =`, 3*i);

console.log('\n=== Q58: fix infinite loop example (commented)');
// while(true) {} // would be infinite — fix by using a condition variable

console.log('\n=== Q59: for vs while');
let s1=''; for(let i=0;i<3;i++) s1 += i; console.log('for produced', s1);
let s2=''; let w=0; while(w<3){ s2+=w; w++; } console.log('while produced', s2);

console.log('\n=== Q60: replace loop with array methods');
const nums60=[1,2,3,4,5]; console.log('sum with reduce->', nums60.reduce((a,b)=>a+b,0));

// -------------------------------
// Functions (61–80)
// -------------------------------
console.log('\n=== Q61: sum function');
function sum61(a61,b61){ return a61+b61; }
console.log('sum61(2,3)->', sum61(2,3));

console.log('\n=== Q62: arrow function');
const sum62 = (a,b)=>a+b; console.log(sum62(3,4));

console.log('\n=== Q63: default params');
function greet(name='Guest'){ return `Hi ${name}`; } console.log(greet());

console.log('\n=== Q64: return function');
function makeAdder(x){ return y=>x+y; } const add5=makeAdder(5); console.log(add5(3));

console.log('\n=== Q65 & Q66: pass function and callback');
function higher(fn){ return fn(); } console.log(higher(()=> 'called'));

console.log('\n=== Q67: pure function example');
function pureAdd(a,b){ return a+b; } console.log(pureAdd(1,2));

console.log('\n=== Q68: side effect example');
let global = 0; function side(){ global++; } side(); console.log('global->',global);

console.log('\n=== Q69: recursive factorial');
function factRec(n){ if(n<=1) return 1; return n * factRec(n-1); } console.log(factRec(5));

console.log('\n=== Q70: iterative factorial (converted)');
console.log(factorial(5));

console.log('\n=== Q71: function accepts unlimited args');
function sumVar(){ return [...arguments].reduce((s,v)=>s+v,0); } console.log('sumVar(1,2,3)->', sumVar(1,2,3));

console.log('\n=== Q72: higher-order function');
function mapWith(fn, arr){ return arr.map(fn); } console.log(mapWith(x=>x*2, [1,2]));

console.log('\n=== Q73: closure preserve state');
function counter(){ let n=0; return ()=>++n; } const c73=counter(); console.log(c73(),c73());

console.log('\n=== Q74: function counter (simple)');
function makeCounter(){ let i=0; return ()=>++i; } const ct=makeCounter(); console.log(ct(),ct());

console.log('\n=== Q75: currying');
const curryAdd = a=>b=>a+b; console.log(curryAdd(2)(3));

console.log('\n=== Q76: memoized fibonacci (simple)');
function memoFib(){ const cache={0:0,1:1}; return function fib(n){ if(cache[n]!==undefined) return cache[n]; cache[n]=fib(n-1)+fib(n-2); return cache[n]; }; }
const mf = memoFib(); console.log(mf(10));

console.log('\n=== Q77: handle invalid input');
function safeDivideFunc(a,b){ if(typeof a!=='number' || typeof b!=='number') return null; if(b===0) return null; return a/b; }
console.log('safeDivideFunc(6,3)->', safeDivideFunc(6,3));

console.log('\n=== Q78: arrow vs normal (this)');
const obj = {v:10, f: function(){ return this.v; }, g: ()=> typeof this}; console.log('normal->', obj.f(), 'arrow->', obj.g());

console.log('\n=== Q79: run once');
function once(fn){ let done=false; return (...args)=>{ if(done) return; done=true; return fn(...args);} }
const runOnce = once(()=>console.log('running')); runOnce(); runOnce();

console.log('\n=== Q80: refactor repeated logic');
function clamp(v,min,max){ return Math.min(max, Math.max(min, v)); } console.log(clamp(15,0,10));

// -------------------------------
// Arrays (81–101)
// -------------------------------
console.log('\n=== Q81: sum array');
const q81 = [1,2,3,4]; console.log(q81.reduce((s,n)=>s+n,0));

console.log('\n=== Q82: max element');
console.log(Math.max(...q81));

console.log('\n=== Q83: remove duplicates');
const dup=[1,2,1,3]; console.log([...new Set(dup)]);

console.log('\n=== Q84: second largest');
const arr84=[10,5,8,20]; const sorted84=[...arr84].sort((a,b)=>b-a); console.log(sorted84[1]);

console.log('\n=== Q85: filter positive');
console.log([-1,2,-3,4].filter(n=>n>0));

console.log('\n=== Q86: map to squares');
console.log([1,2,3].map(n=>n*n));

console.log('\n=== Q87: use reduce to count');
console.log([1,2,3,4].reduce(c=>c+1,0));

console.log('\n=== Q88: chain filter->map->reduce');
console.log([1,2,3,4].filter(n=>n%2===0).map(n=>n*2).reduce((s,n)=>s+n,0));

console.log('\n=== Q89: find first matching');
console.log([1,4,6].find(n=>n>3));

console.log('\n=== Q90: any satisfies');
console.log([1,2,3].some(n=>n>2));

console.log('\n=== Q91: all satisfy');
console.log([2,4,6].every(n=>n%2===0));

console.log('\n=== Q92: destructuring first & rest');
const [first92,...rest92] = [10,20,30]; console.log(first92, rest92);

console.log('\n=== Q93: merge arrays');
console.log([... [1,2], ...[3,4]]);

console.log('\n=== Q94: deep clone (simple arrays of primitives)');
const orig94=[1,2,3]; const clone94 = JSON.parse(JSON.stringify(orig94)); console.log(clone94);

console.log('\n=== Q95: sort without .sort() (simple: insertion)');
function insertionSort(arr){ const a=[...arr]; for(let i=1;i<a.length;i++){ let key=a[i], j=i-1; while(j>=0 && a[j]>key){ a[j+1]=a[j]; j--; } a[j+1]=key;} return a; }
console.log(insertionSort([3,1,2]));

console.log('\n=== Q96: rotate array');
function rotate(arr,k){ const n=arr.length; k%=n; return arr.slice(k).concat(arr.slice(0,k)); }
console.log(rotate([1,2,3,4],2));

console.log('\n=== Q97: flatten nested array (one level)');
console.log([1,[2,3],4].flat());

console.log('\n=== Q98: custom map');
function customMap(arr,fn){ const out=[]; for(let i=0;i<arr.length;i++) out.push(fn(arr[i],i,arr)); return out; }
console.log(customMap([1,2], x=>x*3));

console.log('\n=== Q99: custom filter');
function customFilter(arr,fn){ const out=[]; for(let i=0;i<arr.length;i++) if(fn(arr[i],i,arr)) out.push(arr[i]); return out; }
console.log(customFilter([1,2,3], x=>x%2===1));

console.log('\n=== Q100: custom reduce');
function customReduce(arr, fn, init){ let acc = init; for(let i=0;i<arr.length;i++){ acc = fn(acc, arr[i], i, arr); } return acc; }
console.log(customReduce([1,2,3], (s,n)=>s+n, 0));

console.log('\n=== Q101: FINAL BOSS combine methods');
const boss = [1,2,3,4,5];
const bossResult = boss
	.filter(n=>n%2===0)
	.map(n=>n*n)
	.reduce((s,n)=>s+n,0);
console.log('bossResult ->', bossResult);

// End of file





