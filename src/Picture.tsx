import React from 'react';


interface PictureProps {
    imageName: string;
    style?: React.CSSProperties;
}


const  Picture: React.FC<PictureProps> = ({ imageName, style}) => {
    const imagePath : string= '/MSushi/' + imageName;

    return (
        <div>
            <img src={process.env.PUBLIC_URL + imagePath} 
                 alt={imageName} 
                 style={style} />   
        </div>
    );
}

export default Picture;