import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import AlbumPage from '../../containers/AlbumPage'

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
import {getAlbumById, getPlayingIndex} from "../../selectors";

class AlbumPageContainer extends Component {
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
        return <AlbumPage {...this.props} />
    }
}

const mapStateToProps = (state, ownProps) => ({
    player: state.player,
    album: getAlbumById(state, ownProps.match.params.id),
    playingIndex: getPlayingIndex(state)
});



const mapDispatchToProps = {
    onPlayNewTrack,
    onPlay,
    onPause
};


export default connect(mapStateToProps, mapDispatchToProps)(AlbumPageContainer);
