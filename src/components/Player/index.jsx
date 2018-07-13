import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Fa, Button } from 'mdbreact';

import withAudio from '../../hoc/withAudio';
import TrackInputRange from '../TrackInputRange/index';
import VolumeInputRange from '../VolumeInputRange/index';

import './style.css';

class Player extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    track: PropTypes.object,
    likedTracks: PropTypes.array.isRequired,
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

  shouldComponentUpdate(nextProps) {
    return !!nextProps.track;
  }

  togglePlay() {
    const { player, onPlay, onPause } = this.props;
    if (!player.trackUrl) return;

    const audio = document.getElementById('audio');

    if (audio.paused) {
      audio.play();
      onPlay();
    } else {
      audio.pause();
      onPause();
    }
  }

  render() {
    const {
      track,
      likedTracks,
      player,
      onTimeUpdate,
      changeCurrentTime,
      onVolumeChange,
      changeVolume,
      playNextSongFromButton,
      playPrevSong,
      toggleRepeat,
      toggleShuffle,
      toggleVolume,
      toggleLikeTrack,
    } = this.props;


    const isLiked = likedTracks.includes(track.id);
    const isShuffle = player.shuffle;
    const isRepeat = player.repeat;
    const isMuted = player.muted;
    const isPlaying = player.isPlaying;

    return (
      <div className="player animated bounceInUp">
        <div className="poster text-center">
          <img
            src={track.poster}
            alt="poster"
            className="rounded-circle img-fluid"
          />
        </div>
        <div className="track-input-range">
          <div className="track-info">
            {`${track.performer} - ${track.name}`}
          </div>
          <TrackInputRange
            player={player}
            onTimeUpdate={onTimeUpdate}
            changeCurrentTime={changeCurrentTime}
          />
        </div>
        <div className="panel-control">
          <Button onClick={() => toggleShuffle()} outline color="info">
            <Fa
              className={isShuffle ? 'is-shuffle' : ''}
              icon="random"
              size="2x"
            />
          </Button>
          <Button onClick={() => toggleRepeat()} outline color="info">
            <Fa
              className={isRepeat ? 'is-repeat' : ''}
              icon="repeat"
              size="2x"
            />
          </Button>
          <Button
            onClick={() => toggleLikeTrack(track.id)}
            outline
            color="info"
          >
            <Fa className={isLiked ? 'liked' : ''} icon="heart" size="2x" />
          </Button>
          <Button
            onClick={() => playPrevSong()}
            className="circle-left"
            outline
            color="info"
          >
            <Fa icon="arrow-circle-left" size="2x" />
          </Button>
          <Button onClick={() => this.togglePlay()} outline color="info">
            <Fa icon={isPlaying ? 'stop-circle' : 'play-circle'} size="2x" />
          </Button>
          <Button onClick={() => playNextSongFromButton()} outline color="info">
            <Fa icon="arrow-circle-right" size="2x" />
          </Button>
        </div>
        <div className="track-input-volume">
          <Button onClick={() => toggleVolume()} outline color="info">
            <Fa icon={isMuted ? 'volume-off' : 'volume-up'} size="2x" />
          </Button>
          <VolumeInputRange
            player={player}
            changeVolume={changeVolume}
            onVolumeChange={onVolumeChange}
          />
        </div>
      </div>
    );
  }
}

export default withAudio(Player);
