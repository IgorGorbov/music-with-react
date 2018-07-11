import React from 'react';
import PropTypes from "prop-types";

import { ListGroup, ListGroupItem, Badge, Fa } from 'mdbreact'

import { getDurationTrack } from '../../helpers/tracks'

import './style.css'

const AlbumTracks = ({ tracks, handleOnClick, player, toggleActiveTrack }) => {
       return(
        <ListGroup className="track-list">
            {tracks.length > 0 ? tracks.map(track =>
                <ListGroupItem
                    className={toggleActiveTrack(track.id, player.playingIndex, player.isPlaying) ? "track-list-item-active": "track-list-item" }
                    onClick={handleOnClick(track.id, track.url)}
                    key={track.id} hover
                >
                    <Badge className="track-icon-toggle" color="primary" pill>
                        <Fa icon={toggleActiveTrack(track.id, player.playingIndex, player.isPlaying) ? "stop-circle" : "play-circle"} size="2x"/>
                    </Badge>
                    <div className="track-item-info">{`${track.performer} - ${track.name}`}</div>
                    <div className="track-duration" id={`audio-${track.id}`}>{getDurationTrack(track.url, `audio-${track.id}`)}</div>
                </ListGroupItem>)
                : null}
        </ListGroup>
    );
};

AlbumTracks.propTypes = {
    tracks: PropTypes.array.isRequired,
    player: PropTypes.object.isRequired,
    handleOnClick: PropTypes.func.isRequired,
    toggleActiveTrack: PropTypes.func.isRequired
};

export default AlbumTracks;

