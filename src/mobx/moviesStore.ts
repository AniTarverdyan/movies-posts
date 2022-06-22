import { makeAutoObservable } from "mobx";
import { MovieApi } from "../api";
import { IMovieItem } from "../interface";


class MoviesStore {
    movies: IMovieItem[] = [];
    loading = false;
    showSearchField = false;

    constructor() {
        makeAutoObservable(this)
    }

    getMovies(page: number = 1) {
        this.loading = true;
        MovieApi.getMovieByPage(page)
                this.movies = result?.Search;
                this.loading = false;
                this.showSearchField = true;
    };
};

export const moviesStore = new MoviesStore();
