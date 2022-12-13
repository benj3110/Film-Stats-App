import { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css";

//* NAVBAR CONTAINS THE LINKS TO THE MOVIES & PROFILE PAGE, & THE SEARCH BAR

const NavBar = () => {
	const [searchInput, setSearchInput] = useState<string>("");

	const handleSearch = (e: React.FormEvent<HTMLElement>): void => {
		e.preventDefault();
		const SearchSubmit = searchInput;
		console.log(SearchSubmit);
	};

	return (
		//Nav wrap.
		//No 'li' or 'a href', 'Link' 'to' syntax instead.
		<header>
			<nav className="Nav-Bar">
				<Link className="Nav-Link" to="/">
					{" "}
					Movies{" "}
				</Link>

				<Link className="Nav-Link" to="/Profile">
					{" "}
					Profile{" "}
				</Link>

				<div className="Search-Bar">
					<form onSubmit={handleSearch}>
						<input
							type="text"
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
						/>
						<button>Search</button>
					</form>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
