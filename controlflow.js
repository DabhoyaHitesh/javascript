// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else-if else)
    // if (condition) {}
if (12 < 13) {
    console.log(true);
}
if (15 < 13) {
    console.log(true);
}
// condition is false that why if statement not run

if (!12) {
    console.log("number");
}

// if-else Statement
if (12 < 13) {
    console.log(true);
}
else {
    console.log(false);
}
if (15 < 13) {
    console.log(false);
}
// condition is false that why if statement not run
else {
    console.log(false);
}
if (!12) {
    console.log("number");
}
else {
    console.log("Not A Number");
}

// if-else if-else Statement
/*
if (condition) {
}
else if (condition) {
}
else{}
*/
/*
if (loggedin && admin) {
    console.log("welcome admin");
} 
else if (loggedin) {
    console.log("welcome user")
}
else {
    console.log("go to login page");
}
*/

// Switch case Statement
switch ('First50') {
    case 'First50':
        console.log("50% off on First Order")
        break;
    case 'BoGo':
        console.log("Buy one get one")
        breack;
    case 'BlackFriday':
        console.log("It's Black Friday Sale - get at Rs. 50")
        breack;
    default:
        console.log("Offer Not Valid")
}
switch ('Monday') {
    case 'Monday':
        console.log("Start of the work week");
        break;
    case 'Wednesday':
        console.log("Midweek hustle");
        break;
    case 'Friday':
        console.log("Weekend is coming!");
        break;
    case 'Sunday':
        console.log("It's the weekend");
        break;
    default:
        console.log("Invalid day");
}

// Early Return Pattern
function score(value) {
    if (value > 90) {
        return "Value is more than 90";
    }
    else if (value < 80) {
        return "Value is less than 80";
    }
    else if (value < 70) {
        return "Value is less than 70";
    }
    else if (value < 60) {
        return "Value is less than 60";
    }
    else {
        return "Value is less than 60"
    }
}
score(100);
// console.log(score(100))

function score1(value) {
    if (value > 90) return "Value is more than 90";
    else if (value < 80) return "Value is less than 80";
    else if (value < 70) return "Value is less than 70";
    else if (value < 60) return "Value is less than 60";
     else return "Value is less than 60";
}

function score2(value) {
    if (value < 60) return "Value is less than 60";
    else if (value < 70) return "Value is less than 70";
    else if (value < 80) return "Value is less than 80";
    else if (value < 90) return "Value is less than 90";
    else return "Value is more than 90";
}

// Example 1 :
let A = 2;
switch('A'){
    case '2':
    console.log("Two");
    case '3':
    console.log("Three");
}

// Example 2:
function getGrade(score3) {
    if (score3 >= 90 && score3 <= 100) {
        return "A+";
    } else if (score3 >= 80 && score3 <= 89) {
        return "A";
    } else if (score3 >= 70 && score3 <= 79) {
        return "B";
    } else if (score3 >= 60 && score3 <= 69) {
        return "C";
    } else if (score3 >= 33 && score3 <= 59) {
        return "D";
    } else if (score3 >= 0 && score3 <= 32) {
        return "Fail";
    } else {
        return "Invalid Marks";
    }
}

// Example 3:
function rps(user, computer) {
    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    if(user === "scissor" && computer === "rock") return "computer wins";
    if(user === "rock" && computer === "paper") return "computer wins";
    if(user === "paper" && computer === "scissor") return "computer wins";
    return "it's a tie."
}

function rps2(user, computer) {
    if(user === computer)  return "it's a tie."
    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    return "computer wins";
}
