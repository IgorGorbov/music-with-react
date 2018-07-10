import React from 'react';

import './style.css'

const Categories = ({ user, categories, selectCategory, selectFavoriteAlbums }) => {
    if (categories.items.length === 0) return null;
    return (
        <div className="categories">
            {categories.items.map(category =>
                <label key={ category.id } className="container" >
                    <input type="checkbox" onClick={ () => selectCategory(category.id) }/>
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

export default Categories;
