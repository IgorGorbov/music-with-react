import React from 'react';
import { Link } from 'react-router-dom'

import './style.css'

const Album = ({ id, name, performer, genre, poster }) => {
    return (
    <div className="card album mb-4">

        <div className="view overlay">
            <img className="card-img-top" src={poster}
                 alt="Poster" />
            <Link to={`/albums/${id}`}>
                <div className="mask rgba-white-slight" />
            </Link>
        </div>

        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{performer} || {genre}</p>
        </div>
    </div>
    )
};

export default Album;

