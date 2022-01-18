const API_URL =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=70f7b27b0933c73923f41cdc217909fc&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w512/';
const SEARCH_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=70f7b27b0933c73923f41cdc217909fc&query="';

    const form = document
//get movies
getTitles(API_URL);

async function getTitles(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
}
