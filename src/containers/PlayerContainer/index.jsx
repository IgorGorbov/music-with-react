import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentTrack, getLikedTracks } from '../../selectors';

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
  toggleLikeTrack,
} from '../../actions/PlayerActions';
import Player from '../../components/Player';

const PlayerContainer = props =>
  props.player.trackUrl ? <Player {...props} /> : null;

const mapStateToProps = state => ({
  player: state.player,
  track: getCurrentTrack(state),
  likedTracks: getLikedTracks(state),
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
  toggleLikeTrack,
};

PlayerContainer.propTypes = {
  player: PropTypes.object.isRequired,
  track: PropTypes.object,
  likedTracks: PropTypes.array,
  onPlayNewTrack: PropTypes.func.isRequired,
  onLoadStart: PropTypes.func.isRequired,
  playNextSong: PropTypes.func.isRequired,
  playNextSongFromButton: PropTypes.func.isRequired,
  playPrevSong: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onLoadedMetadata: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onVolumeChange: PropTypes.func.isRequired,
  toggleVolume: PropTypes.func.isRequired,
  toggleRepeat: PropTypes.func.isRequired,
  toggleShuffle: PropTypes.func.isRequired,
  toggleLikeTrack: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerContainer);
