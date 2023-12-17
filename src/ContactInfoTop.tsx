import FontAwesomeIcon from './FontAwesomeIcon';



interface ContactInfoTopProps{
  style : React.CSSProperties;
}

const ContactInfoTop: React.FC<ContactInfoTopProps> = ({ style }) => {
    
  interface ContactInfo {
    city : string,
    cityFull : string,
    tel: string,
    email: string;
  }
  
  const ContactInfos : ContactInfo[]= [
      { city: "LA", cityFull: "LA:", tel: "(310)776-5995"       , email: "jackson@sushiprivatecater.com" },
      { city: "SF", cityFull: "SF:", tel: "(415)805-1810"       , email: "info.sf@sushiprivatecater.com" },
      { city: "VC", cityFull: "Vancouver:", tel: "(778)300-7159", email: "ben@sushiprivatecater.com" },
      { city: "LV", cityFull: "Las Vegas:", tel: "(702)660-8816", email: "victoria.lv@sushiprivatecater.com" }
    ];
  
    const cityStyle : React.CSSProperties = {
      minWidth: '80px', 
      display: 'inline-block',
    };
    const allStringStyle : React.CSSProperties = {
      display: "flex",
      justifyContent : "flex-start",
      gap: "5px",
    };
  
    return (
      <div style={{ ...style, color: "white" }}>
        {ContactInfos.map(info => (
          <div key={info.city} style={allStringStyle}>
            <div style={cityStyle}>{info.cityFull}</div>
              <a href={`tel:${info.tel}`} >
                <div style= {{gap:"5px",display:"flex",}}>
                  <FontAwesomeIcon iconName="phone" />
                  <div>{info.tel}</div>
                </div>
              </a>
              <a href={`mailto:${info.tel}`} >
                <div style= {{gap:"5px",display:"flex",}}>
                  <FontAwesomeIcon iconName="envelope" />
                  <div>{info.email}</div>
                </div>
              </a>
          </div>
        ))}
      </div>
    );
  }


  export default  ContactInfoTop;