import React from 'react';

const GifItem = (props) => {
    console.log(props.gif);
    return (
        <div  className="gif-item" onClick={()=>props.onGifSelect(props.gif)}>
            <img src={props.gif.images.downsized.url} />
        </div>
    )
};

export default GifItem;
