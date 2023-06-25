const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

interface City {
	city: string;
	growth_from_2000_to_2013: string;
	latitude: number;
	longitude: number;
	population: string;
	rank: string;
	state: string;
}
const cities: City[] = [];

fetch(endpoint)
	.then((blob) => blob.json())
	.then((data) => cities.push(...data));

const findMatches = (word: string) => {
	const regex = new RegExp(word, 'gi');
	return cities.filter(
		(place) => place.city.match(regex) || place.state.match(regex)
	);
};

function numberWithCommas(x: string) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function createSuggestions(this: HTMLInputElement) {
	const matchArray = findMatches(this.value);
	const html = matchArray
		.map((place) => {
			const regex = new RegExp(this.value, 'gi');
			const cityName = place.city.replace(
				regex,
				`<span class="hl">${this.value}</span>`
			);
			const stateName = place.state.replace(
				regex,
				`<span class="hl">${this.value}</span>`
			);
			return `
    <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>

    </li>
    `;
		})
		.join('');
	suggestions.innerHTML = html;
}

const searchTerm = document.querySelector('.search') as HTMLInputElement;
const suggestions = document.querySelector('.suggestions') as HTMLUListElement;

searchTerm.addEventListener('input', createSuggestions);
