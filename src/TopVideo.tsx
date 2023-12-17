

interface TopVideoProps{
    StringTitle: string,
    VideoURL : string;
}

const TopVideo : React.FC<TopVideoProps> = ({StringTitle, VideoURL}) => {

    const topContainerStyle : React.CSSProperties= {
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
        height: '340px',
        top : '0',
        // backgroundColor : 'pink',
    }

    const videoContainerStyle : React.CSSProperties= {
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
        height: '340px',
        // backgroundColor : 'gray',
      };
      
      const videoStyle : React.CSSProperties = {
        width: '100%',
        maxHeight: "100vh",
        overflow: 'hidden',
        objectFit: 'cover',
        // opacity: '0',
      };
      const innerTitleContainer : React.CSSProperties = {
        width: '100%', // Adjust the width if needed
        height: 'auto', // Adjust the height if needed
        backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        

      }
    const innerTitleMain : React.CSSProperties = {

        // backgroundColor: "red",
        textAlign: "center",
        justifyContent: "center",
        display: 'flex',
        textTransform: "uppercase",
        opacity: "0.8",
        fontSize: "48px",
        fontWeight: "500",
        // lineHeight: "1.1",
        textShadow: "5px 5px 10px #000",
        color: "#fff",
        position: "absolute",
        marginRight: "auto",
        marginLeft: "auto",
        width: "65%",
        top: "120px", 
  

    };
    

    return (
        <div style = {topContainerStyle}>
            <div style = {videoContainerStyle}>
                <video 
                    playsInline 
                    autoPlay 
                    loop 
                    muted 
                    style={videoStyle}
                >
                <source src={VideoURL} 
                    type="video/mp4" />
                </video>
            </div>
            <div style= {innerTitleContainer}>
                <p style={innerTitleMain}>{StringTitle}</p>
            </div>
        </div>
    );
}

export default TopVideo ;