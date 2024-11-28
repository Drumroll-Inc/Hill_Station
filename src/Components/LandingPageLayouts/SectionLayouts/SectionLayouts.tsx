import React from "react";
import Icon1 from "../../../assets/Icon1.svg";
import Icon2 from "../../../assets/Icon2.svg";
import Icon3 from "../../../assets/Icon3.svg";
import Icon4 from "../../../assets/Icon4.svg";
import FoodOne from "../../../assets/FoodOne.svg";
import Foodtwo from "../../../assets/FoodTwo.svg";
import FoodThree from "../../../assets/FoodThree.svg";
import FoodFour from "../../../assets/FoodFour.svg";
import Styles from "./SectionLayouts.module.css";



export const SectionLayouts: React.FC = () => {
  return (
    <div className={Styles.SectionLayoutsContainer}>
      <div className={Styles.SectionLayoutsHeader}>
        <h1 className={Styles.SectionLayoutsH1}>LATEST BLOGS</h1>
        <p className={Styles.SectionLayoutsParagh}>My blog is a collection of answers people don't want to hear to questions they didn't ask. Publish what you think, don't put it on social media. Writing is the only way I have to explain my own life to myself.</p>
      </div>
      <div className={Styles.SectionLayoutsPaents}>
         <div className={Styles.SectionLayoutsPaentsItem}>
            <div className={Styles.SectionLayoutsPaentsList1}>
             <img src={FoodOne} alt="" className={Styles.SectionLayoutsPaentsImage} />
             <p className={Styles.SectionLayoutsPaentsPara}>Quick and Easy Flaky Pastry for Tasty Breakfast</p>
            </div>
            <div className={Styles.SectionLayoutsPaentsList2}>
             <img src={Icon1} alt="Head icon" className={Styles.SectionLayoutsPaentsIcon} />
             <p className={Styles.SectionLayoutsPaentsIconParagrah}>BY WILL JOHN | 19 OCT 2022</p>
            </div>
         </div>

         <div className={Styles.SectionLayoutsPaentsItem}>
            <div className={Styles.SectionLayoutsPaentsList1}>
             <img src={Foodtwo} alt="" className={Styles.SectionLayoutsPaentsImage} />
             <p className={Styles.SectionLayoutsPaentsPara}>Quick and Easy Flaky Pastry for Tasty Breakfast</p>
            </div>
            <div className={Styles.SectionLayoutsPaentsList2}>
             <img src={Icon2} alt="Head icon" className={Styles.SectionLayoutsPaentsIcon} />
             <p className={Styles.SectionLayoutsPaentsIconParagrah}>BY LAURA | 19 OCT 2022</p>
            </div>
         </div>
           
         <div className={Styles.SectionLayoutsPaentsItem}>
            <div className={Styles.SectionLayoutsPaentsList1}>
             <img src={FoodThree} alt="" className={Styles.SectionLayoutsPaentsImage} />
             <p className={Styles.SectionLayoutsPaentsPara}>Quick and Easy Flaky Pastry for Tasty Breakfast</p>
            </div>
            <div className={Styles.SectionLayoutsPaentsList2}>
             <img src={Icon3} alt="Head icon" className={Styles.SectionLayoutsPaentsIcon} />
             <p className={Styles.SectionLayoutsPaentsIconParagrah}>BY NOVI | 19 OCT 2022</p>
            </div>
         </div>
          
         <div className={Styles.SectionLayoutsPaentsItem}>
            <div className={Styles.SectionLayoutsPaentsList1}>
             <img src={FoodFour} alt="" className={Styles.SectionLayoutsPaentsImage} />
             <p className={Styles.SectionLayoutsPaentsPara}>Quick and Easy Flaky Pastry for Tasty Breakfast</p>
            </div>
            <div className={Styles.SectionLayoutsPaentsList2}>
             <img src={Icon4} alt="Head icon" className={Styles.SectionLayoutsPaentsIcon} />
             <p className={Styles.SectionLayoutsPaentsIconParagrah}>BY ROBERT | 19 OCT 2022</p>
            </div>
         </div>

      </div>
    </div>
  )
}

export default SectionLayouts;