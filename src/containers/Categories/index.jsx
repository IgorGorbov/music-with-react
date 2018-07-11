import React from 'react';
import PropTypes from 'prop-types';

import './style.css'


const Categories = ({ user, categories, filtersCategory, selectCategory, selectFavoriteAlbums }) => {
    if (categories.items.length === 0) return null;
    return (
        <div className="categories">
            {categories.items.map(category =>
                <label key={ category.id } className="container" >
                    <input
                        type="checkbox"
                        defaultChecked={ filtersCategory.includes(category.id) }
                        onClick={ () => selectCategory(category.id)
                    }/>
                    <span className="checkmark">{category.name}</span>
                </label>
            )}
            {user ?
                <label className="container">
                    <input type="checkbox" onClick={ () => selectFavoriteAlbums() }/>
                    <span className="checkmark">favorite</span>
                </label>
            : null}

        </div>
    )
};

Categories.propTypes = {
    categories: PropTypes.object.isRequired,
    filtersCategory: PropTypes.array.isRequired,
    user: PropTypes.object,
    selectFavoriteAlbums: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
};

export default Categories;
