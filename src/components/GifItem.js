import React from 'react';

const GifItem = (props) => {
    console.log(props.gif);
    return (
        <li>
            <img src={props.gif.images.downsized.url} />
        </li>
    )
};

export default GifItem;
