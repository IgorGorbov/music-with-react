import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import TopNavBar from '../../components/TopNavBar';

import { search } from '../../actions/EntitiesActions';
import { userLogout } from '../../actions/UserActions';

class TopNavBarContainer extends Component {
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
    const { location } = this.props;
    const { pathname } = location;

    return pathname.includes('/user/') ? null : <TopNavBar {...this.props} />;
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
});

const mapDispatchToProps = {
  search,
  userLogout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNavBarContainer);
