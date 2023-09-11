import {useState} from 'react';
import Picture from './Picture';
import TopVideo from './TopVideo';

export default function Page4Menu(){

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


function Menu() {
    const menuContainerOuterStyle= {

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
    const menuContainerInnerStyle= {

        width: "80%",
        height: "100%",
        marginLeft:"auto",
        marginRight:"auto",
        fontSize: "12px",
    };

    const [getMenu, setMenu] = useState("BUFFET")
    return (
        <div style= {menuContainerOuterStyle}>
            <MenuHeader  setMenuType = {setMenu}/>
            <div style= {menuContainerInnerStyle}>
                <MenuBody MenuType = {getMenu}/>
            </div>
        </div>
    )
}


function MenuHeader({setMenuType}){

    const menuHeaderStyle = {
        
        display: "flex", 
        width: "100%",
        // height: "170px",
        // borderRadius: "10px",
        // backgroundColor: "pink",
    };

    const [selectedTab, setSelectedTab] = useState("BUFFET");
      const handleTabClick = (tabName) => {
      setMenuType(tabName)
      setSelectedTab(tabName);
    };


    const headers = ["BUFFET", "OMAKASE"];

  
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

function SingleMenuHeader({ headerName, isSelected, onClick }) {
  
    const SingleMenuHeaderStyle = {
        
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

function MenuBody({MenuType}) {

    const headerBottomStyle= {
        display:"flex",
        height: "20px", 
        width: "100%",
        alignItems:"center",
    };
    const sectionStyle={
        fontSize: "14px",
        fontWeight: "700",
        marginTop: "20px",
        marginBottom : "10px",

    };


    const useLocalHost = false ; 
    let endPointUrl;

    if (useLocalHost){
         endPointUrl = 'http://localhost:3001/process-form';
    }
    else {
        endPointUrl = 'https://18.119.129.91:443/process-form';
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
    
      


        const formData = new FormData(event.target);
        const response = await fetch(endPointUrl, {
            method: 'POST',
            mode: 'cors',
            body: formData,
        });
    
        
        if (response.ok) {
            console.log('Form data sent successfully');
            const responseData = await response.text();
            console.log('Backend Response:', responseData);
            alert('Thank you for your booking; we will get in touch with you');
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

                <span class="wpcf7-list-item first"><label><input type="checkbox" name="checkbox-558[]" value="Imported Tuna / クロマグロ (本鮪)" data-gtm-form-interact-field-id="0"/><span class="wpcf7-list-item-label">Imported Tuna / クロマグロ (本鮪)</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Scottish Salmon / サーモン (鮭)"/><span class="wpcf7-list-item-label">Scottish Salmon / サーモン (鮭)</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Imported Yellowtail / ブリ (鰤)"/><span class="wpcf7-list-item-label">Imported Yellowtail / ブリ (鰤)</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Albacore / ビンナガ (鰭)"/><span class="wpcf7-list-item-label">Albacore / ビンナガ (鰭)</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Ono / Kamasu-Sawara (鮁)"/><span class="wpcf7-list-item-label">Ono / Kamasu-Sawara (鮁)</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Live Hirame / ライブひらめ (鮃)"/><span class="wpcf7-list-item-label">Live Hirame / ライブひらめ (鮃)</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Jumbo Shrimp / ジャンボえび (海老)"/><span class="wpcf7-list-item-label">Jumbo Shrimp / ジャンボえび (海老)</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Uni / 海胆"/><span class="wpcf7-list-item-label">Uni / 海胆</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-558[]" value="Unagi / 日本鰻"/><span class="wpcf7-list-item-label">Unagi / 日本鰻</span></label></span>
            <br/><span class="wpcf7-list-item last"><label><input type="checkbox" name="checkbox-558[]" value="A5-Wagyu Beef / A5-和牛"/><span class="wpcf7-list-item-label">A5-Wagyu Beef / A5-和牛</span></label></span>  
            <br/>
            
            <br/><div style={sectionStyle}>Signature Roll:</div>

                <span class="wpcf7-list-item first"><label><input type="checkbox" name="checkbox-875[]" value="Salmon kiwi wrapped with spicy crab shrimp in Soy paper" data-gtm-form-interact-field-id="1"/><span class="wpcf7-list-item-label">Salmon kiwi wrapped with spicy crab shrimp in Soy paper</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Torch Salmon with pineapple miso creme sauce"/><span class="wpcf7-list-item-label">Torch Salmon with pineapple miso creme sauce</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Yellowtail mango wrapped with shrimp tempura"/><span class="wpcf7-list-item-label">Yellowtail mango wrapped with shrimp tempura</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Tokyo tuna thin serrano wrapped with crab in Soy paper"/><span class="wpcf7-list-item-label">Tokyo tuna thin serrano wrapped with crab in Soy paper</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Jacky Chen - shrimp tempura top with seasoning crunch + spicy mayo and sweet sauce"/><span class="wpcf7-list-item-label">Jacky Chen - shrimp tempura top with seasoning crunch + spicy mayo and sweet sauce</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="BBQ eel Spicy crab shrimp in Soy paper"/><span class="wpcf7-list-item-label">BBQ eel Spicy crab shrimp in Soy paper</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Cajun albacore wrapped with spicy tuna"/><span class="wpcf7-list-item-label">Cajun albacore wrapped with spicy tuna</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Rainbow with varieties of fish"/><span class="wpcf7-list-item-label">Rainbow with varieties of fish</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-875[]" value="Melt down cheese (beef)"/><span class="wpcf7-list-item-label">Melt down cheese (beef)</span></label></span>
            <br/><span class="wpcf7-list-item last"><label><input type="checkbox" name="checkbox-875[]" value="Basic: California+shrimp tempura+Spicy tuna/salmon+Vegetarian roll"/><span class="wpcf7-list-item-label">Basic: California+shrimp tempura+Spicy tuna/salmon+Vegetarian roll</span></label></span>
            <br/>

            <br/><div style={sectionStyle}>If Choosing Your Own Choice:</div>
                <span >
                    <input type="text" className= "page4inputBlank" name="text-546" size="40" placeholder="Insert your own choice here"/></span>
            <br/>
            <br/><div style={sectionStyle}>Will there be other food vendor(s)?</div>

            <span class="wpcf7-form-control wpcf7-radio">
                <span class="wpcf7-list-item first"><input type="radio" name="radio-564" value="Yes" checked="checked"/>
                <span class="wpcf7-list-item-label">Yes</span></span> 
            <br/><span class="wpcf7-list-item last"><input type="radio" name="radio-564" value="No"/>
            <span class="wpcf7-list-item-label">No</span></span>
            </span>
            <br/>

            <br/><div style={sectionStyle}>Hot:</div>
                <span class="wpcf7-list-item first"><label><input type="checkbox" name="checkbox-122[]" value="Chicken Teriyaki" data-gtm-form-interact-field-id="1"/><span class="wpcf7-list-item-label">Chicken Teriyaki</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="BBQ Ribs"/><span class="wpcf7-list-item-label">BBQ Ribs</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Signature Fried Rice"/><span class="wpcf7-list-item-label">Signature Fried Rice</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Pan Fried Noodle"/><span class="wpcf7-list-item-label">Pan Fried Noodle</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="XO Seafood Fried Rice (Scallop Chasu Shrimp)"/><span class="wpcf7-list-item-label">XO Seafood Fried Rice (Scallop Chasu Shrimp)</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Shrimp Tempura"/><span class="wpcf7-list-item-label">Shrimp Tempura</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Japanese Fried Oysters (Kaki Fry)"/><span class="wpcf7-list-item-label">Japanese Fried Oysters (Kaki Fry)</span></label></span>
            <br/><span class="wpcf7-list-item last"><label><input type="checkbox" name="checkbox-122[]" value="Stir Fry Assorted Vegetable"/><span class="wpcf7-list-item-label">Stir Fry Assorted Vegetable</span></label></span>
            <br/>

            <br/><div style={sectionStyle}>Cold:</div>
                <span class="wpcf7-list-item first"><label><input type="checkbox" name="checkbox-384[]" value="Edamame/Soybean"/><span class="wpcf7-list-item-label">Edamame/Soybean</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-384[]" value="Seaweed Salad"/><span class="wpcf7-list-item-label">Seaweed Salad</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-384[]" value="Spring Mix Salad"/><span class="wpcf7-list-item-label">Spring Mix Salad</span></label></span>
            <br/><span class="wpcf7-list-item last"><label><input type="checkbox" name="checkbox-384[]" value="Idako (Baby Octopus)"/><span class="wpcf7-list-item-label">Idako (Baby Octopus)</span></label></span>
            <br/>

            <br/><div>Kosher (Vegan & Gluten-Free):</div>
                <span class="wpcf7-list-item first"><label><input type="checkbox" name="checkbox-423[]" value="Kosher Shrimp (Vegan &amp; Gluten-Free)"/><span class="wpcf7-list-item-label">Kosher Shrimp (Vegan &amp; Gluten-Free)</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-423[]" value="Kosher Salmon (Vegan &amp; Gluten-Free)"/><span class="wpcf7-list-item-label">Kosher Salmon (Vegan &amp; Gluten-Free)</span></label></span>
            <br/><span class="wpcf7-list-item last"><label><input type="checkbox" name="checkbox-423[]" value="Kosher Squid (Vegan &amp; Gluten-Free)"/><span class="wpcf7-list-item-label">Kosher Squid (Vegan &amp; Gluten-Free)</span></label></span>
            <br/>
            <br/><div style={sectionStyle}>Your Name (required)</div>
            <input type="text" name="fname" size="40" 
                   class="page4inputBlank" 
                   aria-required="true" 
                   aria-invalid="false"
                   required/>
            
            <br/><div style={sectionStyle}>Phone Number (required)</div>
            <span class="wpcf7-form-control-wrap tel-324">
                <input type="text" name="tel-324" size="40" 
                       class="page4inputBlank" 
                       aria-required="true" 
                       aria-invalid="false"
                       required/>
            </span>
            
            <br/><div style={sectionStyle}>Email Address (required)</div>
            <input type="email" name="email" size="40" 
                   class="page4inputBlank" 
                   aria-required="true" 
                   aria-invalid="false"
                   required/>
            
            <br/><div style={sectionStyle}>Estimated # of Guests</div>
            <span class="wpcf7-form-control-wrap text-489">
                <input type="text" name="text-489" size="40" class="page4inputBlank" aria-invalid="false"/>
            </span>
            
            <br/><div style={sectionStyle}>Event Date</div>
            <input type="date" name="date-507"  class="page4inputBlank" aria-invalid="false" placeholder=""/>
            
            <br/><div style={sectionStyle}>Meal Type:</div>
            <span class="wpcf7-form-control-wrap menu-376">
                <select name="menu-376" class="page4inputBlank" aria-invalid="false">
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
            <span class="wpcf7-form-control-wrap address">
            <input type="text" name="eventLocation" size="40" className="page4inputBlank" aria-invalid="false"/></span>

            <br/><div style={sectionStyle}>Street Address</div>
            
            <span class="wpcf7-form-control-wrap address">
                <input type="text" name="address" size="40" className="page4inputBlank" aria-invalid="false"/>
            </span>

            <br/><div style={sectionStyle}>City</div>
            <input type="text" name="city" size="40" className="page4inputBlank" aria-invalid="false"/>
            
            <br/><div style={sectionStyle}>Postal / Zip Code</div>
            <input type="text" name="zip" size="40" className="page4inputBlank" aria-invalid="false"/>
            
            <br/><div style={sectionStyle}>Additional Notes</div>
            <textarea name="textarea-166" cols="40" rows="10" 
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