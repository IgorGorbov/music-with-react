import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './style.css';

const Album = ({ id, name, performer, genre, poster }) => {
  return (
    <div className="card album mb-4">
      <div className="view overlay">
        <img className="card-img-top" src={poster} alt="Poster" />
        <Link to={`/albums/${id}`}>
          <div className="mask rgba-white-slight" />
        </Link>
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">
          {performer} ||{' '}
          {genre.map(g => (
            <span key={g.id} className="genre">
              {g.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

Album.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  performer: PropTypes.array.isRequired,
  genre: PropTypes.array.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Album;
