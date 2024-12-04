import React from "react";
import Styles from "./Index.module.css"
import HeaderPage from "./headerPage/HeaderPage";
import { Outlet } from "react-router-dom";
import FooterPage from "./footerPage/FooterPage";

const LandingPage=()=>{
    return(
        <div className={Styles.LandingPageMainContainer}>
                <HeaderPage/>
                <div className={Styles.LandingPageOutlet}>
                    <div className={Styles.LandingPageOutletComponent}>
                    <Outlet/>
                    <FooterPage />
                    </div>
                </div>
        </div>
    )
}
export default LandingPage