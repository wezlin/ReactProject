import {useState, useEffect} from 'react';
import Picture from './Picture';
import FontAwesomeIcon from './FontAwesomeIcon';
import Bottom from './Bottom';
import NavBar from './NavBar';
import FixedVeil from './FixedVeil';
import Page1Home from './Page1Home';
import Page2AboutUs from './Page2AboutUs';
import Page3Services from './Page3Services';
import Page4Menu from './Page4Menu';
import Page5Testimonials from './Page5Testimonials';
import Page6Social from './Page6Social';
// import Page7Blog from './Page7Blog';
// import Page8Contact from './Page8Contact';

export default function Body(){

    const [reDirection, setReDirection] = useState(null);
    const handleButtonClick = (buttonName) => {
        setReDirection(buttonName);
    };
    var content = null; 
    switch (reDirection) {
        case 'About Us':
            content = <Page2AboutUs />;
            break;
        case 'Services':
            content = <Page3Services />;
            break;
        case 'Menu':
            content = <Page4Menu />;
            break;
        case 'Testimonials':
            content = <Page5Testimonials />;
            break;
        case 'Social':
            content = <Page6Social />;
            break;
        // Add more cases for other pages if needed
        default:
            content = <Page1Home onButtonClick={handleButtonClick}/>;
    }

    return (
        <div>
            <FixedVeil key={reDirection} />
            <NavBar onButtonClick={handleButtonClick}/>
            {content}
            {/* <Page1Home/> */}
            {/* <Page2AboutUs/> */}
            {/* <Page3Services/> */}
            {/* <Page4Menu/> */}
            {/* <Page5Testimonials/> */}
            {/* <Page6Social/> */}

            <Bottom onButtonClick={handleButtonClick}/>
        </div>
    )
}