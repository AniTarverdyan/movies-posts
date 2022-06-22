import Main from "../components/Main";
import Movie from "../pages/Movie";
import { MAIN_PATH, MOVIE_PATH } from "./path";

const MAIN = {
    component: Main,
    path: MAIN_PATH
};

const MOVIE = {
    component: Movie,
    path: MOVIE_PATH
};

export default [MAIN, MOVIE];