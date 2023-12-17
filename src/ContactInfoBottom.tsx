import FontAwesomeIcon from './FontAwesomeIcon';



interface ContactInfoBottomProps{
  style?: React.CSSProperties;
}

const ContactInfoBottom : React.FC<ContactInfoBottomProps>= ({ style }) => {
    
    interface ContactInfo{
      city : string, 
      cityFull : string,
      tel: string,
      email: string,
    }
  
    const ContactInfos : ContactInfo[] = [
      { city: "LA", cityFull: "LA", tel: "(310)776-5995", email: "jackson@sushiprivatecater.com" },
      { city: "SF", cityFull: "SF", tel: "(415)805-1810", email: "info.sf@sushiprivatecater.com" },
      { city: "VC", cityFull: "Vancouver", tel: "(778)300-7159", email: "ben@sushiprivatecater.com" },
      { city: "LV", cityFull: "Las Vegas", tel: "(702)660-8816", email: "victoria.lv@sushiprivatecater.com" }
    ];
  
    const cityStyle : React.CSSProperties= {
      minWidth: '80px', 
      marginTop: "10px",
    //   display: 'inline-block',
    };
    const allStringStyle : React.CSSProperties= {
    //   display: "flex",
      justifyContent : "flex-start",
    //   gap: "5px",
    };

    const FaStyle: React.CSSProperties = {
      width: "30px",
	    height: "30px",
	    background: "#ebebeb",
    	borderRadius: "50%",
	    textAlign: "center",
	    lineHeight: "30px",
	    marginRight: "15px",
	    marginTop:  "10px",
        color: "black",
    };


    return (
      <div style={{ ...style, color: "white" }}>
        {ContactInfos.map(info => (
          <div key={info.city} style={allStringStyle}>
                <div style={cityStyle}>
                    {info.cityFull}
                </div>

                <a href={`tel:${info.tel}`} >
                  <div style= {{whiteSpace: "nowrap",}}>
                    <FontAwesomeIcon iconName="phone"  style = {FaStyle}/>
                    {info.tel}
                  </div>
                </a>
                <a href={`mailto:${info.email}`} >
                  <div style= {{whiteSpace: "nowrap",}}>
                    <FontAwesomeIcon iconName="envelope"  style = {FaStyle}/>
                    {info.email}
                  </div>
                </a>



          </div>
        ))}
      </div>
    );
  }



  

  export default ContactInfoBottom;