import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { search } from '../../actions/EntitiesActions';
import { userLogout } from '../../actions/UserActions';

import TopNavBar from '../TopNavBar';

const TopNavBarContainer = props => {
  const { location } = props;
  const { pathname } = location;

  return pathname.includes('/user/') ? null : <TopNavBar {...props} />;
};

const mapStateToProps = state => ({
  user: state.session.user,
});

const mapDispatchToProps = {
  search,
  userLogout,
};

TopNavBarContainer.propTypes = {
  location: PropTypes.object.isRequired,
  user: PropTypes.object,
  search: PropTypes.func.isRequired,
  userLogout: PropTypes.func.isRequired,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TopNavBarContainer);
