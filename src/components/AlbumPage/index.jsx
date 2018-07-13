import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import { Fa, Button } from 'mdbreact';

import Album from '../Album/index';
import AlbumTracks from '../AlbumTracks/index';

import './style.css';

class AlbumPage extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    album: PropTypes.object,
    playingIndex: PropTypes.number,
    tracks: PropTypes.array.isRequired,
    likedAlbums: PropTypes.array,
    toggleVolume: PropTypes.func,
    toggleLikeAlbum: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleActiveTrack = this.toggleActiveTrack.bind(this);
  }

  handleOnClick = (trackId, trackSrc) => event => {
    const { onPlayNewTrack, playingIndex } = this.props;

    if (trackId !== playingIndex) onPlayNewTrack(trackId, trackSrc);
    this.togglePlay();
  };

  togglePlay() {
    const { player, onPlay, onPause } = this.props;
    const { trackUrl } = player;

    if (!trackUrl) return;

    const audio = document.getElementById('audio');

    if (audio.paused) {
      audio.play();
      onPlay();
    } else {
      audio.pause();
      onPause();
    }
  }

  toggleActiveTrack(trackId, playingIndex, isPlaying) {
    return trackId === playingIndex && isPlaying;
  }

  render() {
    const { album, player, tracks, likedAlbums, toggleLikeAlbum } = this.props;

    if (!album) return <Redirect to="/" />;

    const isLiked = likedAlbums.includes(album.id);

    return (
      <div className="album-page">
        <div className="album-container">
          <div className="album-wrapper">
            <Link to="/">
              <Fa className="back-arrow" icon="chevron-left" size="2x" />
            </Link>
            <Album
              id={album.id}
              name={album.name}
              performer={album.performer}
              genre={album.genre}
              poster={album.poster}
            />
            <Button
              className="like-btn"
              onClick={() => toggleLikeAlbum(album.id)}
              outline
              color="info"
            >
              <Fa className={isLiked ? 'liked' : ''} icon="heart" size="2x" />
            </Button>
          </div>
          <AlbumTracks
            player={player}
            tracks={tracks}
            handleOnClick={this.handleOnClick}
            toggleActiveTrack={this.toggleActiveTrack}
          />
        </div>
      </div>
    );
  }
}

export default AlbumPage;
