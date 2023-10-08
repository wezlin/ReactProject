import {useState} from 'react';
import SingleLabel from "./SingleLabel";
export default function Menu({menuPosition, onButtonClickMenu}){
    
 

    const Pages = [{label: "Home"},
                   {label: "About Us"}, 
                   {label: "Services"}, 
                   {label: "Menu"}, 
                   {label: "Testimonials"}, 
                   {label: "Social"}, 
                   {label: "Blog"}, 
                   {label: "Contact"}
                ];

    var select = {};

    const headerStyle = {
        display : "flex", 
        color: "black",
        height: "100%",
        fontWeight: "normal",
        fontSize: "16px",
        textShadow: "2px 2px 4px #000",
        marginRight: "50px",
        marginBottom: "10px",
        float: "right",
        gap: "10px",
        marginTop : "10px",
        // backgroundColor: "rgba(0,2,2,0.5)",
        // backgroundColor: "red",
        justifyContent : "flex-end",
    }
    const bottomStyle = {
        display: 'grid', 
        fontWeight: "normal",
        color: "black",
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '0em', 
        width: "30%",
        textShadow: "2px 2px 4px #000",
        height: "50px",
        gap: "15px",
        marginLeft: "3vw",
        marginRight: "7vw",
        fontSize: "14px",
        color: "white",

    };

    if (menuPosition === "headerMenu") {
        select = headerStyle;
      } else if (menuPosition === "bottomStyle") {
        select = bottomStyle;
        Pages.pop();
        Pages.pop();
      }
    
      return (
        <div style={select}>
          {Pages.map((page, index) => (
            <SingleLabel key={index} label={page.label} onLabelClick={onButtonClickMenu} />
            ))
          }
        </div>
      );
    };