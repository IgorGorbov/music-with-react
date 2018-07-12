import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'mdbreact';

import Track from '../../containers/Track';

import './style.css';

const AlbumTracks = ({ tracks, handleOnClick, player, toggleActiveTrack }) => {
  return (
    <ListGroup className="track-list">
      {tracks.length > 0
        ? tracks.map(track => (
            <Track
              key={track.id}
              track={track}
              player={player}
              handleOnClick={handleOnClick}
              toggleActiveTrack={toggleActiveTrack}
            />
          ))
        : null}
    </ListGroup>
  );
};

AlbumTracks.propTypes = {
  tracks: PropTypes.array.isRequired,
  player: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  toggleActiveTrack: PropTypes.func.isRequired,
};

export default AlbumTracks;
