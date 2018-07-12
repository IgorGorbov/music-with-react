import React, { Component } from 'react';

import { ListGroupItem, Badge, Fa } from 'mdbreact';

import { formatSeconds } from '../../helpers/tracks';

export default class Track extends Component {
  state = {
    duration: 0,
  };

  componentDidMount() {
    const { track } = this.props;
    this.getDurationTrack(track);
  }

  shouldComponentUpdate(nextProps) {
    return !!nextProps.track;
  }

  getDurationTrack(track) {
    const audio = new Audio(track.url);
    audio.onloadedmetadata = () => {
      this.setState({
        duration: Math.floor(audio.duration),
      });
    };
  }

  render() {
    const { track, player, toggleActiveTrack, handleOnClick } = this.props;

    return (
      <ListGroupItem
        className={
          toggleActiveTrack(track.id, player.playingIndex, player.isPlaying)
            ? 'track-list-item-active'
            : 'track-list-item'
        }
        onClick={handleOnClick(track.id, track.url)}
        key={track.id}
        hover
      >
        <Badge className="track-icon-toggle" color="primary" pill>
          <Fa
            icon={
              toggleActiveTrack(track.id, player.playingIndex, player.isPlaying)
                ? 'stop-circle'
                : 'play-circle'
            }
            size="2x"
          />
        </Badge>
        <div className="track-item-info">{`${track.performer} - ${
          track.name
        }`}</div>
        <div className="track-duration">
          {formatSeconds(this.state.duration)}
        </div>
      </ListGroupItem>
    );
  }
}
