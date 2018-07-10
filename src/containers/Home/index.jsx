import React, { Component } from 'react';
import { connect } from 'react-redux'

import { SERVER_ALBUMS_URL, SERVER_CATEGORIES_URL } from '../../constants/ApiConstants';
import { FETCH_ALBUMS, FETCH_CATEGORIES } from '../../constants/ActionTypes'
import Categories from '../../containers/Categories'
import Albums from '../../containers/Albums'
import Spinner from '../Spinner'
import {
    fetchEntities,
    selectCategory,
    selectFavoriteAlbums
} from "../../actions/EntitiesActions";

import {
    onSelectNewAlbum
} from "../../actions/PlayListActions";
import { getEntities } from '../../selectors'

import './style.css'

class Home extends Component {
    state = { loadingAlbums: true, loadingCategories: true  };

    componentDidMount() {  // TODO 2 fetch
        this.props.fetchEntities(FETCH_ALBUMS, SERVER_ALBUMS_URL)
            .then( () => this.setState({ loadingAlbums: false }));
        this.props.fetchEntities(FETCH_CATEGORIES, SERVER_CATEGORIES_URL)
            .then( () => this.setState({ loadingCategories: false }));
    }
    render () {
        const { user, albums, categories, onSelectNewAlbum, selectCategory, selectFavoriteAlbums } = this.props;
        const { loadingAlbums, loadingCategories } = this.state;

        if (loadingAlbums && loadingCategories) return <Spinner />;

        return  (
            <div className="home-page">
                <Categories
                    selectFavoriteAlbums={selectFavoriteAlbums}
                    selectCategory={selectCategory}
                    categories={categories}
                    user={user}
                />
                <Albums onSelectNewAlbum={onSelectNewAlbum} albums={albums} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    albums: getEntities(state, 'albums'),
    categories: state.categories,
    user: state.session.user
});

const mapDispatchToProps = {
    fetchEntities,
    onSelectNewAlbum,
    selectFavoriteAlbums,
    selectCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

