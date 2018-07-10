import React, { Component } from 'react';
import { connect } from 'react-redux'
// import PropTypes from 'prop-types';

import {
    toggleLikeAlbum,
    onPlayNewTrack,
    onPlay,
    onPause,
} from "../../actions/PlayerActions";
import {
    getAlbumById,
    getEntities,
    getLikedAlbums,
    getPlayingIndex,
} from "../../selectors";

import AlbumPage from '../../containers/AlbumPage'


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
    playingIndex: getPlayingIndex(state),
    tracks: getEntities(state, 'playlist'),
    likedAlbums: getLikedAlbums(state)
});

const mapDispatchToProps = {
    toggleLikeAlbum,
    onPlayNewTrack,
    onPlay,
    onPause
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPageContainer);
