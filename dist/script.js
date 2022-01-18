const API_URL =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=70f7b27b0933c73923f41cdc217909fc&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w300';
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=70f7b27b0933c73923f41cdc217909fc&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

//get movies
getTitles(API_URL);

async function getTitles(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieElem = document.createElement('div');
        movieElem.classList.add('movie-container');

        movieElem.innerHTML = `            
            <img
            src="${IMG_PATH + poster_path}"
            alt="${title}"
            />
            <div class="info">
                <h3>${title}</h3>
                <span class="${getRatingColor(
                    vote_average
                )}">${vote_average}</span>
            </div>
            <div class="description">
            <h3>Description</h3>
            ${overview}
            </div>`;

        main.appendChild(movieElem);
    });
}

function getRatingColor(vote) {
    if (vote >= 8.1) {
        return 'green';
    } else if (vote >= 4.5) {
        return 'yellow';
    } else {
        return 'red';
    }
}

//event listener in form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const movieName = search.value;

    if (movieName && movieName !== '') {
        getTitles(SEARCH_API + movieName);
        search.value = '';
    } else {
        window.location.reload();
    }
});
