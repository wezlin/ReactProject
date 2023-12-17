import React, {useState} from 'react';
import Picture from './Picture';
import TopVideo from './TopVideo';




const Page4Menu = () =>{

    return (
        <div>
            <TopVideo 
                StringTitle="Menu"  
                VideoURL="https://sushiprivatecater.com/wp-content/uploads/2018/02/ShortVideoclip-catering-1.mp4"
            />
            {/* <div className="middle2Title">
                <p >Menu</p>
                <Picture imageName={"heading-img.png"}/>
            </div> */}
            <Menu/>
        </div>
    )

}


const Menu = ()=> {
    const menuContainerOuterStyle : React.CSSProperties= {

        backgroundImage: `url(${process.env.PUBLIC_URL}/MSushi/asfalt-light1.png)`,
        backgroundSize: '50%',
        backgroundRepeat: 'repeat',
        backgroundColor: "#222222",
        backgroundPosition: 'center',
        color: "white",

        width: "80%",
        maxWidth: "700px",
        height: "100%",
        // backgroundColor: "yellow",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop : "50px",
        marginBottom : "10px",
    };
    const menuContainerInnerStyle : React.CSSProperties= {

        width: "80%",
        height: "100%",
        marginLeft:"auto",
        marginRight:"auto",
        fontSize: "12px",
    };

    const [getMenu, setMenu] = useState<string>("BUFFET")
    
    
    return (
        <div style= {menuContainerOuterStyle}>
            <MenuHeader  setMenuType = {setMenu}/>
            <div style= {menuContainerInnerStyle}>
                <MenuBody MenuType = {getMenu}/>
            </div>
        </div>
    )
}



interface MenuHeaderProps{
    setMenuType : Function ,
}
const MenuHeader: React.FC<MenuHeaderProps>= ({setMenuType}) =>{

    const menuHeaderStyle : React.CSSProperties= {
        
        display: "flex", 
        width: "100%",
        // height: "170px",
        // borderRadius: "10px",
        // backgroundColor: "pink",
    };

    const [selectedTab, setSelectedTab] = useState("BUFFET");
      const handleTabClick = (tabName: string) => {
      setMenuType(tabName)
      setSelectedTab(tabName);
    };


    const headers :string[]= ["BUFFET", "OMAKASE"];

  
    return  (
        <div style={menuHeaderStyle}>
          {headers.map((headerName) => (
            <SingleMenuHeader
              key={headerName}
              headerName={headerName}
              isSelected={selectedTab === headerName}
              onClick={() => handleTabClick(headerName)}
            />
          ))}
        </div>
    );
}


interface SingleMenuHeaderProps{
    headerName :string, 
    isSelected : boolean, 
    onClick : ()=>void;
}

const SingleMenuHeader : React.FC<SingleMenuHeaderProps> = ({ headerName, isSelected, onClick }) => {
   
   
    const SingleMenuHeaderStyle : React.CSSProperties = {     
        width: "50%",
        height: "55px",
        color: isSelected ? "white" : "white",
        backgroundColor: isSelected ? "" : "#e7b101",
        display: "flex", // 使用 Flex 布局
        flexDirection: "column",
        justifyContent: "center", // 垂直居中
        textAlign: "center",
        // borderRadius:"1px",
        cursor: "pointer",
      };
    
      return (
        <div style={SingleMenuHeaderStyle} onClick={onClick}>
          {headerName}
        </div>
      );
}

interface MenuBodyProps{
    MenuType :string,
}
const MenuBody : React.FC<MenuBodyProps> = ({MenuType}) => {

    const headerBottomStyle : React.CSSProperties= {
        display:"flex",
        height: "20px", 
        width: "100%",
        alignItems:"center",
    };
    const sectionStyle  : React.CSSProperties={
        fontSize: "14px",
        fontWeight: "700",
        marginTop: "20px",
        marginBottom : "10px",

    };


    const useLocalHost : boolean = false ; 
    let endPointUrl : string = "";

    if (useLocalHost){
         endPointUrl = 'http://localhost:3001/process-form';
    }
    else {
        endPointUrl = 'https://18.119.129.91:443/process-form';
    }


    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
      


        // const formData = new FormData(event.target);
        const formData = new FormData(event.currentTarget)
        const response = await fetch(endPointUrl, {
            method: 'POST',
            mode: 'cors',
            body: formData,
        });
    
        
        if (response.ok) {
            console.log('Form data sent successfully');
            const responseData = await response.text();
            console.log('Backend Response:', responseData);
            alert('Thank you for your booking; we will get in touch with you ASAP');
        } else {
            console.error('Failed to send form data');
            alert('Error 404');
        }
    };


    return (
        <form onSubmit={handleSubmit} action={endPointUrl} method="post">
            
            <div style={headerBottomStyle}>
            </div>
            <input type="hidden" name="headerText" value={MenuType} />

            <div style={sectionStyle}>Check Items You Like:</div>

                <span className="wpcf7-list-item first"><label><input type="checkbox" name="checkbox-558[]" value="Imported Tuna / クロマグロ (本鮪)" data-gtm-form-interact-field-id="0"/><span className="wpcf7-list-item-label">Imported Tuna / クロマグロ (本鮪)</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Scottish Salmon / サーモン (鮭)"/><span className="wpcf7-list-item-label">Scottish Salmon / サーモン (鮭)</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Imported Yellowtail / ブリ (鰤)"/><span className="wpcf7-list-item-label">Imported Yellowtail / ブリ (鰤)</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Albacore / ビンナガ (鰭)"/><span className="wpcf7-list-item-label">Albacore / ビンナガ (鰭)</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Ono / Kamasu-Sawara (鮁)"/><span className="wpcf7-list-item-label">Ono / Kamasu-Sawara (鮁)</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Live Hirame / ライブひらめ (鮃)"/><span className="wpcf7-list-item-label">Live Hirame / ライブひらめ (鮃)</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Jumbo Shrimp / ジャンボえび (海老)"/><span className="wpcf7-list-item-label">Jumbo Shrimp / ジャンボえび (海老)</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Uni / 海胆"/><span className="wpcf7-list-item-label">Uni / 海胆</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Unagi / 日本鰻"/><span className="wpcf7-list-item-label">Unagi / 日本鰻</span></label></span>
            <br/><span className="wpcf7-list-item last"><label><input type="checkbox" name="checkbox-558[]" value="A5-Wagyu Beef / A5-和牛"/><span className="wpcf7-list-item-label">A5-Wagyu Beef / A5-和牛</span></label></span>  
            <br/>
            
            <br/><div style={sectionStyle}>Signature Roll:</div>

                <span className="wpcf7-list-item first"><label><input type="checkbox" name="checkbox-875[]" value="Salmon kiwi wrapped with spicy crab shrimp in Soy paper" data-gtm-form-interact-field-id="1"/><span className="wpcf7-list-item-label">Salmon kiwi wrapped with spicy crab shrimp in Soy paper</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Torch Salmon with pineapple miso creme sauce"/><span className="wpcf7-list-item-label">Torch Salmon with pineapple miso creme sauce</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Yellowtail mango wrapped with shrimp tempura"/><span className="wpcf7-list-item-label">Yellowtail mango wrapped with shrimp tempura</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Tokyo tuna thin serrano wrapped with crab in Soy paper"/><span className="wpcf7-list-item-label">Tokyo tuna thin serrano wrapped with crab in Soy paper</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Jacky Chen - shrimp tempura top with seasoning crunch + spicy mayo and sweet sauce"/><span className="wpcf7-list-item-label">Jacky Chen - shrimp tempura top with seasoning crunch + spicy mayo and sweet sauce</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="BBQ eel Spicy crab shrimp in Soy paper"/><span className="wpcf7-list-item-label">BBQ eel Spicy crab shrimp in Soy paper</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Cajun albacore wrapped with spicy tuna"/><span className="wpcf7-list-item-label">Cajun albacore wrapped with spicy tuna</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Rainbow with varieties of fish"/><span className="wpcf7-list-item-label">Rainbow with varieties of fish</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Melt down cheese (beef)"/><span className="wpcf7-list-item-label">Melt down cheese (beef)</span></label></span>
            <br/><span className="wpcf7-list-item last"><label><input type="checkbox" name="checkbox-875[]" value="Basic: California+shrimp tempura+Spicy tuna/salmon+Vegetarian roll"/><span className="wpcf7-list-item-label">Basic: California+shrimp tempura+Spicy tuna/salmon+Vegetarian roll</span></label></span>
            <br/>

            <br/><div style={sectionStyle}>If Choosing Your Own Choice:</div>
                <span >
                    <input type="text" className= "page4inputBlank" name="text-546" size={40} placeholder="Insert your own choice here"/></span>
            <br/>
            <br/><div style={sectionStyle}>Will there be other food vendor(s)?</div>

            <span className="wpcf7-form-control wpcf7-radio">
                <span className="wpcf7-list-item first"><input type="radio" name="radio-564" value="Yes" checked={true}/>
                <span className="wpcf7-list-item-label">Yes</span></span> 
            <br/><span className="wpcf7-list-item last"><input type="radio" name="radio-564" value="No"/>
            <span className="wpcf7-list-item-label">No</span></span>
            </span>
            <br/>

            <br/><div style={sectionStyle}>Hot:</div>
                <span className="wpcf7-list-item first"><label><input type="checkbox" name="checkbox-122[]" value="Chicken Teriyaki" data-gtm-form-interact-field-id="1"/><span className="wpcf7-list-item-label">Chicken Teriyaki</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="BBQ Ribs"/><span className="wpcf7-list-item-label">BBQ Ribs</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Signature Fried Rice"/><span className="wpcf7-list-item-label">Signature Fried Rice</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Pan Fried Noodle"/><span className="wpcf7-list-item-label">Pan Fried Noodle</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="XO Seafood Fried Rice (Scallop Chasu Shrimp)"/><span className="wpcf7-list-item-label">XO Seafood Fried Rice (Scallop Chasu Shrimp)</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Shrimp Tempura"/><span className="wpcf7-list-item-label">Shrimp Tempura</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Japanese Fried Oysters (Kaki Fry)"/><span className="wpcf7-list-item-label">Japanese Fried Oysters (Kaki Fry)</span></label></span>
            <br/><span className="wpcf7-list-item last"><label><input type="checkbox" name="checkbox-122[]" value="Stir Fry Assorted Vegetable"/><span className="wpcf7-list-item-label">Stir Fry Assorted Vegetable</span></label></span>
            <br/>

            <br/><div style={sectionStyle}>Cold:</div>
                <span className="wpcf7-list-item first"><label><input type="checkbox" name="checkbox-384[]" value="Edamame/Soybean"/><span className="wpcf7-list-item-label">Edamame/Soybean</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-384[]" value="Seaweed Salad"/><span className="wpcf7-list-item-label">Seaweed Salad</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-384[]" value="Spring Mix Salad"/><span className="wpcf7-list-item-label">Spring Mix Salad</span></label></span>
            <br/><span className="wpcf7-list-item last"><label><input type="checkbox" name="checkbox-384[]" value="Idako (Baby Octopus)"/><span className="wpcf7-list-item-label">Idako (Baby Octopus)</span></label></span>
            <br/>

            <br/><div>Kosher (Vegan & Gluten-Free):</div>
                <span className="wpcf7-list-item first"><label><input type="checkbox" name="checkbox-423[]" value="Kosher Shrimp (Vegan &amp; Gluten-Free)"/><span className="wpcf7-list-item-label">Kosher Shrimp (Vegan &amp; Gluten-Free)</span></label></span>
            <br/><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-423[]" value="Kosher Salmon (Vegan &amp; Gluten-Free)"/><span className="wpcf7-list-item-label">Kosher Salmon (Vegan &amp; Gluten-Free)</span></label></span>
            <br/><span className="wpcf7-list-item last"><label><input type="checkbox" name="checkbox-423[]" value="Kosher Squid (Vegan &amp; Gluten-Free)"/><span className="wpcf7-list-item-label">Kosher Squid (Vegan &amp; Gluten-Free)</span></label></span>
            <br/>
            <br/><div style={sectionStyle}>Your Name (required)</div>
            <input type="text" name="fname" size={40}
                   className="page4inputBlank" 
                   aria-required="true" 
                   aria-invalid="false"
                   required/>
            
            <br/><div style={sectionStyle}>Phone Number (required)</div>
            <span className="wpcf7-form-control-wrap tel-324">
                <input type="text" name="tel-324" size={40}
                       className="page4inputBlank" 
                       aria-required="true" 
                       aria-invalid="false"
                       required/>
            </span>
            
            <br/><div style={sectionStyle}>Email Address (required)</div>
            <input type="email" name="email" size={40}
                   className="page4inputBlank" 
                   aria-required="true" 
                   aria-invalid="false"
                   required/>
            
            <br/><div style={sectionStyle}>Estimated # of Guests</div>
            <span className="wpcf7-form-control-wrap text-489">
                <input type="text" name="text-489" size={40} className="page4inputBlank" aria-invalid="false"/>
            </span>
            
            <br/><div style={sectionStyle}>Event Date</div>
            <input type="date" name="date-507"  className="page4inputBlank" aria-invalid="false" placeholder=""/>
            
            <br/><div style={sectionStyle}>Meal Type:</div>
            <span className="wpcf7-form-control-wrap menu-376">
                <select name="menu-376" className="page4inputBlank" aria-invalid="false">
                    <option value=""></option>
                    <option value="Appetizers/Tapas/Cocktail">
                        Appetizers/Tapas/Cocktail
                    </option>
                    <option value="Full Meal Buffet Station">
                        Full Meal Buffet Station
                    </option>
                </select>
            </span>
            
            <br/><div style={sectionStyle}>Event Location</div>
            <span className="wpcf7-form-control-wrap address">
            <input type="text" name="eventLocation" size={40} className="page4inputBlank" aria-invalid="false"/></span>

            <br/><div style={sectionStyle}>Street Address</div>
            
            <span className="wpcf7-form-control-wrap address">
                <input type="text" name="address" size={40} className="page4inputBlank" aria-invalid="false"/>
            </span>

            <br/><div style={sectionStyle}>City</div>
            <input type="text" name="city" size={40} className="page4inputBlank" aria-invalid="false"/>
            
            <br/><div style={sectionStyle}>Postal / Zip Code</div>
            <input type="text" name="zip" size={40} className="page4inputBlank" aria-invalid="false"/>
            
            <br/><div style={sectionStyle}>Additional Notes</div>
            <textarea name="textarea-166" cols={40} rows={10} 
                      className="page4inputBlank" 
                      aria-invalid="false" 
                      placeholder="Insert any additional comments here.">
                    
            </textarea>


            <br/><input type="submit" value="SEND" />
            
            <div style={headerBottomStyle}></div>
        </form>
    );
}
function MenuBottom(){
    return (
        <div>

        </div>
    )
}



export default Page4Menu;