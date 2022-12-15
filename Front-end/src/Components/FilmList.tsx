import { useEffect, useState } from "react";
import { GetFilms } from "./Apis";
import { Link } from "react-router-dom";
import FilmDataTypes from "../Interfaces/FilmDataTypes";
import ImagesDataTypes from "../Interfaces/ImagesDataTypes";
import "../CSS/FilmBox.css";

const FilmList = () => {
	const popular: string = "popular";
	const [filmsData, setFilmsData] = useState<null | FilmDataTypes[]>(null);
	const images: ImagesDataTypes = {
		baseURL: "https://image.tmdb.org/t/p/",
		poster_sizes: [
			"w92",
			"w154",
			"w185",
			"w342",
			"w500",
			"w780",
			"original",
		],
		backdrop_sizes: ["w300", "w780", "w1280", "original"],
	};

	//async function that await the API call in GetFilms
	useEffect(() => {
		const popularFilmsWrap: () => Promise<void> = async () => {
			const popularFilmsData: FilmDataTypes[] | null = await GetFilms(
				popular
			);
			setFilmsData(popularFilmsData);
		};

		popularFilmsWrap();
	}, []);

	//todo change way of moving to filmdisplay pages, change from using state in url

	return (
		<div className="allFilms_C">
			{filmsData?.map((filmData) => {
				return (
					<div key={filmData.id} className="eachFilm_C">
						<p className="filmTitle_C">{filmData.title}</p>
						<Link
							to={"/Film"}
							state={{ id: filmData.id, images: images }}
						>
							<img
								className="filmPoster_C"
								src={
									images.baseURL +
									images.poster_sizes[2] +
									filmData.poster_path
								}
								alt=""
							/>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default FilmList;
