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


      const headerStyle  = {
        zIndex:"100", 
        display: "flex",
        width: "100vw",
        // maxHeigh : "100px",
        // height: "300px",
        position: "fixed",
    };

    const headerStylePullDown = {
        zIndex:"100",
        width: "100vw",
        // height: "200px",
        // maxHeigh : "100px",
        display: "flex",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.7)",
        borderBottom: "2px solid #aa0d34",
        transition: "background-color 0.5s linear", 
    };


    const yelpUpperStyle = {
        position: "relative",
        height: "auto",
        width: "100%",
        maxHeight:"30px",
        // display: "flex",
        // marginLeft: "auto",
        // marginRight: "auto",
        marginTop: "50%",
        marginBottom: "50%",

    };
    const navBarIconStyle = {
        width:"100%", 
        height:"auto",
        marginTop: "20%",
        marginBottom: "20%",
    };
    const NavBarPicStyle = {
        position: "relative",
        width: "20vw",
        maxHeight:"60%",
        height: "auto",
        display: "flex",
        // left: "5%",
        // marginLeft: "2vw",
        // backgroundColor: "pink",
    };

    const NavContactInfoStyle = {
        position: "relative",
        height: "100%",
        // width: "500px",
        fontWeight: "normal",
        textShadow: "2px 2px 4px #000",
        fontSize: "16px",    
        // alignItems: 'center',    
        display: 'flex', 
        flexDirection: 'column', 
        overflow: 'hidden',
        whiteSpace: "nowrap",
        // backgroundColor: "blue",

    };

    const NavBarUpperLeft = {
        width : '30vw',
        height: 'auto',
        // backgroundColor : "purple",
        marginLeft: '15px',
    };

    const NavBarUpperRight = {
        width : '70vw',
        height: '100px',
        // backgroundColor : "black",
        justifyContent: 'flex-end',        
    };


    const navBarUpperStyle ={
        position: "relative",
        display: "flex",
        gap: "32px",
        width: "100%",
        height: "100%",
        // alignItems: 'center',
        // marginTop : "2vh", 

        alignItems: "center", 
        justifyContent: "center", 
        
        // backgroundColor : "green",
    }
    

    const navBarContainer = {
        position: "relative",
        width :"100%",
        maxheight: "25vh",
        height: "100%",
        // display: "block",
        flexDirection: "column",
        height: "100%",
        // backgroundColor: "pink",
        
        
    };
    
    var headerStyleSelector = scrollY > 230 ? headerStylePullDown : headerStyle;


    return (
        <div style={headerStyleSelector} >
            <div style ={navBarContainer}>
                <div style={navBarUpperStyle}>
                    
                    <div style ={NavBarUpperLeft}> 
                        <div style={NavBarPicStyle}>
                            <Picture imageName="cropped-logo-1.png" style={navBarIconStyle} />
                            <YelpUpper style={yelpUpperStyle}/>
                        </div>   
                    </div>
                    
                    <div style= {NavBarUpperRight}>
                        <ContactInfoTop style={NavContactInfoStyle}/>
                    </div>
                </div>
                <Menu menuPosition={"headerMenu"} onButtonClickMenu={onButtonClick}/>
            </div>
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




