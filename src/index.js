import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const refs = {
  formEl: document.querySelector('.search-form'),
  inputEl: document.querySelector('.search-form-input'),
  galleryEl: document.querySelector('.gallery'),
  bodyEl: document.querySelector('body'),
};

refs.formEl.addEventListener('submit', onSearchImg);

function onSearchImg(evt) {
  evt.preventDefault();
  console.log(formEl);
}

// https://pixabay.com/api/?key=36649716-ae2071ec6e2a5083f2a16f94e&q=cat&image_type=photo&orientation=horizontal&safesearch=true

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36649716-ae2071ec6e2a5083f2a16f94e';
const searchParams = new URLSearchParams({
  fields: 'q,image_type,orientation,safesearch,',
});

// const fetchSearchCountries = q =>
//   fetch(`${BASE_URL}/${countryName}?${searchParams}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
