import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withAudio from '../../hoc/withAudio';

//import { isLikeTrack } from '../../selectors/index';

import './style.css';

class Player extends Component {
  // static propTypes = {
  //   classes: PropTypes.object.isRequired,
  //   trackUrl: PropTypes.string,
  //   track: PropTypes.object,
  //   player: PropTypes.object,
  //   onTimeUpdate: PropTypes.func,
  //   changeCurrentTime: PropTypes.func,
  //   onVolumeChange: PropTypes.func,
  //   changeVolume: PropTypes.func,
  //   user: PropTypes.object,
  //   playNextSongFromButton: PropTypes.func,
  //   playPrevSong: PropTypes.func,
  //   toggleRepeat: PropTypes.func,
  //   toggleShuffle: PropTypes.func,
  //   toggleLikeTrack: PropTypes.func,
  // };

  togglePlay() {
    const { trackUrl, onPlay, onPause } = this.props;
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

  toggleMuted() {
    const { toggleMuted, toggleVolume } = this.props;
    toggleVolume();
    toggleMuted();
  }

  render() {
    const {
      track,
      player,
      onTimeUpdate,
      changeCurrentTime,
      onVolumeChange,
      changeVolume,
      user,
      playNextSongFromButton,
      playPrevSong,
      toggleRepeat,
      toggleShuffle,
      toggleLikeTrack,
    } = this.props;

    if (!player.trackUrl) return null;
    return <div className="player">player</div>;
  }
}

export default withAudio(Player);
