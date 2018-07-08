import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { onPlayNewTrack, onPlay, onPause } from '../../actions/PlayerActions'

import { getAlbumById, getPlayingIndex } from "../../selectors";

import Album from '../Album'
import AlbumTracks from '../AlbumTracks'

import './style.css'

class AlbumPage extends Component {

    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.toggleActiveTrack = this.toggleActiveTrack.bind(this);
    }

    handleOnClick = (trackId, trackSrc) => event => {
        const { onPlayNewTrack, playingIndex } = this.props;

        if(trackId !== playingIndex) onPlayNewTrack(trackId, trackSrc);
        this.togglePlay();
    };

    togglePlay () {
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

    toggleActiveTrack (trackId, playingIndex, isPlaying) {
        return trackId === playingIndex && isPlaying
    }


    render() {
        const { album, player } = this.props;
        if (!album) return <Redirect to="/"/>;

        return (
            <div className="album-page">
                <div className="album-container">
                    <Album
                        id={album.id}
                        name={album.name}
                        performer={album.performer}
                        genre={album.genre}
                        poster={album.poster}
                    />
                    <AlbumTracks
                        player={player}
                        tracks={album.tracks}
                        handleOnClick={this.handleOnClick}
                        toggleActiveTrack={this.toggleActiveTrack}
                    />
                </div>
            </div>
        )
    };
}

export default AlbumPage;
