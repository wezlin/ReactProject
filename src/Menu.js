import {useState} from 'react';
export default function Menu({inputStyle}){
    const Pages = [{label: "Home"},
                   {label: "About Us"}, 
                   {label: "Services"}, 
                   {label: "Menu"}, 
                   {label: "Testimnials"}, 
                   {label: "Social"}, 
                   {label: "Blog"}, 
                   {label: "Contact"}
                ];

    var select = {};

    const headerStyle = {
        display : "flex", 
        color: "black",
        fontWeight: "normal",
        fontSize: "14px",
        textShadow: "2px 2px 4px #000",
        marginRight: "50px",
        marginTop: "10px",
        marginBottom: "10px",
        float: "right",
        gap: "32px",
    }
    const bottomStyle = {
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '0em', 
        width: "25%",
        height: "150px",
        color: "white",
    };

    if (inputStyle === "headerMenu") {
        select = headerStyle;
      } else if (inputStyle === "bottomStyle") {
        select = bottomStyle;
        Pages.pop();
        Pages.pop();
      }
    
      return (
        <div style={select}>
          {Pages.map((page, index) => (
            <SingleLabel key={index} label={page.label} />
          ))}
        </div>
      );
    };
    
    const SingleLabel = ({ label }) => {
      const [isHovered, setIsHovered] = useState(false);
    
      const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    
      const buttomHoveredStyle = {
        color: isHovered ?  "#e7b101": "white" ,
        transition: "color 0.2s cubic-bezier(0.42, 0, 0.58, 1)", 
      };
    
      return (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={buttomHoveredStyle}
        >
          {label}
        </div>
      );
    };
    