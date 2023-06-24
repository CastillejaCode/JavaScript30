const panels = document.querySelectorAll('.panel');

const closeOthers = (clicked: HTMLDivElement) =>
	panels.forEach(
		(panel) =>
			panel !== clicked && panel.classList.remove('open', 'open-active')
	);

const toggleOpen = (e: Event) => {
	const panel = e.currentTarget as HTMLDivElement;
	panel.classList.toggle('open');
	setTimeout(() => {
		panel.classList.toggle('open-active');
	}, 500);
	closeOthers(panel);
};

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
