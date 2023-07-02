let shift = false;

document.addEventListener('keydown', (e: KeyboardEvent) => {
	if (e.key === 'Shift') {
		shift = true;
		console.log(shift);
	}
});
document.addEventListener('keyup', (e: KeyboardEvent) => {
	if (e.key === 'Shift') {
		shift = false;
		console.log(shift);
	}
});

const checkboxes = [
	...document.querySelectorAll('.item > input'),
] as HTMLInputElement[];

function handleCheck() {
	if (shift) {
		const firstCheckedIndex = checkboxes.findIndex(
			(checkbox) => checkbox.checked
		);
		const lastCheckedIndex = checkboxes.findLastIndex(
			(checkbox) => checkbox.checked
		);
		const inBetween = checkboxes.slice(firstCheckedIndex + 1, lastCheckedIndex);
		inBetween.forEach((checkbox) => (checkbox.checked = true));
	}
}

checkboxes.forEach((checkbox) =>
	checkbox.addEventListener('input', handleCheck)
);
