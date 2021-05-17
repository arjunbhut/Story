import axios from 'axios';

const API = axios.create({ baseURL: 'https://storyexpress.herokuapp.com'});

export const fetchAllMovie = () => API.get('/movie/');
export const addToFavourite = (movie) => API.post('/movie/add',movie);
export const fetchFav = () => API.get('/movie/fetchFav');
export const deleteFav = (movie) => API.post('/movie/deleteFav',movie);