import React from 'react';

import Album from '../Album'

//<div className="card-group">

const Albums = ({ albums }) => {
    const { items } = albums;
    return (
    <div className="card-deck just d-flex justify-content-around">
        {items && items.length > 0 ? items.map(items => (
            <Album
                key={items.id}
                name={items.name}
                performer={items.performer}
                genre={items.genre}
                poster={items.poster}
                tracks={items.tracks}
            />
        )): null}

    </div>
    )
};

export  default  Albums;
