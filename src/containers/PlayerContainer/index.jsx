import React, { Component } from 'react';
import { connect } from 'react-redux';

// import PropTypes from 'prop-types';

import Player from '../../containers/Player'
import { getCurrentTrack, getLikedTracks } from '../../selectors'

import {
    onPlayNewTrack,
    onLoadStart,
    playNextSong,
    onPlay,
    onPause,
    onLoadedMetadata,
    onTimeUpdate,
    onVolumeChange,
    toggleVolume,
    playNextSongFromButton,
    playPrevSong,
    toggleRepeat,
    toggleShuffle,
    toggleLikeTrack
} from "../../actions/PlayerActions";

class PlayerContainer extends Component {
    // static propTypes = {
    //     fetchData: PropTypes.func,
    //     loadMoreTracks: PropTypes.func,
    //     loadNewPlayingIndex: PropTypes.func,
    //     onLoadStart: PropTypes.func,
    //     playNextSong: PropTypes.func,
    //     playNextSongFromButton: PropTypes.func,
    //     playPrevSong: PropTypes.func,
    //     onPlay: PropTypes.func,
    //     onPause: PropTypes.func,
    //     onLoadedMetadata: PropTypes.func,
    //     onTimeUpdate: PropTypes.func,
    //     onVolumeChange: PropTypes.func,
    //     toggleVolume: PropTypes.func,
    //     toggleRepeat: PropTypes.func,
    //     toggleShuffle: PropTypes.func,
    //     toggleLikeTrack: PropTypes.func
    // };

    render() {
        const { trackUrl } = this.props.player;
        if (!trackUrl) return null;

        return <Player {...this.props} />
    }
}

const mapStateToProps = state => ({
    player: state.player,
    track: getCurrentTrack(state, state.player.playingIndex),
    likedTracks: getLikedTracks(state)
});

const mapDispatchToProps = {
    onPlayNewTrack,
    onLoadStart,
    playNextSong,
    playNextSongFromButton,
    playPrevSong,
    onPlay,
    onPause,
    onLoadedMetadata,
    onTimeUpdate,
    onVolumeChange,
    toggleVolume,
    toggleRepeat,
    toggleShuffle,
    toggleLikeTrack
};


export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
