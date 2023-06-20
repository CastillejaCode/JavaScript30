const playSound = (e: KeyboardEvent) => {
	const audio = document.querySelector(
		`audio[data-key="${e.keyCode}"]`
	) as HTMLAudioElement | null;
	const key = document.querySelector(
		`.key[data-key="${e.keyCode}"]`
	) as HTMLDivElement | null;

	if (!audio || !key) return;
	key.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
};

const removeTransition = (e: TransitionEvent) => {
	if (e.propertyName !== 'transform') return;
	const target = e.target as HTMLDivElement;
	target.classList.remove('playing');
};

const keys = Array.from(document.querySelectorAll('.key')) as HTMLDivElement[];
keys.map((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
