// import {useState} from 'react';
import Picture from './Picture';
// import FontAwesomeIcon from './FontAwesomeIcon';
import Menu from './Menu';
import ContactInfo from './ContactInfo';
export default function Bottom ({onButtonClick}){
    const bottomBackground = {
        backgroundImage: `url('/MSushi/asfalt-light1.png')`,
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'repeat',
        backgroundColor: "#222222",
        backgroundPosition: 'center',
        width: "100%",
        height: "100%",
        maxWidth: "100vw",

    };
    const bottomContainer = {
        display : "flex", 
        width: '100%',
    };
    const styleBottom= {
        display : "block", 
        color: "white",
        maxWidth: '100vh',
        marginTop : "50px",
    }
    const underline = {
        left: "0",
        bottom: "-7px",
        width: "50px",
        height: "3px",
        color: "red",
        backgroundColor: "#ebebeb",
        marginTop: "0.5em",
    };


    return (
        <div style={bottomBackground}>
            <div style={bottomContainer}>

                <div style = {styleBottom}>
                    <Picture imageName = {"footer-logo.png"}
                         style={{marginLeft: "5vw"}}/>
                    <Menu inputStyle={"bottomStyle"} onButtonClickMenu={onButtonClick}/>
                    
                    <div>
                        <p>CONTACT</p>
                        <div style={underline}></div>
                        <ContactInfo/>
                    </div>
                </div>
            </div>
            <BottomCopyRight/>
            
        </div>
    )
}

function BottomCopyRight(){
    const BottomCopyRightStyle= {
        backgroundColor: "black",
    };
    const CopyRightStringStyle= {
        padding: "15px",
        backgroundColor:"#000",
        color:"#FFF",	
        display: "flex",
        justifyContent: "center",
    };
    return (
        <div style={BottomCopyRightStyle}>
            <p style={CopyRightStringStyle}>
                Copyright 2022 | All rights reserved.
            </p>
        </div>
    )
}