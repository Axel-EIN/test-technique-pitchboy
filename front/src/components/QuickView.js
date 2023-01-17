import React from 'react';
import "./QuickView.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CancelIcon from '@material-ui/icons//Cancel';
import requests from './../config/Request';
import Row from './Row';
import { Link } from "react-router-dom";

function QuickView({bannerStyle, movie, handleClickPopup, popupStatus}) {
  return (
    <div className={`modal ${popupStatus && "open"}`}>
      <div className={`quickView ${popupStatus && "open"}`}>
        <div className="quickView__banner" style={bannerStyle}>
            <div className="quickView__content">
              <Link to={`/video/${movie?.id}`}>
                <button className="button button--play" onClick={handleClickPopup}>
                    <PlayArrowIcon fontSize="large" /> Lecture
                </button>
              </Link>
                <h3 className="quickView__title">{movie?.title || movie?.name || movie?.original_title}</h3>
                <div className="quickView__description">
                  <p>{movie?.overview}</p>
                  <p>{movie?.overview} {movie?.overview}</p>
                  <p>{movie?.overview}</p>
                </div>
                <div className="quickView__recommendations">
                  <Row title="Recommendées" anchor="recommandations" fetchUrl={`${requests.fetchBaseMovie}/${movie.id}/${requests.fetchRecommendations}`} />
                </div>
            </div>
            <button className="quickView__close" onClick={handleClickPopup}>
                <CancelIcon fontSize="large" />
            </button>
        </div>
    </div>
  </div>
  );
}

export default QuickView;