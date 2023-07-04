const video = document.querySelector('.viewer') as HTMLVideoElement;
const playButton = document.querySelector('.toggle') as HTMLButtonElement;
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = [
	...document.querySelectorAll('.player__slider'),
] as HTMLInputElement[];
const progress = document.querySelector('.progress') as HTMLDivElement;
const progressBar = document.querySelector(
	'.progress__filled'
) as HTMLDivElement;

function toggleVideo() {
	video[video.paused ? 'play' : 'pause']();
}

function updateButton(this: HTMLVideoElement) {
	playButton.textContent = this.paused ? '►' : '⏸';
}

function skip(this: HTMLElement) {
	if (!this.dataset.skip) return;
	video.currentTime += +this.dataset.skip;
}

function handleRange(this: HTMLInputElement) {
	const range = this.name as 'volume' | 'playbackRate';
	video[range] = +this.value;
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e: MouseEvent) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

let mousedown = false;

playButton.addEventListener('click', toggleVideo);

video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach((button) => button.addEventListener('click', skip));

ranges.forEach((range) => range.addEventListener('input', handleRange));

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
