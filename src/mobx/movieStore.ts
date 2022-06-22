import { makeAutoObservable } from "mobx";
import { IMovie } from "../interface";

class MovieStore {
    movie: IMovie | null = null;
    loading = false;
    showSearchField = false;

    constructor() {
        makeAutoObservable(this)
    }

    getMovie(title: string | undefined) {
        this.loading = true;
        fetch(`https://www.omdbapi.com/?apikey=2d49a8ef&t=${title}`)
            .then(res => res.json())
            .then(result => {
                this.movie = result;
                this.loading = false;
            })
    }
};
export const movieStore = new MovieStore();

