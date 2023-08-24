// import {useState} from 'react';
import Picture from './Picture';
// import FontAwesomeIcon from './FontAwesomeIcon';
import Menu from './Menu';
import ContactInfoBottom from './ContactInfoBottom';
export default function Bottom ({onButtonClick}){
    const bottomBackground = {
        backgroundImage:`url(${process.env.PUBLIC_URL}/MSushi/asfalt-light1.png)`,
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
        width: '100vw',
        // backgroundColor: "green",
    };
    const styleBottom= {
        display : "flex", 
        color: "white",
        maxWidth: '100%',
        marginTop : "20px",
        marginBottom : "20px",
        // backgroundColor : "yellow",
        marginLeft: "auto",
        marginRight: "auto",
        
    }
    const underline = {
        left: "0",
        bottom: "-7px",
        width: "50px",
        height: "3px",
        color: "red",
        backgroundColor: "#ebebeb",
        marginTop: "0.3em",
        marginBottom: "0.5em",
    };
    const contactStyle = {
        // backgroundColor : "pink",
        width: "500px",
    };

    return (
        <div style={bottomBackground}>
            <div style={bottomContainer}>

                <div style = {styleBottom}>
                    <Picture imageName = {"footer-logo.png"}
                         style={{marginLeft: "5vw"}}/>
                    <Menu menuPosition={"bottomStyle"} onButtonClickMenu={onButtonClick}/>
                    
                    <div style={contactStyle}>
                        <div>CONTACT</div>
                        <div style={underline}></div>
                        <ContactInfoBottom/>
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