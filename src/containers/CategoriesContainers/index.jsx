import React, { Component } from 'react';
import { connect } from 'react-redux';

// import PropTypes from 'prop-types';

import Categories from '../../containers/Categories'
import { getCurrentTrack } from '../../selectors'

import {
    onPlayNewTrack,
} from "../../actions/PlayerActions";

class CategoriesContainers extends Component {
    // static propTypes = {
    //     fetchData: PropTypes.func,
    //     loadMoreTracks: PropTypes.func,
    //     loadNewPlayingIndex: PropTypes.func,
    // };

    render() {
        const { categories } = this.props;
        if (!categories) return null;

        return <Categories {...this.props} />
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = {
    onPlayNewTrack,
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainers);
