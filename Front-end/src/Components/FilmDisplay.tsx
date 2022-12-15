import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GetOneFilm } from "./Apis";

const FilmDisplay: () => JSX.Element = () => {
	//todo format everything nicely, types for the new api call, cut useless info
	const location = useLocation();
	const movieID = location.state;
	const [oneFilmData, setOneFilmData] = useState();

	useEffect(() => {
		const oneFilmWrap: () => Promise<void> = async () => {
			const oneFilmsData = await GetOneFilm(movieID.toString());
			setOneFilmData(oneFilmsData);
		};
		oneFilmWrap();
	}, []);

	return (
		<div>
			hi
			{JSON.stringify(oneFilmData)}
		</div>
	);
};

export default FilmDisplay;
