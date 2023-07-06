// @ts-ignore
import { debounce } from './debounce';

const sliderImages = [
	...document.querySelectorAll('.slide-in'),
] as HTMLImageElement[];

function checkSlide() {
	const windowTop = window.scrollY;
	const windowBottom = window.scrollY + window.innerHeight;

	sliderImages.forEach((img) => {
		const imgTop = img.offsetTop;
		const imgMiddle = imgTop + img.height / 2;
		const imgBottom = imgTop + img.height;

		if (imgMiddle >= windowTop && imgMiddle <= windowBottom)
			img.classList.add('active');
		if (imgBottom < windowTop || imgTop > windowBottom)
			img.classList.remove('active');
	});
}

document.addEventListener('scroll', debounce(checkSlide));
