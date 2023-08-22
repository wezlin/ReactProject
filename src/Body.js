import {useState} from 'react';
import Picture from './Picture';
import FontAwesomeIcon from './FontAwesomeIcon';
import Bottom from './Bottom';
export default function Body(){

    return (
        <div>
            <Top/>
            <Middle/>
            <Middle2/>
            <Bottom1/>
            <Bottom/>
        </div>
    )
}



function Top() {

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
                <source src="https://sushiprivatecater.com/wp-content/uploads/2017/12/Private-sushi-catering-website.mp4" 
                    type="video/mp4" />
                </video>
            </div>
            <p style={innerTitleMain}>"THE ONLY SUSHI SERVICE WITH EXCLUSIVE QUALITY"</p>
        </div>
    );
}

function Middle(){

    
    return (

        <div>
            <div className="middle2Title">
                <p >OUR SERVICES</p>
                <Picture imageName={"heading-img.png"}/>
            </div>
            
            <div style={{
                 margin: "0 auto",  
                 display: "flex",
                 justifyContent: "space-between", 
                 marginLeft: "2vw",
                 marginRight: "2vw",
                 gap: "2vw",
                }}>
                <MiddleObject imageName={"service-img1.jpg"} stringA={"Weddings"} stringB={"Make your wedding unforgettable with the best wedding event catering in Los Angeles, Calabasas, Irvine, Santa Monica, Laguna Niguel, Bay Area, and Vancouver Canada."}/>
                <MiddleObject imageName={"service-img2.jpg"} stringA={"Private Events"} stringB= {"At M Sushi Catering, we understand that every element of an incredible party or private event must be spectacular – especially the food!"}/> 
                <MiddleObject imageName={"service-img3.jpg"} stringA={"Corporate Events"} stringB= {"There’s no better way to dazzle your supervisors and boost employee morale than offering one-of-a-kind sushi catering at your next corporate event."}/>
                <MiddleObject imageName={"service-img4.jpg"} stringA={"Large Event Planning"} stringB= {"M Sushi Catering is scaled to handle large events where multiple caterings are required. We’re happy to collaborate with large event planners."}/> 
            </div>
            <Button inputString={"Read more"}/>

            <div className="middle2Title">
                <p>ABOUT M'S SUSHI CATERING</p>
                <Picture imageName={"heading-img.png"}/>
            </div>            

            <YoutubeVideo/>
            <div className="middle2Title">
                <p>GALLERY</p>
                <Picture imageName={"heading-img.png"}/>
            </div>
            <MiddleGalleryImage/>

            <div className="middle2Title">
                <p>WHY CHOOSE M'S?</p>
                <Picture imageName={"heading-img.png"}/>
            </div>
            <div className="middle2Content">
                <p>From service to presentation to flavor, M Sushi Catering does it all. With over two decades of experience serving Los Angeles, Calabasas, Irvine, Santa Monica, Laguna Niguel, all of Southern California, Bay Area, and Vancouver Canada, you can trust our expertise.</p>
                <p> <FontAwesomeIcon iconName={"star"} style={{ color: "#e7b101" }} />We gather fresh fish early in the morning of the day of each event and prepare it to your custom menu order.</p>
                <p> <FontAwesomeIcon iconName={"star"} style={{ color: "#e7b101" }} />We have the best collection from our (exclusive) seafood suppliers offering you beyond restaurant quality.</p>
                <p> <FontAwesomeIcon iconName={"star"} style={{ color: "#e7b101" }} />We use the latest technology equipment to make our sushi rice perfectly just like top sushi place in Tokyo.</p>
                <p> <FontAwesomeIcon iconName={"star"} style={{ color: "#e7b101" }} />We design our sushi to create the most visual appeal.</p>
                <p> <FontAwesomeIcon iconName={"star"} style={{ color: "#e7b101" }} />We dress our sushi with the crisp citrusy sauces that bring out the natural flavor of the fish, instead of hiding it under heavy mayos.</p>
                <p> <FontAwesomeIcon iconName={"star"} style={{ color: "#e7b101" }} />We finish with the best part &ndash delivering our premium sushi to you with a smile.</p>
                <p>Jackson Mou's innovative and creative dishes are unlike any dishes you will find anywhere else in the world. He's been experimenting since the early 90s and his vision is constantly evolving.</p>
                <p>Discover what delicious dish he will dream up just for you. If you are in Los Angeles,</p>
                <p>Calabasas, Irvine, Santa Monica, Laguna Niguel, Bay Area, and Vancouver Canada, and in need of a catering partner for your party, we got you covered.</p>
            </div>
            <Button inputString={"Reserve Now"} />
            
        </div>
    )
}
function Button({inputString}){
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };


    const buttonStyle = {
        padding: "10px 40px",

        border: "1px solid #e7b101",
        marginTop: "20px",
        display: "table",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: isHovered ? '#e7b101' : 'white',
        color: isHovered ? "white":"#222", 
        fontSize: "14px",
        lineHeight: "1",
        transition: "background-color 0.3s cubic-bezier(0.42, 0, 0.58, 1)",
       };

 


    return (
            <div>
                <button style= {buttonStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                >
                {inputString}
                </button>
            </div>
            );
}

function MiddleObject({imageName,stringA, stringB}){
    

    const middleObjectStyle = {
        maxWidth: "24vw",
        width: "100%",

    }


    
    const picStyle = {
        display: "flex",
        borderRadius: "50%",
        marginBottom: "10%",
        marginTop: "10%",
        marginLeft : "auto",
        marginRight: "auto",  
        border: "1px solid #FFB612",
        boxShadow: "0px 8px 8px #cccc",
        maxWidth: "95%",

    };


    const stringStyle1 = {
        fontSize:"21px",
	    textAlign:"center",
	    color:"#FFB612",
	    // fontWeight:"bold",
        // fontFamily: "AcherusGrotesque-Regular",
    };
    const stringStyle2 = {
        fontSize: "14px",
        marginTop: "10px",
        padding: "10px 10px",
        // textAlign: "center",
        lineHeight: "26px",
        minHeight: "100px",
        textAlign: "justify",
    };


    return (
        <div style={middleObjectStyle}>
            <Picture imageName={imageName} 
                         style={picStyle} />
            <div style={stringStyle1}>
                {stringA}
            </div>
            <div style={stringStyle2}>
                {stringB}
            </div>
        </div>
    )
}


function YoutubeVideo(){
    const utubeStyle = {
        display: "flex",
        marginLeft : "10px",
        marginRight: "10px",
        gap: "5vw",
        alignItems: "flex-start "
    };

    return (
        <div style={utubeStyle}>
            <div class="wpb_wrapper">
	            <div class="wpb_video_widget wpb_content_element vc_clearfix   vc_video-aspect-ratio-169 vc_video-el-width-100 vc_video-align-center">
		            <div class="wpb_wrapper">
			            <div class="wpb_video_wrapper">
                            <iframe width="640" 
                                    height="360" 
                                    src="https://www.youtube.com/embed/videoseries?list=PL46iD8jLRJ3tTLHCH0StcUvKOvfE-F6qX" 
                                    frameborder="0" 
                                    allow="autoplay; encrypted-media" 
                                    allowfullscreen=""
                                    title="introduce">
                            </iframe>
                        </div>
		            </div>
	            </div>
            </div>
            <p style={{marginRight: "50px", textAlign: "justify"}}>
                <div>Welcome to the cutting edge of sushi. M Sushi Catering isn't just Southern California's premier sushi catering service. It's an unforgettable sushi experience.</div>
                <p>We do sushi the way it was meant to be done. We create original sauces with ingredients straight from Japan using equipment imported from Japan. And our cuts of savory fish come from the right fish in the right region during the right season.</p>
                <p>M Sushi Catering was founded by Jackson Mou, Executive Chef, on the philosophy that fine sushi is an art and a science.</p>
                <p>Jackson is an expert in both Western and Asian cuisine, blending flavors that inspire unique new plates. Having worked in 5 star restaurants for over two decades, Jackson takes sushi to the next level. Every dish is visually stunning. Every bite melts in your mouth.</p>
                <p>Our team of chefs offers extraordinary service to you and your family wherever you are in Los Angeles, Calabasas, Irvine, Santa Monica, Laguna Niguel, all of Southern California, Bay Area, and Vancouver, Canada.</p>
                <p>Whether you're having a wedding, party, or corporate event, or just want to have a sushi party, your guests will be impressed with our culinary display.</p>
                <p>We want you to feel a part of our family. That's why we offer friendly service and the finest, freshest sushi to any catering or sushi party event.</p>
            </p>

    
        </div>
    )
}



function MiddleGalleryImage() {
    const galleryStyle = {
        width: "90%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "0 auto",
    };

    const scrollContainerStyle = {
        width: "100vw",
        height: "100vh", 
        overflow: "auto",
        display: "flex",
        marginLeft : "auto",
        marginRight: "auto",
    };

    const pictureStyle = {
        width: "45vw",
        height: "auto",
        flexBasis: "45%", 
        marginTop : "-5px", 
    };


    const images = [
        "gallery-image1-4-2-1-400x284.jpg",
        "gallery-image2a-1-400x284.jpg",
        "gallery-image3a-1-400x284.jpg",
        "gallery-image4-4-400x284.jpg",
        "gallery-image5-3-400x284.jpg",
        "gallery-image6-3-400x284.jpg",
        "gallery-image7-3-400x284.jpg",
        "gallery-image8-3-400x284.jpg",
    ];

    return (
        <div style={scrollContainerStyle}>
            <div style={galleryStyle}>
                {images.map((imageName) => (
                    <Picture key={imageName} imageName={imageName} style={pictureStyle} />
                ))}
            </div>
        </div>
    )
}

function Middle2(){
    const Middle2Style = {
        backgroundImage: "url('/MSushi/Middle2bg-image.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        backgroundSize: "cover",
        color: "white",
        marginTop: "60px",
    };


    return (
        <div  className= "middle2"  style={Middle2Style}>
            <div className="middle2Title">
                <div >AN EXTRAORDINARY SUSHI EXPERIENCE</div>
                <Picture imageName={"heading-img1.png"} />
            </div>
            <div className="middle2Content">
                <p>Chef Jackson Mou often says, “Sushi should melt in your mouth like ice cream.”</p>
                <p>He understands that you may have had unfortunate sushi experiences in the past. The fish was chewy. The sauce overpowered the fish. There was more rice than sashimi.</p>
                <p>Jackson takes great pride in his ability to turn even the pickiest person into a sushi fanatic. Curious?</p>
                <p>Try M Sushi Catering for your next event.</p>
            </div>
        </div>
    )
}

function Bottom1(){
    const Bottom1Style = {
        backgroundImage: `url('/MSushi/review-bg.jpg')`,
        backgroundRepeat: 'no-repeat',
        display : "flex",
        justifyContent: "center",
        position: "relative",
    };
    const BottomStringStyle ={
        width: "50%",
        fontSize: "54px",
        paddingTop: "15px",
        color: "white", 
    }
    return (
        <div className="bottom1" style={Bottom1Style}>
            <p style={BottomStringStyle}>WRITE A REVIEW</p>
            <Picture imageName={"review-yelp.png"}/>
            <Picture imageName={"google-review.png"}/>
        </div>
    )
}
