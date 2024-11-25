const numbers = [1, 10, 2, 30, 5];

numbers.sort();

const b = 1;

console.log(numbers);

const a = NaN;

if (a === NaN) {
	console.log('a is not NaN');
}

if (a !== NaN) {
	// Noncompliant: Always true
	console.log('a is not NaN');
}
