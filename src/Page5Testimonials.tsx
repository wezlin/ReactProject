import {useState} from 'react';
import Picture from './Picture';
import FontAwesomeIcon from './FontAwesomeIcon';
import Bottom from './Bottom';
import Button from './Button';
import TopVideo from './TopVideo';


interface testiDataProps {
    image: string,
    testiName: string,
    testiString: string,
}

const Page5Testimonials = ()=>{



    const testiData : testiDataProps[] = [
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/12/testi-img12.jpg",
         testiName: "ANGELA U.",
         testiString: "HIRE THESE THESE GUYS! No joke! I booked them to do dinner for my sister's bachelorette party and…"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/12/testi-img14.jpg",
        testiName: "TARA A.",
        testiString: "Where should I start!! Jackson and his sushi chefs are the best! They catered my wedding for…"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/11/testi-img1.jpeg",
         testiName: "JESSICA SHIH",
         testiString: "BEST. SUSHI. EVVAARRR!!! Jackson creates the most unbelievably delicious rolls and sushi bites. E…"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/12/testi-img13.jpg",
        testiName: "REGINA B.",
        testiString: "From a Coordinator perspective! — THESE guys are THE REAL deal! Communication back and fourth…"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/11/testi-img3.jpeg",
        testiName: "JANE NERLINGER EVANS",
        testiString: "Thank you, thank you for making my 60th birthday party so special. The food was wonderful – even …"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/11/testi-img2.jpeg",
        testiName: "MIKE BROWN",
        testiString: "Jackson is an amazing Sushi Master! Trained by the best and has an amazing sense of asian fusion …"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/11/testi-img5.jpeg",
        testiName: "ALLIE TING",
        testiString: "Thank you Jack, everyone had an enjoyable time at the party last night. The sushi was so fresh, y…"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/11/testi-img4.jpeg",
        testiName: "JULIE LIN",
        testiString: "Thank you for hosting a wonderful event at our Grand Opening today! We were completely blown away…"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/11/testi-img7.jpeg",
        testiName: "KATHY LEIMKUHLER",
        testiString: "I had Sushi Private Cater my Broker Preview in North Tustin. Jackson outdid himself! Agents could…"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/11/testi-img6.jpeg",
        testiName: "STACY PORTLOCK",
        testiString: "Chef Jackson- that was the best Sushi I have ever had. You truly are an artist. Thanks for cateri…"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/11/testi-img11.jpg",
        testiName:  "R K.",
        testiString: "These guys came in to cater for a company wide event and it was beyond anything we could have ask…"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/11/testi-img8.jpg",
        testiName: "LAUREN W.",
        testiString: "This place is phenomenal! If you’re looking for a beautifully catered meal with incredible sushi,…"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/11/testi-img11.jpg",
        testiName: "M P.",
        testiString: "This is our second time hiring Jackson and his team. They are very professional and accommodating…"
        },
        {image    : "https://sushiprivatecater.com/wp-content/uploads/2017/11/testi-img10.jpg",
        testiName: "ANN S.",
        testiString: "I've attended 2 parties Jackson & his team have catered and have been incredibly impressed. TBH, …"
        },
    ];


    const middleStyle : React.CSSProperties= {
        width: "80vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        // backgroundColor: "pink",
    };

    return (
        <div>
            <TopImage 
                StringTitle="TESTIMONIALS"  
                VideoURL="https://sushiprivatecater.com/wp-content/uploads/2018/01/testimonial-bg.jpeg"
            />

            <div style ={middleStyle}>
            {testiData.map((data, index) => (
                <Testi key={index}
                       image={data.image}
                       testiName={data.testiName}
                       testiString={data.testiString}
                /> 
            )

            )}
            </div>

            {/* <Testi  image="https://sushiprivatecater.com/wp-content/uploads/2017/12/testi-img12.jpg"
                    testiName="ANGELA U."
                    testiString="HIRE THESE THESE GUYS! No joke! I booked them to do dinner for my sister’s bachelorette party and…"
            /> */}
        </div>
    )

}


const Testi : React.FC<testiDataProps> = ({image, testiName, testiString}) =>{

    const TestiStyle : React.CSSProperties = {
        display: "block",
        width: "35%",
        maxWidth: "49vw",
        alignItems: "center",
        verticalAlign : "middle",
        // backgroundColor: "pink",
    }

    const testiStringStyle : React.CSSProperties = {
        display: "block",
        textAlign :"center",
        // margin: "auto",
        width : "100%",
        verticalAlign : "middle",
        margin: "10px",
    }
    const starStyle : React.CSSProperties = {
        display: "block",
        margin: "auto",
        width : "50%",
        verticalAlign : "middle",
        textAlign :"center",
    }
    const imgStyle : React.CSSProperties = {
        marginTop: "10px",
        display: "block",
        textAlign :"center",
        margin: "auto",
        width : "50%",   
    }
    return (
        <div style={TestiStyle}>
            <div style={testiStringStyle}>
                <FontAwesomeIcon iconName={"quote-left"} style={{ color: "#e7b101" }}/>
                {testiString}
                <FontAwesomeIcon iconName={"quote-right"} style={{ color: "#e7b101" }}/>
            </div>
            <div style={starStyle}>
                <FontAwesomeIcon iconName={"star"} style={{ color: "#e7b101" }}/>
                <FontAwesomeIcon iconName={"star"} style={{ color: "#e7b101" }}/>
                <FontAwesomeIcon iconName={"star"} style={{ color: "#e7b101" }}/>
                <FontAwesomeIcon iconName={"star"} style={{ color: "#e7b101" }}/>
                <FontAwesomeIcon iconName={"star"} style={{ color: "#e7b101" }}/>
            </div>
            <div style= {imgStyle}>
                <img src={image} alt={testiName} />
                <div>{testiName}</div>
            </div>
        </div>
    )
}


interface TopImageProps{
    StringTitle: string, 
    VideoURL: string
}

const TopImage : React.FC<TopImageProps>= ({StringTitle, VideoURL}) => {

    const videoContainerStyle : React.CSSProperties = {
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
      };
      
      const videoStyle  : React.CSSProperties= {
        width: '100%',
        maxHeight: "100vh",
        overflow: 'hidden',
        objectFit: 'cover',
      };
    const innerTitleMain  : React.CSSProperties= {
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
        lineHeight: "1.1"
    };
    

    return (
        <div >
            <div style = {videoContainerStyle}>
                <img src={VideoURL}/>
             </div>
            <p style={innerTitleMain}>{StringTitle}</p>
        </div>
    );
}


export default Page5Testimonials;