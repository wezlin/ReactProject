import {useState} from 'react';
import SingleLabel from "./SingleLabel";
export default function Menu({inputStyle , onButtonClickMenu}){
    
 

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
        marginTop: "0vh",
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
            <SingleLabel key={index} label={page.label} onLabelClick={onButtonClickMenu} />
            ))
          }
        </div>
      );
    };