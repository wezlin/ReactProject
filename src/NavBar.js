import {useState, useEffect} from "react";
import Picture from './Picture';
// import FontAwesomeIcon from './FontAwesomeIcon';
import Menu from './Menu';
import ContactInfoTop from './ContactInfoTop';
import './styles.css';

export default function NavBar({onButtonClick}){

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




    const NavContactInfoStyle = {
        position: "relative",
        height: "100%",
        // width: "500px",
        fontWeight: "normal",
        textShadow: "2px 2px 4px #000",
        fontSize: "16px",     
        display: 'flex', 
        flexDirection: 'column', 
        overflow: 'hidden',
        whiteSpace: "nowrap",
        // backgroundColor: "blue",

    };

    const headerStyle  = {
        zIndex:"100", 
        width: "100%",
        height: "auto",
        position: "fixed",
        // backgroundColor: "pink",
    };

    const headerStylePullDown = {
        zIndex:"100",
        width: "100%",
        height: "auto",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.7)",
        borderBottom: "2px solid #aa0d34",
        transition: "background-color 0.5s linear", 
        // backgroundColor: "pink",
    };





    const navBarUpperStyle1 ={
        display: "flex",      
        height: "100%",  
        textAlign:"center",
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
    }


    const NavBarUpperLeft1 = {
        width: "30%",
    };

    const NavBarUpperRight1 = {
        width: "70%",
    };

    const NavBarPicContainer = {
        position: "relative",
        width: "20vw",
        height: "100%",
        display: "flex",

        textAlign:"center",
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
    };
    const navBarIconStyle1 = {
        width: "100%",
        height: "auto",

    };
    const yelpUpperStyle1 = {
        width: "100%",
        height: "auto",

    };
    var navBarContainerStyleSelector = scrollY > 230 ? headerStylePullDown : headerStyle;


    const navBarContainerStyle2 = {
        // backgroundColor : "yellow",
        
        marginLeft : "5%",
        marginRight: "5%",
    };
    return (
        <div style={navBarContainerStyleSelector}>
            <div style={navBarContainerStyle2}>    
            
                <div style= {navBarUpperStyle1}>
                    
                    <div style ={NavBarUpperLeft1}> 
                        <div style={NavBarPicContainer}>
                            <Picture imageName="cropped-logo-1.png" style={navBarIconStyle1} />
                            <YelpUpper style={yelpUpperStyle1}/>
                        </div>   
                    </div>

                    <div style= {NavBarUpperRight1}>
                        <ContactInfoTop style={NavContactInfoStyle}/>
                    </div>
                    
                    
                </div>
            </div>
            <Menu menuPosition={"headerMenu"} onButtonClickMenu={onButtonClick}/>
        </div>
    );
}



function YelpUpper({style}) {
    return (
            <a
                href="https://www.yelp.com/biz/sushi-private-catering-hacienda-heights?utm_medium=badge_star_rating_reviews&amp;utm_source=biz_review_badge"
                target="_blank"
                rel="noreferrer"
            >
                <Picture imageName="review-yelp.png" style={style}/>
            </a>
    );
}




