const secondHand = document.querySelector('.second-hand') as HTMLDivElement;
const minuteHand = document.querySelector('.min-hand') as HTMLDivElement;
const hourHand = document.querySelector('.hour-hand') as HTMLDivElement;

const convertDegrees = (number: number, division: number) =>
	(number / division) * 360;

const setDate = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	secondHand.style.rotate = `${convertDegrees(seconds, 60)}deg`;
	minuteHand.style.rotate = `${convertDegrees(minutes, 60)}deg`;
	hourHand.style.rotate = `${convertDegrees(hours, 12)}deg`;
};
setInterval(setDate, 1000);
