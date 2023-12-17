import {useState} from 'react';


interface ButtonProps{
  inputString : string, 
  handleMouseClick?: Function, 
  label?: string, 
  onClickURL? : string, 
  isLink?: boolean,
}



const Button: React.FC<ButtonProps> = ({inputString, handleMouseClick, label, onClickURL, isLink}) =>{
    const [isHovered, setIsHovered] = useState<boolean | null>(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const buttonStyle : React.CSSProperties= {
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
        if (isLink && onClickURL) {
          window.open(onClickURL, '_blank');
        }
        else if (handleMouseClick){
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


export default Button;