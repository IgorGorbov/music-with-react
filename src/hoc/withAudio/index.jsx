import React, { Component } from 'react';


const Audio = (InnerComponent) => {
    class AudioComponent extends Component {
        constructor(props) {
            super(props);
            this.audioElement = null;

            this.onPause = this.onPause.bind(this);
            this.onPlay = this.onPlay.bind(this);
            this.togglePlay = this.togglePlay.bind(this);
            this.onLoadedMetadata = this.onLoadedMetadata.bind(this);
            this.onTimeUpdate = this.onTimeUpdate.bind(this);
            this.changeCurrentTime = this.changeCurrentTime.bind(this);
            this.onVolumeChange = this.onVolumeChange.bind(this);
            this.changeVolume = this.changeVolume.bind(this);
            this.onEnded = this.onEnded.bind(this);
            this.toggleMuted = this.toggleMuted.bind(this);
        }

        componentDidUpdate(prevProps) {
            const { audioElement, props } = this;
            const { trackUrl } = props;
            if (prevProps.trackUrl !== trackUrl) {
                audioElement.play();
            }
        }

        onLoadedMetadata() {
            const { audioElement, props } = this;
            const { onLoadedMetadata } = props;
            onLoadedMetadata(Math.floor(audioElement.duration));
        }

        onPlay() {
            const { onPlay } = this.props;
            onPlay();
        }

        onPause() {
            const { onPause } = this.props;
            onPause();
        }

        onEnded() {
            const { playNextSong } = this.props;
            playNextSong();
            this.togglePlay()
        }

        togglePlay() {
            const { trackUrl } = this.props;
            if (!trackUrl) return;

            const { audioElement } = this;

            audioElement.paused ?
                audioElement.play() :
                audioElement.pause();
        }

        onTimeUpdate() {
            const { audioElement, props } = this;
            const { onTimeUpdate } = props;
            onTimeUpdate(Math.floor(audioElement.currentTime));
        }

        changeCurrentTime(currentTime) {
            this.audioElement.currentTime = currentTime;
        }

        onVolumeChange() {
            const { audioElement, props } = this;
            const { muted, volume } = audioElement;
            const { onVolumeChange } = props;
            onVolumeChange(muted, volume);
        }

        changeVolume(volume) {
            const { audioElement } = this;
            audioElement.muted = false;
            audioElement.volume = volume;
        }

        toggleMuted() {
            const { audioElement } = this;
            const { muted } = audioElement;
            audioElement.muted = !muted;
        }

        render() {
            const { trackUrl } = this.props;

            return (
                <div>
                    <audio
                        id="audio"
                        onPause={this.onPause}
                        onPlay={this.onPlay}
                        onEnded={this.onEnded}
                        onLoadedMetadata={this.onLoadedMetadata}
                        onTimeUpdate={this.onTimeUpdate}
                        onVolumeChange={this.onVolumeChange}
                        ref={(node) => { this.audioElement = node; }}
                        src={trackUrl}
                    />
                    <InnerComponent
                        {...this.state}
                        {...this.props}
                        togglePlay={this.togglePlay}
                        changeCurrentTime={this.changeCurrentTime}
                        changeVolume={this.changeVolume}
                        toggleMuted={this.toggleMuted}
                    />
                </div>
            );
        }
    }

    return AudioComponent;
};


export default Audio;
