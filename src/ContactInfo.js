import FontAwesomeIcon from './FontAwesomeIcon';

export default function ContactInfo(){

    const ContactInfo = [
    {city:"LA", cityFull: "LA:", tel: "(310)776-5995", email:"jackson@sushiprivatecater.com"},
    {city:"SF", cityFull: "SF:", tel: "(415)805-1810", email:"info.sf@sushiprivatecater.com"}, 
    {city:"VC", cityFull: "Vancouver:", tel: "(778)300-7159", email:"ben@sushiprivatecater.com"},
    {city:"LV", cityFull: "Las Vegas:", tel: "(702)660-8816", email:"victoria.lv@sushiprivatecater.com"}
    ]

    return (
        <div>
            {ContactInfo.map(info => (
                <div key={info.city}>
                    <p>
                        {info.cityFull} 
                        <FontAwesomeIcon iconName="phone" /> 
                        {info.tel} 
                        <FontAwesomeIcon iconName="envelope" /> 
                        {info.email}
                    </p>
                </div>
            ))}
        </div>
    )

}