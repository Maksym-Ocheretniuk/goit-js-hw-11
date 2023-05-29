import axios from 'axios';

// https://pixabay.com/api/?key=36649716-ae2071ec6e2a5083f2a16f94e&q=cat&image_type=photo&orientation=horizontal&safesearch=true

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '36649716-ae2071ec6e2a5083f2a16f94e';
// const IMG_TYPE = 'photo';
// const ORIENTATION = 'horizontal';
// const SAFE_SEARCH = 'true';

export class PixabayAPI {
  #page = 1;
  #per_page = 40;
  #query = '';
  #totalPages = 0;

  async getPhotos() {
    const params = {
      page: this.#page,
      q: this.#query,
      per_page: this.#per_page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    };

    const urlAXIOS = `?key=${API_KEY}`;

    const { data } = await axios.get(urlAXIOS, { params });
    return data;
  }

  get query() {
    this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  setTotal(total) {
    this.#totalPages = total;
  }

  hasMorePhotos() {
    return this.#page < Math.ceil(this.#totalPages / this.#per_page);
  }
}

// getImg('cat').then(result => console.log(result));
