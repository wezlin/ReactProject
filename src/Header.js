// import {useState} from "react";
import Picture from './Picture';
// import FontAwesomeIcon from './FontAwesomeIcon';
import Menu from './Menu';
import ContactInfo from './ContactInfo';
export default function Header(){

    const headerStyle  = {
        zIndex:"100", 
        display: "flex",
        marginTop : "10px",
        marginLeft : "50px",
    };

    return (
        <div style={{position:"fixed"}}>
            <div style={headerStyle}>
            <Picture imageName="cropped-logo-1.png" />
            <YelpUpper/>
            <ContactInfo/>
            </div>
            <Menu inputStyle={"headerMenu"} />
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
                <Picture imageName="review-yelp.png" />
            </a>
    );
}




