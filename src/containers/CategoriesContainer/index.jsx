import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onPlayNewTrack } from "../../actions/PlayerActions";
import Categories from '../../components/Categories'

const CategoriesContainers = props => props.categories ? <Categories {...props} /> : null;

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = {
    onPlayNewTrack,
};

CategoriesContainers.propTypes = {
    categories: PropTypes.array.isRequired,
    onPlayNewTrack: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainers);
