import {useState} from 'react';
import Picture from './Picture';
import FontAwesomeIcon from './FontAwesomeIcon';
import Bottom from './Bottom';
import TopVideo from './TopVideo'

export default function Page3Services(){

    return (
        <div>
            <TopVideo 
                StringTitle="SERVICES"  
                VideoURL="https://sushiprivatecater.com/wp-content/uploads/2017/12/shortvideo-catering2.mp4"
            />
            <Middle/>
        </div>
    )

}


function Middle(){

    const middleStyle = {
        width: "90vw",
        // margin: "0 auto",  
       //  display: "flex",
        justifyContent: "space-between", 
        // marginLeft: "auto",
        // marginRight: "auto",
        // gap: "2vw",
    }
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
        <div>
            <div style={middleStyle}>
                <div style={{display:"flex", gap :"10px",}}>
                    <div>
                        <MiddleObject imageName={"service-page1a.jpg"} stringA={"Weddings"} />
                        <StringBoxA/>
                    </div>
                    <div>
                        <MiddleObject imageName={"Japanese-foods.jpg"} stringA={"Private Events"} /> 
                        <StringBoxB/>
                    </div>
                </div>
                <div style={{display:"flex", gap :"10px",}}>
                    <div>
                        <MiddleObject imageName={"service-page3.jpg"} stringA={"Corporate Events"}/>
                        <StringBoxC/>
                    </div>
                    <div>
                        <MiddleObject imageName={"service-page4.jpg"} stringA={"Large Event Planning"}/> 
                        <StringBoxD/>
                    </div>                
                </div>
            </div>

       
            <div className="middle2Content">
                <p>*Please ask us if you need help with venue information*</p>
            </div>  
        </div>
    )
}

function MiddleObject({imageName,stringA, inputStringBox }){
    

    const picStyle = {
        // display: "flex",
        // marginBottom: "10%",
        marginTop:"10%",
        marginLeft : "auto",
        marginRight: "auto",  
        maxWidth: "49vw",

    };


    const stringStyle1 = {
        fontSize:"21px",
	    textAlign:"center",
	    color:"#000",
	    // fontWeight:"bold",
        // fontFamily: "AcherusGrotesque-Regular",
    };


    return (
        <div>
            <Picture imageName={imageName} 
                         style={picStyle} />
            <div style={stringStyle1}>
                {stringA}
            </div>
        </div>
    )
}




function StringBoxA(){
    return (
        <div>
            <div>Make your wedding unforgettable with the best wedding event catering in Los Angeles, Calabasas, Irvine, Santa Monica, Laguna Niguel, Bay Area, and Vancouver Canada.</div>
            <div>Your wedding catering should be as refined and elegant as the bride. Delight your guests with visually delicious, melt-in-your-mouth sushi catering.</div>
            <div>M's Sushi Catering has been making joyful days brighter for many years in Los Angeles, Calabasas, Irvine, Santa Monica, Laguna Niguel, Bay Area, and Vancouver Canada.</div>
            <div>Trust Jackson Mou's family of sushi chefs with your:
                <li>Catering Planning</li>
                <li>Pricing</li>
                <li>Front House Operations</li>
                <li>Health</li>
                <li>Hygiene</li>
                <li>Temperature Regulated Food Storage</li>
            </div>
        </div>
    )
}


function StringBoxB(){
    return (
        <div>
            <div>At M's Sushi Catering, we understand that every element of an incredible party or private event must be spectacular – especially the food!</div>
            <div>If you're looking to impress your guests with the finest cuisine, look no further. Jackson Mou's team of experienced sushi chefs will surprise your guests with artfully created sushi specialties that you simply can't find anywhere else.</div>
            <div>Our sushi is caught fresh in its natural habitat and prepared the day of your event. Our fresh ingredients, combined with our yuzu or organic light soy sauce imported directly from Japan, ensure that our savory sushi tastes as incredible as it looks.</div>
            <div>From design to service to taste, M's Sushi Catering will make you look good.</div>
        </div>
    )
}


function StringBoxC(){
    return (
        <div>
            <div>There's no better way to dazzle your supervisors and boost employee morale than offering one-of-a-kind sushi catering at your next corporate event.</div>
            <div>M's Sushi Catering offers full service catering or sushi platters made to order. Customize your menu to create unique options to suit all palettes. Surprise your business partners with a taste of fine art and culture.</div>
            <div>Our team of dedicated chefs will handle delighting your company so you can get back to business.</div>
        </div>
    
    )
}

function StringBoxD(){
    return (
        <div>
            <div>M's Sushi Catering is scaled to handle large events where multiple caterings are required. We're happy to collaborate with large event planners.</div>
            <div>Jackson Mou's expertise with French, Spanish, and Italian cuisine and experience working with Iron Chef's Master Chef Morimoto have allowed him to innovate the sushi experience. In fact, we offer signature sushi designs that can't be found anywhere else in the world. Celebrities love our cutting edge sushi designs and unbelievable flavors.</div>
            <div>If you're looking to add M's Sushi catering to your next big event, we have to warn you: we may blow other caterers out of the water!</div>
        </div>
    )
}