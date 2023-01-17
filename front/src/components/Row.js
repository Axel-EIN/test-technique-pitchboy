import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './Row.scss';

function Row({ title, anchor, fetchUrl, isPoster }) {
    const baseUrlImage = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
          const request = await axios.get(fetchUrl);
    
          setMovies(request.data.results);
        }
        fetchData();
      }, [fetchUrl]);

  return (
    <div className="row" id={anchor}>
        <h2 className="row__title">{title}</h2>
        <div className="row__images">
            {movies.map((movie) => (
                <div key={movie.id}>
                  <Link to={`/video/${movie?.id}`}>
                    <img
                      src={
                        isPoster?`${baseUrlImage}/${movie.poster_path}`
                        : `${baseUrlImage}/${movie.backdrop_path}`
                      }
                      className='row__image'
                      alt={movie?.title || movie?.name || movie?.original_title}
                    />
                  </Link>
                </div>
              ))}
        </div>
    </div>
  )
};

export default Row;