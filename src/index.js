import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import makeMarcupCountries from './js/makeMarcupCountries';
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box");
const countryListEl = document.querySelector('.country-list');
const countryDivEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler() {
  let countryName = inputEl.value.trim()
  if (countryName) {
    fetchCountries(countryName)
      .then(dataCountries => {
        makeMarcupCountries(dataCountries)
      })
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
      })
  } else {
    countryListEl.innerHTML = "";
    countryDivEl.innerHTML = "";
  }

}