import React from 'react';

export default function Picture({ imageName, style }) {
    const imagePath = '/MSushi/' + imageName;

    return (
        <div>
            <img src={process.env.PUBLIC_URL + imagePath} 
                 alt={imageName} 
                 style={style} />   
        </div>
    );
}