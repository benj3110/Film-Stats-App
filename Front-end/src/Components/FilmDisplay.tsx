import { useEffect, useState } from "react";
import { GetOneFilm } from "./Apis";

const FilmDisplay: (movieID: string) => JSX.Element = (movieID:string) => {
	//const movieID = 436270;
	const [oneFilmData, setOneFilmData] = useState();

	useEffect(() => {
		const oneFilmWrap: () => Promise<void> = async () => {
			const oneFilmsData = await GetOneFilm(movieID);
			setOneFilmData(oneFilmsData);
		};
        oneFilmWrap();
	}, []);

	return <div></div>;
};

export default FilmDisplay;
