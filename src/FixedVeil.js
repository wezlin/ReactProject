import React, { useState, useEffect } from 'react';

export default function FixedVeil() {
 
  const [zIndex, setZIndex] = useState(1000);
  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 1)"); 



  useEffect(() => {
    setZIndex(1000);
    
    const opacityTimeoutId = setTimeout(() => {
      setBackgroundColor("rgba(0, 0, 0, 0)"); 
    }, 500); 

    const timeoutId = setTimeout(() => {
      setZIndex(-1000);
    }, 1500);

    return () => {
      clearTimeout(opacityTimeoutId);
      clearTimeout(timeoutId);
    };
  }, []);

  const veilHideStyle = {
    position: 'fixed', 
    zIndex: zIndex,
    width: '100vw',
    height: '100vh',
    backgroundColor: backgroundColor,
    transition: 'background-color 0.3s ease-in-out', 
  };

  return <div style={veilHideStyle}></div>;
}