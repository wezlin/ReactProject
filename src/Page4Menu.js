import {useState} from 'react';
import Picture from './Picture';
import FontAwesomeIcon from './FontAwesomeIcon';
import Bottom from './Bottom';
import Button from './Button';
import TopVideo from './TopVideo';

export default function Page4Menu(){

    return (
        <div>
            <TopVideo 
                StringTitle="Menu"  
                VideoURL="https://sushiprivatecater.com/wp-content/uploads/2018/02/ShortVideoclip-catering-1.mp4"
            />
            <Menu/>
        </div>
    )

}



function Menu(){

    
    return (

        <div>
            <div className="middle2Title">
                <p >Menu</p>
                <Picture imageName={"heading-img.png"}/>
            </div>
            
         
        </div>
    )
}