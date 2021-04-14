import React, {useState, useEffect} from 'react';
import './Banner.css';
import axios from '../../../utilities/axios';

const Banner = ({fetchUrl}) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl)
      .then(response => {
        // return a random movie
        setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)])
      })
  }, [fetchUrl])

  // function to trancate texts
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }
  console.log(movie);
  return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.name || movie?.original_title || movie?.title}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="banner__fadebottom" />
      </header>
    );
}

export default Banner;
