import Axios, { AxiosResponse } from "axios";
import FilmDataTypes from "../Interfaces/FilmDataTypes";

//* ALL API CALLS
export async function GetFilms(props: string): Promise<FilmDataTypes[] | null> {
	let popular: string;
	popular = props;

	try {
		const filmData: AxiosResponse<any, any> = await Axios.get(
			//todo fix the env call, not working
			`https://api.themoviedb.org/3/movie/${popular}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
		);
		console.log(filmData.data.results);
		return filmData.data.results;
	} catch (err) {
		console.log(err);
		return null;
	}
}

export async function GetOneFilm(props: string): Promise<any|void> {
	let movie_id: string;
	movie_id = props;

	try {
		const oneFilmData: AxiosResponse<any, any> = await Axios.get(
			`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
		);
		console.log(oneFilmData.data);
		return oneFilmData.data;
	} catch (err) {
		console.log(err);
	}
}
