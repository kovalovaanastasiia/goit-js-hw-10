import {Notify} from 'notiflix/build/notiflix-notify-aio';

export default function makeMarcupCountries(countries) {
  const countryListEl = document.querySelector('.country-list');
  const countryDivEl = document.querySelector('.country-info');
  let countriesAmount = countries.length;
  let countryItem = [];


  if (countriesAmount > 10) {
    clearListEl()
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (countriesAmount >= 2 && countriesAmount <= 10) {
    clearListEl();
    clearDivEl();
    countries.map(country => {
      countryItem += `
            <li class="country-item">
                <img src="${country.flags.svg}" alt ="${country.flags.alt}" width="30">
                <span>${country.name.official}</span>
            </li>
            `
      countryListEl.innerHTML = countryItem;
    })
  } else {
    clearListEl()
    const country = countries[0];
    const language = Object.values(country.languages).join(', ');
    countryDivEl.innerHTML = `
	      <div class="country-wrap">
	          <img src="${country.flags.svg}" alt ="${country.flags.alt}" width="30">
	          <span class="country-name">${country.name.official}</span>
	      </div>
	      <p><span class="county-properties">Capital:</span> ${country.capital}</p>
	      <p><span class="county-properties">Population:</span> ${country.population}</p>
	      <p><span class="county-properties">Languages:</span> ${language}</p>
		    `;
  }

  function clearListEl() {
    countryListEl.innerHTML = "";
  }

  function clearDivEl() {
    countryDivEl.innerHTML = "";
  }
}
