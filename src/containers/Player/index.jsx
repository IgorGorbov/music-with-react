import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types';

import { Fa, Button } from 'mdbreact';

import withAudio from '../../hoc/withAudio';
import TrackInputRange from "../../components/TrackInputRange";
import VolumeInputRange from "../../components/VolumeInputRange";

//import { isLikeTrack } from '../../selectors/index';

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

    return <div className="player animated bounceInUp">
        <div className="poster text-center">
            <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                alt="poster"
                className="rounded-circle img-fluid"
            />
        </div>

        <div className="track-input-range">
            <div className="track-info">
                {`${'Metallica'} - ${'From the Bell Tolls'}`}
            </div>
            <TrackInputRange
                player={player}
                onTimeUpdate={onTimeUpdate}
                changeCurrentTime={changeCurrentTime}
            />
        </div>
      <div className="panel-control">
          <Button outline color="info"><Fa icon="random" size="2x" /></Button>
          <Button outline color="info"><Fa icon="repeat" size="2x" /></Button>
          <Button outline color="info"><Fa icon="heart" size="2x" /></Button>

          <Button className="circle-left" outline color="info"><Fa icon="arrow-circle-left" size="2x" /></Button>
          <Button outline color="info"><Fa icon="play-circle" size="2x" /></Button>
          <Button outline color="info"><Fa icon="arrow-circle-right" size="2x" /></Button>
      </div>
        <div className="track-input-volume">
            <Button outline color="info"><Fa icon="volume-up" size="2x" /></Button>
            <VolumeInputRange
                player={player}
                changeVolume={changeVolume}
                onVolumeChange={onVolumeChange}
            />
        </div>


    </div>;
  }
}

export default withAudio(Player);
