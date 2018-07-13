import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FETCH_ALBUMS, FETCH_CATEGORIES } from '../../constants/ActionTypes';
import {
  SERVER_ALBUMS_URL,
  SERVER_CATEGORIES_URL,
} from '../../constants/ApiConstants';

import {
  fetchEntities,
  selectCategory,
  selectFavoriteAlbums,
  getMoreAlbums,
} from '../../actions/EntitiesActions';
import { onSelectNewAlbum } from '../../actions/PlayListActions';

import { getEntities, getCountAlbums, getAlbumsLength } from '../../selectors';

import Home from '../../components/HomePage';
import Spinner from '../../components/Spinner';

class HomeContainer extends Component {
  static propTypes = {
    albums: PropTypes.array.isRequired,
    albumsCount: PropTypes.number.isRequired,
    currentCountAlbums: PropTypes.number.isRequired,
    categories: PropTypes.object.isRequired,
    user: PropTypes.object,
    filtersCategory: PropTypes.array.isRequired,
    fetchEntities: PropTypes.func.isRequired,
    onSelectNewAlbum: PropTypes.func.isRequired,
    selectFavoriteAlbums: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
    getMoreAlbums: PropTypes.func.isRequired,
  };

  state = { loadingAlbums: true, loadingCategories: true };

  componentDidMount() {
    const { fetchEntities } = this.props;
    fetchEntities(FETCH_ALBUMS, SERVER_ALBUMS_URL).then(() =>
      this.setState({ loadingAlbums: false }),
    );
    fetchEntities(FETCH_CATEGORIES, SERVER_CATEGORIES_URL).then(() =>
      this.setState({ loadingCategories: false }),
    );
  }

  render() {
    const { loadingAlbums, loadingCategories } = this.state;
    if (loadingAlbums && loadingCategories) return <Spinner />;

    return <Home {...this.props} />;
  }
}

const mapStateToProps = state => ({
  albums: getCountAlbums(
    getEntities(state, 'albums'),
    state.filters.countAlbums,
  ),
  albumsCount: getAlbumsLength(state),
  currentCountAlbums: state.filters.countAlbums,
  categories: state.categories,
  user: state.session.user,
  filtersCategory: state.filters.category,
});

const mapDispatchToProps = {
  fetchEntities,
  onSelectNewAlbum,
  selectFavoriteAlbums,
  selectCategory,
  getMoreAlbums,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
