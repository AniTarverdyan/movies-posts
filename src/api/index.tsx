import axios from "axios";

const appKey = '2d49a8ef';
const instance = axios.create({
    baseURL: ('https://www.omdbapi.com/')
});

export const MovieApi = {
    getMovieByPage(page: number) {
        return instance.get(`apikey=${appKey}s=America&page=${page}&t=series`)
    },

    getMovieByTitle(title: string) {
        return instance.get(`apikey=${appKey}t=${title}`)
       
    }
}