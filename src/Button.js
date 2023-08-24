import {useState} from 'react';

export default function Button({inputString, handleMouseClick, label, onClickURL, isLink}){
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const buttonStyle = {
        padding: "10px 40px",

        border: "1px solid #e7b101",
        marginTop: "20px",
        display: "table",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: isHovered ? '#e7b101' : 'white',
        color: isHovered ? "white":"#222", 
        fontSize: "14px",
        lineHeight: "1",
        transition: "background-color 0.3s cubic-bezier(0.42, 0, 0.58, 1)",
       };

      const onClickControl = () => {
        if (isLink) {
          onClickControl();
        }
        else{
          handleMouseClick(label)
        }

      };
    return (
        <div>
            <button style= {buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick= {()=> onClickControl()}
            >
            {inputString}
            </button>
        </div>
    );
}