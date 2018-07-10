import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Fa, Button } from 'mdbreact';

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

        if (trackId !== playingIndex) onPlayNewTrack(trackId, trackSrc);
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
        const { album, player, tracks, likedAlbums, toggleLikeAlbum } = this.props;
        if (!album) return <Redirect to="/"/>;

        const isLiked = likedAlbums.includes(album.id);

        return (
            <div className="album-page">
                <div className="album-container">
                    <div className="album-wrapper">
                        <Album
                            id={album.id}
                            name={album.name}
                            performer={album.performer}
                            genre={album.genre}
                            poster={album.poster}
                        />
                        <Button className="like-btn" onClick={ () => toggleLikeAlbum(album.id)} outline color="info">
                            <Fa className={ isLiked ? 'liked' : ''} icon="heart" size="2x" />
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
        )
    };
}

export default AlbumPage;
