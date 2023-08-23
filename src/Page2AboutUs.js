import {useState} from 'react';
import Picture from './Picture';
import FontAwesomeIcon from './FontAwesomeIcon';
import Button from './Button';   
import TopVideo from './TopVideo';
export default function AboutUs(){
    
    return (
        <div>
            <TopVideo 
                StringTitle="ABOUT US"
                VideoURL="https://sushiprivatecater.com/wp-content/uploads/2017/12/ShortVideoclip-catering.mp4"
            />
            <Middle/>
        </div>
    )
}

function Middle(){

    
    return (

        <div>

            <Picture imageName={"rsz_client-img.jpg"}/>
            
            <div className="middle2Content">
                <p>Quality Japanese Food Catering in Los Angeles, Calabasas, Irvine, Santa Monica, Laguna Niguel, all of Southern California, and Vancouver Canada</p>
                <p>Jackson Mou has 20 years of experience working in 5-star restaurants. When he was a teenager, Jackson worked as a sushi apprentice at the prestigious Hatsuhana Kaiseki restaurant in New York. At that time, Hatsuhana was among the top ten Kaiseki cuisine restaurants in New York. His experience there drove his passion as he learned and perfected his art as a Kaiseki chef.</p>
                <p>After Hatsuhana, Jackson continued working in 5-star restaurants, gaining so much respect for his expertise that he began consulting for high class eateries. He worked hard training the finest restaurants on topics like menu development, management, and educating rising sushi chefs. He has since helped over 150 restaurants successfully grow. In addition to Japanese, Jackson became an expert in French, Spanish, and Italian cuisine. This has become a staple aspect of his creative culinary design as he mixes the most refined tastes of each style in with his Japanese fusion. He’s received notoriety for his signature sushi designs that can’t be found anywhere else in the world.</p>
                <p>Jackson Mou founded M’s Sushi Catering in Los Angeles, Calabasas, Irvine, Santa Monica, Laguna Niguel and all of Southern California, with the idea that fine sushi is an experience that should be shared with family and friends through the quality japanese food catering services. Complete with sauces that enliven the flavor of fish, you now have the opportunity to get the best japanese food catering service with only freshest cuts of fish, caught in their natural regions at the perfect time in their life cycle, catered to your next party or event wherever you are in Los Angeles, Calabasas, Irvine, Santa Monica, Laguna Niguel and all of Southern California.</p>
            </div>
            <Button inputString={"AS FEATURED IN VOYAGELA"}/>
            <YoutubeVideo/>


            <Picture imageName={"IMG_7696-683x1024.jpg"}/>

            <div className="middle2Content">
                <p>Quality Japanese Food Catering in Los Angeles, Calabasas, Irvine, Santa Monica, Laguna Niguel, all of Southern California, and Vancouver Canada</p>
                <p>Chef Kai started his sushi journey 15 years ago when he was rigorously trained by the best sushi chefs from a top sushi restaurant in Los Angles.</p>
                <p>Later, he moved to Florida and Colorado, where he learned about local foods and helped several local sushi restaurants improve their sushi service.</p>
                <p>After years of moving around and helping many restaurants succeed, he decided to come back to where it started and settled down in LA.</p>
                <p>In 2016, Kai encountered M’sushi Private Catering, a sushi private catering company that uses only the finest and freshest ingredients and brings the best sushi experience to its clients. Kai chimed in instantly with the philosophy of M’sushi and became a core member of the company very fast.</p>
                <p>Now, Kai is fully living his sushi dream and feels happy to rise early in the morning every day to hand pick the best fish in the fish market to serve to his clients at the day’s event. For Kai, best quality sushi comes from the best ingredients, and nothing beats the moment when a client truly enjoys the sushi.</p>  
            </div>
            
        </div>
    )
}





function YoutubeVideo(){
    const utubeStyle = {
        display: "flex",
        justifyContent: "center",
    };

    return (
        <div style={utubeStyle}>
            <div class="wpb_wrapper">
                <div class="wpb_video_widget wpb_content_element vc_clearfix   vc_video-aspect-ratio-169 vc_video-el-width-100 vc_video-align-center">
                    <div class="wpb_wrapper">
                        <div class="wpb_video_wrapper">
                            <iframe width="640" 
                                    height="480" 
                                    src="https://www.youtube.com/embed/Cunn3Y7MDrA?feature=oembed" 
                                    frameborder="0" 
                                    allow="autoplay; encrypted-media" 
                                    gesture="media" 
                                    allowfullscreen=""
                                    title="introduce">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
    
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