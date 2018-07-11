import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

import { Fa } from 'mdbreact';

import Album from '../Album'

import './style.css'

const Albums = ({ albums, onSelectNewAlbum }) => {
    return (
    <div className="card-deck just d-flex justify-content-around">
        {albums && albums.length > 0 ? albums.map(album => (
            <div className='album-card' key={album.id} onClick={() => onSelectNewAlbum(album.tracks)}>
                    <Album
                        key={album.id}
                        id={album.id}
                        name={album.name}
                        performer={album.performer}
                        genre={album.genre}
                        poster={album.poster}
                    />
                <Link to={`/albums/${album.id}`}><Fa className="album-icon-play" icon="play-circle" size="lg" /></Link>
            </div>
        )): null}
    </div>
    )
};

Albums.propTypes = {
    albums: PropTypes.array.isRequired,
    onSelectNewAlbum: PropTypes.func.isRequired,
};

export default Albums;
