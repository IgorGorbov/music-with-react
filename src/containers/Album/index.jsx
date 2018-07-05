import React from 'react';

import './style.css'

const Album = ({ name, performer, genre, poster, tracks }) => {
    return (
    <div className="card album mb-4">

        <div className="view overlay">
            <img className="card-img-top" src={poster}
                 alt="Card image cap" />
            <a href="#!">
                <div className="mask rgba-white-slight" />
            </a>
        </div>

        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{performer} || {genre}</p>
        </div>
    </div>
    )
};

export default Album;
