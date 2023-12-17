import {useState} from 'react';


interface SingleLabelProps {
  label: string,
  onLabelClick :  Function;
}


const SingleLabel: React.FC<SingleLabelProps> = ({ label, onLabelClick })=> {

        const [isHovered, setIsHovered] = useState(false);
      
        const handleMouseEnter = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
      
        const buttomHoveredStyle : React.CSSProperties = {
          color: isHovered ?  "#e7b101": "white",
          transition: "color 0.2s cubic-bezier(0.42, 0, 0.58, 1)", 
        };
      
        return (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={buttomHoveredStyle}
            onClick={() => onLabelClick(label)}
          >
            {label}
          </div>
        );
};
      


export default SingleLabel;


