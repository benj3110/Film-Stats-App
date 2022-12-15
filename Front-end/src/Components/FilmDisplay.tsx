import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GetOneFilm } from "./Apis";
import SingleFilmDataTypes from "../Interfaces/SingleFilmDataTypes";
import ImagesDataTypes from "../Interfaces/ImagesDataTypes";

const FilmDisplay: () => JSX.Element = () => {
	const location = useLocation();
	const movieID: number = location.state.id;
	const images: ImagesDataTypes = location.state.images;

	const [oneFilmData, setOneFilmData] = useState<null | SingleFilmDataTypes>(
		null
	);

	useEffect(() => {
		const oneFilmWrap: () => Promise<void> = async () => {
			const oneFilmsData = await GetOneFilm(movieID.toString());
			setOneFilmData(oneFilmsData);
		};
		oneFilmWrap();
	}, []);

	return (
		<div>
			<h1>{oneFilmData?.title}</h1>
			<img
				className="singleFilmBackDrop_C"
				src={
					images.baseURL +
					images.backdrop_sizes[2] +
					oneFilmData?.backdrop_path
				}
				alt=""
			/>
			<img
				className="singleFilmPoster_C"
				src={
					images.baseURL +
					images.poster_sizes[3] +
					oneFilmData?.poster_path
				}
				alt=""
			/>
			<p>{oneFilmData?.overview}</p>
		</div>
	);
};

export default FilmDisplay;
