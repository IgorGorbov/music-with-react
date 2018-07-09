import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import { FETCH_ALBUMS } from '../../constants/ActionTypes'
import Albums from '../../containers/Albums'
import {
    fetchEntities,
} from "../../actions/EntitiesActions";

import {
    onSelectNewAlbum
} from "../../actions/PlayListActions";


class Home extends Component {
    componentDidMount() {
        this.props.fetchEntities(FETCH_ALBUMS)
    }
    render () {
        const { albums, onSelectNewAlbum } = this.props;
        return  (
            <Fragment>
                <Albums onSelectNewAlbum={onSelectNewAlbum} albums={albums} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    albums: state.albums
});

const mapDispatchToProps = {
    fetchEntities,
    onSelectNewAlbum
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

