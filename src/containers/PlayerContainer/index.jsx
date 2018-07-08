import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import PlayList from '../../components/PlayList'
import Player from '../../components/Player'

import { getTracks, getTrackById, getTrackUrl } from "../../selectors/index";
import {
    fetchData,
    loadMoreTracks,
    loadNewPlayingIndex,
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
} from "../../actions";


class PlayerContainer extends Component {
    static propTypes = {
        fetchData: PropTypes.func,
        loadMoreTracks: PropTypes.func,
        loadNewPlayingIndex: PropTypes.func,
        onLoadStart: PropTypes.func,
        playNextSong: PropTypes.func,
        playNextSongFromButton: PropTypes.func,
        playPrevSong: PropTypes.func,
        onPlay: PropTypes.func,
        onPause: PropTypes.func,
        onLoadedMetadata: PropTypes.func,
        onTimeUpdate: PropTypes.func,
        onVolumeChange: PropTypes.func,
        toggleVolume: PropTypes.func,
        toggleRepeat: PropTypes.func,
        toggleShuffle: PropTypes.func,
        toggleLikeTrack: PropTypes.func
    };

    componentDidMount () {
        this.props.fetchData();
    }

    render() {
        return (
            <Fragment>
                <PlayList {...this.props} />
                <Player {...this.props} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    const { player, tracksPage, user } = state;
    const { playingIndex } = player;

    return {
        trackUrl: getTrackUrl(state),
        track: getTrackById(state, playingIndex),
        tracks: getTracks(state),
        player,
        tracksPage,
        user
    };
};

const mapDispatchToProps = {
    fetchData,
    loadMoreTracks,
    loadNewPlayingIndex,
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
