import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

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

    static propTypes = {
        player: PropTypes.object.isRequired,
        user: PropTypes.object,
        album: PropTypes.object,
        location: PropTypes.object.isRequired,
        playingIndex: PropTypes.string,
        tracks: PropTypes.array.isRequired,
        likedAlbums: PropTypes.array.isRequired,
        toggleVolume: PropTypes.func,
        toggleLikeAlbum: PropTypes.func.isRequired,
        onPlay: PropTypes.func.isRequired,
        onPause: PropTypes.func.isRequired
    };

    render() {
        const { user } = this.props;
        if (!user) return <Redirect to={{ pathname: '/user/login', state: {from: this.props.location} }}/>;
        return <AlbumPage {...this.props} />
    }
}

const mapStateToProps = (state, ownProps) => ({
    player: state.player,
    user: state.session.user,
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
