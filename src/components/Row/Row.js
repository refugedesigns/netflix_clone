import React, {useState, useEffect} from 'react';
import axios from '../../utilities/axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import ScrollContainer from "react-indiana-drag-scroll";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        axios.get(fetchUrl)
            .then(response => {
                setMovies(response.data.results);
            });
        return () => {
           setMovies([]);
        }
    }, [fetchUrl])

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      }
    }


    const handleClick = (movie) => {
      if(trailerUrl) {
        setTrailerUrl('');
      }else {
        movieTrailer(movie?.name || movie?.original_title || movie?.title || "")
        .then(url => {
          // Extract and store youtube video url
          console.log(url)
          const urlParams =new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }).catch(error => {
          console.log(error);
        })
      }
    }

    return (
      <div className="row">
        <h2 className="row__title">{title}</h2>
        <ScrollContainer className="row__posters">
          {movies.map((movie) => (
              <img
              onClick={() => handleClick(movie)} 
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${baseURL}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
              alt=""
              />
          ))}
        </ScrollContainer>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    );
}

export default Row;
