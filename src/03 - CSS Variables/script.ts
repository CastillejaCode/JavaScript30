const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e: Event) => {
	const element = e.currentTarget as HTMLInputElement;
	const suffix = element.name !== 'base' ? 'px' : '';
	document.documentElement.style.setProperty(
		`--${element.name}`,
		element.value + suffix
	);
};

inputs.forEach((input) => input.addEventListener('input', handleUpdate));
