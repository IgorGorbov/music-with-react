import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { search } from '../../actions/EntitiesActions';
import { userLogout } from '../../actions/UserActions';

import TopNavBar from '../../components/TopNavBar';

class TopNavBarContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    user: PropTypes.object,
    search: PropTypes.func.isRequired,
    userLogout: PropTypes.func.isRequired,
  };

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

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TopNavBarContainer);
