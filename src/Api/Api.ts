import axios from "axios";
import { IAllDataMovie, IGenres, IImages, IPopular } from "../model";
// import { IAllDataMovie, IGenres, IImages, IPopular } from "../module";

const API_KEY = '01c50a68276df607f527c283c2a54062';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/'
})

export const getMovies = (active: string): Promise<IPopular[]> => api.get(`${active}?api_key=${API_KEY}&language=en-US&page=1`)
    .then((res) => res.data.results).catch((e) => console.log(e))

export const getGenresList = (): Promise<IGenres[]> => api.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data.genres)

export const getMoviesByName = (name: string): Promise<IPopular[]> => api.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`)
    .then((res) => res.data.results)

export const getMovieById = (id: number): Promise<IAllDataMovie> => api.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
.then((res) => res.data)

export const getImagesById = (id: number): Promise<IImages[]> => api.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}&language=ru-RU&include_image_language=ru,null`)
.then((res) => res.data.backdrops)