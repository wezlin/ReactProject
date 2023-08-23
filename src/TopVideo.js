

export default function TopVideo({StringTitle, VideoURL}) {

    const videoContainerStyle = {
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
      };
      
      const videoStyle = {
        width: '100%',
        maxHeight: "100vh",
        overflow: 'hidden',
        objectFit: 'cover',
      };
    const innerTitleMain = {
        position: "absolute",
        top: "300px",
        width: "65%",
        textAlign: "center",
        textTransform: "uppercase",
        left: "50vw",
        transform: "translate(-50%, 0)",
        opacity: "0.8",
        color: "#fff",
        fontSize: "48px",
        textShadow: "5px 5px 10px #000",

        marginTop :"20px",
        marginBottom: "10px",
        fontWeight: "500",
        fontHeight: "1.1"
    };
    

    return (
        <div >
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
            <p style={innerTitleMain}>{StringTitle}</p>
        </div>
    );
}