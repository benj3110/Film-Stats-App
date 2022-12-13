import React from "react";
import Movies from "../Data/MovieDoc.json";
import User from "../Data/UserDoc.json";


const DataTest = () => {
  //console.log(Movies);
  //console.log(process.env.REACT_APP_TMDB_API_KEY);
  return (
    <div>
      <p> {JSON.stringify(Movies)} </p>,
      <p> {JSON.stringify(User)} </p>
    </div>
  );
};

export default DataTest;
