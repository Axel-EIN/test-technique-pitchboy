import React from 'react';
import { useState, useEffect } from 'react';
import "./Header.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import requests from "../config/Request";
import axios from 'axios';
import QuickView from "./QuickView";

function Header() {
  const [movie, setMovie] = useState([]);
  const [popupStatus, setPopup] = useState(false);

  function handleClickPopup() {
    popupStatus? setPopup(false) : setPopup(true);
  };

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length -1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncateText(string, n) {
    if (string) {
      if (string.length > n)
        return string.substr(0, n - 1) + "...";
      else
        return string;
    } else
      return "No description";
  };

  const headerStyle = {
    backgroundImage:
      `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.6),
        rgba(60, 20, 20, 0.8)
        ),
      url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  };

  return (
    <header className="header" style={headerStyle}>
        <div className="header__content">
            <h1 className="header__title">{movie?.title || movie?.name || movie?.original_title}</h1>
            <p className="header__description">{truncateText(movie?.overview,100)}</p>
            <div className="header__buttons">
                <button className="header__button header__button--play">
                  <PlayArrowIcon /> Lecture
                </button>
              <button className="header__button" onClick={handleClickPopup}>
                <HelpOutlineIcon /> Plus d'infos
              </button>
            </div>
        </div>
        <QuickView bannerStyle={headerStyle} movie={movie} handleClickPopup={handleClickPopup} popupStatus={popupStatus}/>
    </header>
  );
}

export default Header;