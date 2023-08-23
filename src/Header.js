import {useState, useEffect} from "react";
import Picture from './Picture';
// import FontAwesomeIcon from './FontAwesomeIcon';
import Menu from './Menu';
import ContactInfo from './ContactInfo';
export default function Header({onButtonClick}){

    const [scrollY, setScrollY] = useState(window.scrollY);


    const handleScroll = () => {
        setScrollY(window.scrollY);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      var headerStyleSelector = {}
      const headerStyle  = {
        zIndex:"100", 
        display: "flex",
        width: "100vw",
        height: "30vh",
        position: "fixed",
        // marginTop : "10px",
        // marginLeft : "50px",
    };

    const headerStylePullDown = {
        zIndex:"100",
        width: "100vw",
        height: "25vh",
        // display: "flex",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.7)",
        borderBottom: "2px solid #aa0d34",
        transition: "background-color 1s linear", 
    };

    
    
    return (
        <div style={scrollY > 300 ? headerStylePullDown : headerStyle} >
            <div style= {{display: "flex",}}>
                <div style={{width: "40%", marginLeft:"15px",marginTop:"30px",}}>
                    <YelpUpper/>
                    <Picture imageName="cropped-logo-1.png" style={{width:"60%", height:"auto",}} />
                </div>
                <ContactInfo/>
            </div>
            <Menu inputStyle={"headerMenu"} onButtonClickMenu={onButtonClick}/>
        </div>
    );
}



function YelpUpper() {
    return (
            <a
                href="https://www.yelp.com/biz/sushi-private-catering-hacienda-heights?utm_medium=badge_star_rating_reviews&amp;utm_source=biz_review_badge"
                target="_blank"
                rel="noreferrer"
            >
                <Picture imageName="review-yelp.png" style={{width:"50%", height:"auto",}}/>
            </a>
    );
}




