import React from 'react';
import PropTypes from 'prop-types';

import Categories from '../Categories/index';
import Albums from '../Albums/index';
import Modal from '../../containers/Modal/index';

import './style.css';

const Home = ({
  user,
  albums,
  albumsCount,
  currentCountAlbums,
  categories,
  filtersCategory,
  onSelectNewAlbum,
  selectCategory,
  selectFavoriteAlbums,
  getMoreAlbums,
}) => {
  return (
    <div className="home-page">
      <Categories
        selectFavoriteAlbums={selectFavoriteAlbums}
        selectCategory={selectCategory}
        categories={categories}
        filtersCategory={filtersCategory}
        user={user}
      />
      <Albums
        getMoreAlbums={getMoreAlbums}
        onSelectNewAlbum={onSelectNewAlbum}
        albums={albums}
        albumsCount={albumsCount}
        currentCountAlbums={currentCountAlbums}
      />
      {!user && <Modal />}
    </div>
  );
};

Home.propTypes = {
  albums: PropTypes.array.isRequired,
  albumsCount: PropTypes.number.isRequired,
  currentCountAlbums: PropTypes.number.isRequired,
  categories: PropTypes.object.isRequired,
  filtersCategory: PropTypes.array.isRequired,
  user: PropTypes.object,
  onSelectNewAlbum: PropTypes.func.isRequired,
  selectFavoriteAlbums: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
  getMoreAlbums: PropTypes.func.isRequired,
};

export default Home;
