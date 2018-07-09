import React from 'react';

import Album from '../Album'

//<div className="card-group">

const Albums = ({ albums, onSelectNewAlbum }) => {
    const { items } = albums;
    return (
    <div className="card-deck just d-flex justify-content-around">
        {items && items.length > 0 ? items.map(items => (
            <div key={items.id} onClick={() => onSelectNewAlbum(items.tracks)}>
                <Album
                    key={items.id}
                    id={items.id}
                    name={items.name}
                    performer={items.performer}
                    genre={items.genre}
                    poster={items.poster}
                />
            </div>
        )): null}

    </div>
    )
};

export  default  Albums;
