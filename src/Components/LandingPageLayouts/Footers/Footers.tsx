import React from "react";
import Calling from "../../../assets/Calling.svg";
import phones from "../../../assets/Phones.svg";
import Emails from "../../../assets/emails.svg";
import Spaces from "../../../assets/space.svg";
import Pinke from "../../../assets/pinke.svg";
import Circle from "../../../assets/circle.svg";
import Youtube from "../../../assets/youtube.svg";
import Heading from "../../../assets/Heading.svg";
import Facebook from "../../../assets/facebook.svg";
import Instargram from "../../../assets/instagram.svg";
import Styles from "./Footers.module.css";



export const Footers: React.FC = () => {
  return (
    <div>
    <div className={Styles.FootersContainer}>
      <div className={Styles.FoooterChildItems}>
        <div className={Styles.FooterContainerItems}> 
         
          <img src={Heading} alt="Heading Icon Logo" className={Styles.LogoIcon} />
          <p className={Styles.FooterParagrah}>Please reach out to us if you have any questions</p>
           <div className={Styles.FooterNums}>
              <div className={Styles.FooterIconContainer}>
                 <img src={Calling} alt="Calling Icon" className={Styles.FooterIcon}/>
                 <h4 className={Styles.FooterNumbers}> +234 (916) 984-5070</h4>
              </div>
              <div className={Styles.FooterIconContainer}>
                 <img src={ phones} alt="phone Icon" className={Styles.FooterIcon}/>
                 <h4 className={Styles.FooterNumbers}> +234 (916) 984-5072</h4>
              </div>
              <div className={Styles.FooterIconContainer}>
                 <img src={Emails} alt="Email Icon" className={Styles.FooterIcon}/>
                 <h4 className={Styles.FooterNumbers}> info@heristays.com</h4>
              </div>
              <div className={Styles.FooterIconContainer}>
                 <img src={Spaces} alt="Calling Icon" className={Styles.FooterIcon}/>
                 <h4 className={Styles.FooterNumberss}> +234 (916) 984-5077</h4>
              </div>
           </div>
        </div>
        <div className={Styles.FooterLogonItems}>
              <img src={Facebook} alt="face book icon" className={Styles.FooterLogos} />
              <img src={Circle} alt="Circle  icon" className={Styles.FooterLogos} />
              <img src={Pinke} alt="Pinke icon" className={Styles.FooterLogos} />
              <img src={Instargram } alt="Instargram  icon" className={Styles.FooterLogos} />
              <img src={Youtube} alt="Youtube icon" className={Styles.FooterLogos} />
           </div>
      </div>
      <form className={Styles.Form}>
        <div className={Styles.InputRow}>
          <input type="text" placeholder="Full Name" className={Styles.Input} />
          <input type="email" placeholder="Email" className={Styles.Input} />
          <input type="tel" placeholder="Phone Number" className={Styles.Input} />
        </div>
        <textarea placeholder="Your Message" className={Styles.Textarea}></textarea>
        <button type="submit" className={Styles.Button}>Send Message</button>
      </form>
    </div>
     <div className={Styles.FooterLists}>
        <p className={Styles.FooterP}>© Copyright Heristays 2024. Heristays is a product of Drumroll Digital</p>
     </div>
   </div>
  );
};

export default Footers;