import {useState, useEffect} from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';

export default function SideButton(){


    const sideButtonStyle: React.CSSProperties = {
        position: "fixed",
        zIndex: "10000",
        top: "40vh",
        right: "0",     
    };

    

    return(
        <div>
        <div style = {sideButtonStyle}>
            <SideIcon faIconName="facebook" 
                      backgroundColor="#3b5998"
                      URL="https://www.facebook.com/SushiPrivateChef"/>
         </div>     
         <div style = {{
                    ...sideButtonStyle,
                        marginTop: "30px", 
                        }}>  
            <SideIcon faIconName="instagram" 
                      backgroundColor="#125688"
                      URL="https://www.instagram.com/sushiprivatecatering/"/>
        </div>
        <div style = {{
                    ...sideButtonStyle,
                        marginTop: "60px", 
                        }}>
            <SideIcon faIconName="yelp" 
                      backgroundColor="#c12026"
                      URL="https://www.yelp.com/biz/sushi-private-catering-los-angeles"/>
        </div>
        </div>
    )
};


interface SideIconArg {
    faIconName: string;
    backgroundColor: string; 
    URL: string;
  }

function SideIcon({faIconName, backgroundColor, URL}: SideIconArg){




    const [isHovered, setIsHovered] = useState(false);
    
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    

      const iconStyle : React.CSSProperties= {
        display:"flex", 
        gap: "10px", 
        color: "white",
        // width: "180px",
        textTransform: "uppercase",
        backgroundColor : backgroundColor,
        textDecoration: "none",
        fontSize: "18px",
        width: isHovered ?  "168px": "30px" ,
        transition: "width 0.5s ease",
        fontFamily: "monospace",
        
    }
      

    return(
        <a style={iconStyle}
            href={URL}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <FontAwesomeIcon 
                iconName={faIconName} 

                style={{
                    margin:"5px", 
                    color: "white"
                }}
            />



            
            <div style={{
                margin: "5px",
            }}>
                {faIconName}
            </div>
        </a>        
    )
}