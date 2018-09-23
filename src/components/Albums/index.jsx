import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Fa, Button } from 'mdbreact';

import { ADD_COUNT_ALBUMS } from '../../constants/User'
import Album from '../Album/index';

import './style.css';

const Albums = ({
  albums,
  onSelectNewAlbum,
  getMoreAlbums,
  albumsCount,
  currentCountAlbums,
}) => {
  return (
    <div className="card-deck just d-flex justify-flex-start">
      {albums && albums.length > 0
        ? albums.map(album => (
            <div
              className="album-card"
              key={album.id}
              onClick={() => onSelectNewAlbum(album.tracks)}
            >
              <Album
                key={album.id}
                id={album.id}
                name={album.name}
                performer={album.performer}
                genre={album.genre}
                poster={album.poster}
              />
              <Link to={`/albums/${album.id}`}>
                <Fa className="album-icon-play" icon="play-circle" size="lg" />
              </Link>
            </div>
          ))
        : null}
        <div className="load-more-container">
          <Button
            className="load-more"
            onClick={() => getMoreAlbums(ADD_COUNT_ALBUMS)}
            color="info"
            disabled={albumsCount === currentCountAlbums}
          >
            Show more albums
          </Button>
        </div>
    </div>
  );
};

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  albumsCount: PropTypes.number.isRequired,
  currentCountAlbums: PropTypes.number.isRequired,
  onSelectNewAlbum: PropTypes.func.isRequired,
};

export default Albums;
