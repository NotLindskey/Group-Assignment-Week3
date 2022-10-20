// 1. Write a function that logs "Hello World"
// when called.
function salute() {
	return `hello world!`;
}

console.log(salute());

//2. Write a function that takes in a number and logs
// "Hello World" that number of times (e.g. 2 would
// log "Hello World" two times). NOTE: When console
// logging the same thing twice, you'll see a little
// number to the left of the log rather than the text
// twice.
function saluteNumTimes(num) {
	for (let i = 0; i < num; i++) {
		console.log("hello World!");
	}
}

saluteNumTimes(6);

//3. Write a function that takes in a number and
// returns true if it's greater than zero, false if
// less than 0.

function trueOrFalse(num) {
	if (num > 0) {
		return `True`;
	} else if (num < 0) {
		return `False`;
	} else {
		return `Zero`;
	}
}

console.log(trueOrFalse(8));
console.log(trueOrFalse(-7));
console.log(trueOrFalse(0));

// 4. Write a function that takes in a number
// (0 - 6) as an argument and returns the day of the
// week (dayOfWeekToString(0) would return "Sunday",
// dayOfWeekToString(2) would return "Tuesday").
// NOTE: Use if / else if or switch for each day of the
// week within the function.

const day = "Saturday";

function theDayInWeek() {
	switch (day) {
		case "Sunday":
			return `"this is Sunday"`;
			break;
		case "Monday":
			console.log("this is Monday");
			break;
		case "Tuesday":
			console.log("this is Tuesday");
			break;
		case "Wednesday":
			console.log("this is Wednesday");
			break;
		case "Friday":
			console.log("this is Tuesday");
			break;
		case "Saturday":
			console.log("this is Saturday");
			break;
	}
}

console.log(theDayInWeek("Sunday"));
