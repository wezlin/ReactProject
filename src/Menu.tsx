import {useState} from 'react';
import SingleLabel from "./SingleLabel";



interface MenuProps {
  menuPosition: string,
  onButtonClickMenu: Function ;
}


const Menu :  React.FC<MenuProps> = ({menuPosition, onButtonClickMenu})=>{
    
 

  interface Page {
    label: string;
  }

    const Pages : Page[] = [{label: "Home"},
                   {label: "About Us"}, 
                   {label: "Services"}, 
                   {label: "Menu"}, 
                   {label: "Testimonials"}, 
                   {label: "Social"}, 
                   {label: "Blog"}, 
                   {label: "Contact"}
                ];

    let select : string = "";

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



    export default Menu;