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

// const users = [
// 	{ name: 'Alice', age: 25 },
// 	{ name: 'Bob', age: 30 },
// 	{ name: 'Charlie', age: 20 },
// ];

// function sortUsersByAge(users: any[]) {
//     return users.sort();
// }
// console.log(sortUsersByAge(users));

function sortUsersByAge(users: { age: number }[]) {
	return users.sort((a: { age: number }, b: { age: number }) => a.age - b.age);
}

const users = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 30 },
	{ name: 'Charlie', age: 20 },
];

console.log(sortUsersByAge(users));

// Correct output: [
//   { name: "Charlie", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ]
