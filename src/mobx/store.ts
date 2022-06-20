import { makeAutoObservable } from "mobx";

export interface IMovie {
    Title: string;
    Poster: string;
    Year: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Writer: string;
    Actors: string;
    Language: string;
    Country: string;
    Awards: string
}

export interface IMovieItem {
    Title: string;
    Poster: string;
    Year: string;
}

class Store {
    movies: IMovieItem[] = [];
    moviesLoading = false;
    movie: IMovie | null = null;
    movieLoading = false;
    showSearchField = false;

    constructor() {
        makeAutoObservable(this)
    }

    getMovies(page: number = 1) {
        this.moviesLoading = true;
        fetch(`https://www.omdbapi.com/?apikey=2d49a8ef&s=America&page=${page}&t=series`)
            .then(res => res.json())
            .then(result => {
                this.movies = result?.Search;
                this.moviesLoading = false;
                this.showSearchField = true;
            });
    };

    getMovie(title: string | undefined) {
        this.movieLoading = true;
        fetch(`https://www.omdbapi.com/?apikey=2d49a8ef&t=${title}`)
            .then(res => res.json())
            .then(result => {
                this.movie = result;
                this.movieLoading = false;
            })
    }
};
export const store = new Store();
