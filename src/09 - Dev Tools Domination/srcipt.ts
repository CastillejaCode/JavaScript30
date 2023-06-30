const dogs = [
	{ name: 'Snickers', age: 2 },
	{ name: 'hugo', age: 8 },
];

function makeGreen() {
	const p = document.querySelector('p');
	if (!p) return;
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('hello');
// Interpolated
console.log('Hello I am a %s string!', '💩');

// Styled
// console.log(
// 	'%c I am some great text',
// 	'font-size:50px; background:red; text-shadow: 10px 10px 0 blue'
// );

// warning!
console.warn('aahhhhh');

// Error :|
console.error('damn daniel');

// Info
console.info('Did you know that did you know?');

// Testing
const p = document.querySelector('p') as HTMLParagraphElement;

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// @ts-ignore
console.assert('stuff' === 'stuf', "That's wrong");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
	console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
	console.groupEnd();
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
// timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
	.then((data) => data.json())
	.then((data) => {
		console.timeEnd('fetching data');
		console.log(data);
	});

console.table(dogs);
