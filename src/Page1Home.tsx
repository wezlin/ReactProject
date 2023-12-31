import {useState} from 'react';
import Picture from './Picture';
import FontAwesomeIcon from './FontAwesomeIcon';
import Bottom from './Bottom';
import Button from './Button';
import TopVideo from './TopVideo';


interface Page1HomeProps{
    onButtonClick : Function;
}

const Page1Home : React.FC<Page1HomeProps>= ({ onButtonClick }) => {
    return (
        <div>
            <TopVideo 
                StringTitle='"THE ONLY SUSHI SERVICE WITH EXCLUSIVE QUALITY"'  
                VideoURL="https://sushiprivatecater.com/wp-content/uploads/2017/12/Private-sushi-catering-website.mp4"
            />
            <Middle onButtonClickMiddle={onButtonClick} />
            <Middle2/>
            <Bottom1/>
        </div>
    )

}


interface MiddleProps{
    onButtonClickMiddle : Function;
}
const Middle : React.FC<MiddleProps> = ({onButtonClickMiddle}) => {

    
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
            <Button inputString={"Read more"} 
                    handleMouseClick={onButtonClickMiddle} 
                    label={"Services"} 
                    />

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
            <Button inputString={"Reserve Now"} 
                    handleMouseClick={onButtonClickMiddle} 
                    label={"Menu"} 
            />
            
        </div>
    )
}



interface MiddleObjectProps{
    imageName : string,
    stringA : string,
    stringB : string,
}

const MiddleObject : React.FC<MiddleObjectProps> = ({imageName,stringA, stringB}) =>{
    

    const middleObjectStyle : React.CSSProperties = {
        maxWidth: "24vw",
        width: "100%",

    }


    
    const picStyle : React.CSSProperties = {
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


    const stringStyle1 : React.CSSProperties = {
        fontSize:"21px",
	    textAlign:"center",
	    color:"#FFB612",
	    // fontWeight:"bold",
        // fontFamily: "AcherusGrotesque-Regular",
    };
    const stringStyle2: React.CSSProperties = {
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



const YoutubeVideo = ()=>{
    const utubeStyle : React.CSSProperties= {
        display: "flex",
        marginLeft : "10px",
        marginRight: "10px",
        gap: "5vw",
        alignItems: "flex-start "
    };

    return (
        <div style={utubeStyle}>
            <div className="wpb_wrapper">
	            <div className="wpb_video_widget wpb_content_element vc_clearfix   vc_video-aspect-ratio-169 vc_video-el-width-100 vc_video-align-center">
		            <div className="wpb_wrapper">
			            <div className="wpb_video_wrapper">
                            <iframe width="50%" 
                                    height="auto" 
                                    src="https://www.youtube.com/embed/videoseries?list=PL46iD8jLRJ3tTLHCH0StcUvKOvfE-F6qX" 
                                    frameBorder={0} 
                                    allow="autoplay; encrypted-media" 
                                    allowFullScreen
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



const MiddleGalleryImage = () =>{
    const galleryStyle : React.CSSProperties = {
        width: "90%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "0 auto",
    };

    const scrollContainerStyle  : React.CSSProperties= {
        width: "100vw",
        height: "100vh", 
        overflow: "auto",
        display: "flex",
        marginLeft : "auto",
        marginRight: "auto",
    };

    const pictureStyle  : React.CSSProperties= {
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

const Middle2 = ()=> {
    const Middle2Style : React.CSSProperties = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/MSushi/Middle2bg-image.jpeg)`,
        
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

const Bottom1 = ()=>{
    const Bottom1Style : React.CSSProperties = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/MSushi/review-bg.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display : "flex",
        justifyContent: "center",
        position: "relative",
        width: "100%",
        height: "100%",
        // position: "relative",
        // backgroundColor: "orange",
    };
    const BottomStringStyle  : React.CSSProperties={
        fontSize: "50px",
        // paddingTop: "15px",
        color: "white", 
        textAlign: "center",
    };
    const Bottom1Left  : React.CSSProperties= {
        width: "50%",
        // height:"auto",
        // backgroundColor : "pink",
        zIndex: "10",
    };
    const Bottom1Right : React.CSSProperties={
        display: "flex",
        width: "50%",
        justifyContent: "center", // x軸置中
        // backgroundColor : "blue",
        zIndex: "10",
        gap : "10px",
        marginTop: "auto",
        marginBottom: "auto",
    };

    return (
        <div className="bottom1" style={Bottom1Style}>
            
            <div style= {Bottom1Left}>
                <p style={BottomStringStyle}>WRITE A REVIEW</p>
            </div>
            <div style= {Bottom1Right}>
                <Picture imageName={"review-yelp.png"}  style={{width:"100%", height: "auto"}}/>
                <Picture imageName={"google-review.png"} style={{width:"100%", height: "auto"}}/>
            </div>
        </div>
    )
}



export default Page1Home;