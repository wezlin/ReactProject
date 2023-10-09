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

    if (menuPosition === "headerMenu") {
        select = "headerStyle";
      } else if (menuPosition === "bottomStyle") {
        select = "bottomStyle";
        Pages.pop();
        Pages.pop();
      }
    
      return (
        <div className={select} >
          {Pages.map((page, index) => (
            <SingleLabel key={index} label={page.label} onLabelClick={onButtonClickMenu} />
            ))
          }
        </div>
      );
    };