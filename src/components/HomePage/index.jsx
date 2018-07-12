import React from 'react';
import PropTypes from 'prop-types';

import Categories from '../Categories/index';
import Albums from '../Albums/index';
import Modal from '../../containers/Modal/index';

import './style.css';

const Home = ({
  user,
  albums,
  categories,
  filtersCategory,
  onSelectNewAlbum,
  selectCategory,
  selectFavoriteAlbums,
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
      <Albums onSelectNewAlbum={onSelectNewAlbum} albums={albums} />
      {!user && <Modal />}
    </div>
  );
};

Home.propTypes = {
  albums: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  filtersCategory: PropTypes.array.isRequired,
  user: PropTypes.object,
  onSelectNewAlbum: PropTypes.func.isRequired,
  selectFavoriteAlbums: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
};

export default Home;
