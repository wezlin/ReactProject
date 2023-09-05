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
            <MenuObject/> 
        </div>
    )
}

function MenuObject(){
    const MiddleStyle = {
        width: "100vw",
        // marginLeft: "auto",
        // marginRight: "auto",
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        
    };
    const MenuObjectStyle = {
        borderRadius: "10px",
        display: 'flex', // 使用 flexbox
        justifyContent: 'center', // 水平置中
        alignItems: 'center', // 垂直置中
        backgroundImage: `url(${process.env.PUBLIC_URL}/MSushi/asfalt-light1.png)`,
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'repeat',
        backgroundColor: "#222222",
        backgroundPosition: 'center',
        width: "800px",
        // height: "800px", // 設定高度以便垂直置中
        color: "white",
        marginBottom: "100px ",
    };


    return (
        <div style={MiddleStyle}>
            <div style={MenuObjectStyle}>
                <MenuContent/>  
            </div>
        </div>
    );
}



function MenuContent() {

    const useLocalHost = false ; 
    let endPointUrl;

    if (useLocalHost){
         endPointUrl = 'http://localhost:3001/process-form';
    }
    else {
        endPointUrl = 'http://18.188.144.103:3001/process-form';
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
        } else {
            console.error('Failed to send form data');
        }
    };


    return (
        <form onSubmit={handleSubmit} action={endPointUrl} method="post">
            <div>Check Items You Like:</div>

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
            
            <br/><div>Signature Roll:</div>

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

            <br/><div>If Choosing Your Own Choice:</div>
                <span ><input type="text" name="text-546" size="40" placeholder="Insert your own choice here"/></span>
            <br/>
            <br/><div>Will there be other food vendor(s)?</div>

            <span class="wpcf7-form-control wpcf7-radio">
                <span class="wpcf7-list-item first"><input type="radio" name="radio-564" value="Yes" checked="checked"/>
                <span class="wpcf7-list-item-label">Yes</span></span> 
            <br/><span class="wpcf7-list-item last"><input type="radio" name="radio-564" value="No"/>
            <span class="wpcf7-list-item-label">No</span></span>
            </span>
            <br/>

            <br/><div>Hot:</div>
                <span class="wpcf7-list-item first"><label><input type="checkbox" name="checkbox-122[]" value="Chicken Teriyaki" data-gtm-form-interact-field-id="1"/><span class="wpcf7-list-item-label">Chicken Teriyaki</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="BBQ Ribs"/><span class="wpcf7-list-item-label">BBQ Ribs</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Signature Fried Rice"/><span class="wpcf7-list-item-label">Signature Fried Rice</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Pan Fried Noodle"/><span class="wpcf7-list-item-label">Pan Fried Noodle</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="XO Seafood Fried Rice (Scallop Chasu Shrimp)"/><span class="wpcf7-list-item-label">XO Seafood Fried Rice (Scallop Chasu Shrimp)</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Shrimp Tempura"/><span class="wpcf7-list-item-label">Shrimp Tempura</span></label></span>
            <br/><span class="wpcf7-list-item"><label><input type="checkbox" name="checkbox-122[]" value="Japanese Fried Oysters (Kaki Fry)"/><span class="wpcf7-list-item-label">Japanese Fried Oysters (Kaki Fry)</span></label></span>
            <br/><span class="wpcf7-list-item last"><label><input type="checkbox" name="checkbox-122[]" value="Stir Fry Assorted Vegetable"/><span class="wpcf7-list-item-label">Stir Fry Assorted Vegetable</span></label></span>
            <br/>

            <br/><div>Cold:</div>
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
            <br/><div>Your Name (required)</div>
            <input type="text" name="fname" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false"/>
            
            <br/><div>Phone Number (required)</div>
            <span class="wpcf7-form-control-wrap tel-324"><input type="text" name="tel-324" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false"/></span>
            
            <br/><div>Email Address (required)</div>
            <input type="email" name="email" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false"/>
            
            <br/><div>Estimated # of Guests</div>
            <span class="wpcf7-form-control-wrap text-489"><input type="text" name="text-489" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false"/></span>
            
            <br/><div>Event Date</div>
            <input type="date" name="date-507"  class="wpcf7-form-control wpcf7-date wpcf7-validates-as-date" aria-invalid="false" placeholder=""/>
            
            <br/><div>Meal Type:</div>
            <span class="wpcf7-form-control-wrap menu-376"><select name="menu-376" class="wpcf7-form-control wpcf7-select" aria-invalid="false"><option value=""></option><option value="Appetizers/Tapas/Cocktail">Appetizers/Tapas/Cocktail</option><option value="Full Meal Buffet Station">Full Meal Buffet Station</option></select></span>
            
            <br/><div>Event Location</div>
            <span class="wpcf7-form-control-wrap address"><input type="text" name="eventLocation" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false"/></span>

            <br/><div>Street Address</div>
            <span class="wpcf7-form-control-wrap address"><input type="text" name="address" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false"/></span>

            <br/><div>City</div>
            <input type="text" name="city" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false"/>
            
            <br/><div>Postal / Zip Code</div>
            <input type="text" name="zip" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false"/>
            
            <br/><div>Additional Notes</div>
            <textarea name="textarea-166" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Insert any additional comments here."></textarea>


            <br/><input type="submit" value="SEND" />
        </form>
    );
}