import Axios, { AxiosResponse, CancelTokenSource } from "axios";
import FilmDataTypes from "../Interfaces/FilmDataTypes";

//* ALL API CALLS
export async function GetFilms(props: string): Promise<FilmDataTypes[] | null> {
	let popular: string;
	popular = props;
	const cancelToken: CancelTokenSource = Axios.CancelToken.source();

	try {
		const filmData: AxiosResponse<any, any> = await Axios.get(
			//todo add cancel token properly
			`https://api.themoviedb.org/3/movie/${popular}?api_key=${
				import.meta.env.VITE_TMDB_API_KEY
			}&language=en-US&page=1`,
			{ cancelToken: cancelToken.token }
		);
		//console.log(filmData.data.results);
		return filmData.data.results;
	} catch (err) {
		if (Axios.isCancel(err)){
			console.log("get request cancelled")
		} else{
			console.log(err);
		}
		return null
	}

	// return {
	// 	cancelToken.cancel()
	// };
}

export async function GetOneFilm(props: string): Promise<any | void> {
	let movie_id: string;
	movie_id = props;

	try {
		const oneFilmData: AxiosResponse<any, any> = await Axios.get(
			`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
		);
		console.log(oneFilmData.data);
		return oneFilmData.data;
	} catch (err) {
		console.log(err);
	}
}
