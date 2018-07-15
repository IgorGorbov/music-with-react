import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import {
  toggleLikeAlbum,
  onPlayNewTrack,
  onPlay,
  onPause,
} from '../../actions/PlayerActions';
import {
  getAlbumById,
  getEntities,
  getLiked,
  getPlayingIndex,
} from '../../selectors/index';
import AlbumPage from '../../components/AlbumPage/index';

const AlbumPageContainer = props =>
  props.user ? (
    <AlbumPage {...props} />
  ) : (
    <Redirect
      to={{ pathname: '/user/login', state: { from: props.location } }}
    />
  );

const mapStateToProps = (state, ownProps) => ({
  player: state.player,
  user: state.session.user,
  album: getAlbumById(state, ownProps.match.params.id),
  playingIndex: getPlayingIndex(state),
  tracks: getEntities(state, 'playlist'),
  likedAlbums: getLiked(state, 'likedAlbums'),
});

const mapDispatchToProps = {
  toggleLikeAlbum,
  onPlayNewTrack,
  onPlay,
  onPause,
};

AlbumPageContainer.propTypes = {
  player: PropTypes.object.isRequired,
  user: PropTypes.object,
  album: PropTypes.object,
  location: PropTypes.object.isRequired,
  playingIndex: PropTypes.number,
  tracks: PropTypes.array.isRequired,
  likedAlbums: PropTypes.array,
  toggleVolume: PropTypes.func,
  toggleLikeAlbum: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumPageContainer);
