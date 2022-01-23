import React from "react";
import '../styles/Image.css';

const Image = ({src ,width, height}) => {

    return (
        <img className="image" 
        style={{
            width:`${width}`,
            height:`${height}`
        }}
        src={src} />
    );
}

export default Image;