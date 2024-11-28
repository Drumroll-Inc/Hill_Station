import React from "react";
import Footers from "../LandingPageLayouts/Footers/Footers";
import MainHeros from "../LandingPageLayouts/MainHeros/MainHeros";
import MainHeaders from "../LandingPageLayouts/MainHeaders/MainHeaders";
import SectionLayouts from "../LandingPageLayouts/SectionLayouts/SectionLayouts";
import CarouselLayouts from "../LandingPageLayouts/CarouselLayouts/CarouselLayouts";
import Styles from "./LandingPages.module.css";



export const LandingPages: React.FC = () => {
  return (
    <div className={Styles.LandingPagesContainers}>
        <MainHeaders />
       <MainHeros />
       <CarouselLayouts />
       <SectionLayouts />
       <Footers />
    </div>
  )
}

export default LandingPages