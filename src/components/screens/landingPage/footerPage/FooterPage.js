import React from "react";
import Styles from "./Index.module.css";
import LogoImg from "../../../assets/images/AttiCoffeLogo.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import AppStore from "../../../assets/images/appstoreiOS.png";
import PlayStore from "../../../assets/images/PlaystoreAndroid.png"
const FooterPage = () => {
    return (
        <div className={Styles.FooterPageMainContainer}>
            <div className={Styles.FooterPageTopContentField}>
                <img src={LogoImg} alt="" className={Styles.FooterPageTopContentFieldImg} />
                <div className={Styles.FooterPageAbouUSContent}>
                    <p className={Styles.FooterPageAbouUSContentTitle}>About Us</p>
                    <p className={Styles.FooterPageAbouUSContentText}>Our Heritage</p>
                    <p className={Styles.FooterPageAbouUSContentText}>Coffeehouse</p>
                    <p className={Styles.FooterPageAbouUSContentText}>Our Company</p>
                </div>
                <div className={Styles.FooterPageAbouUSContent}>
                    <p className={Styles.FooterPageAbouUSContentTitle}>Responsibility</p>
                    <p className={Styles.FooterPageAbouUSContentText}>Diversity</p>
                    <p className={Styles.FooterPageAbouUSContentText}>Community</p>
                    <p className={Styles.FooterPageAbouUSContentText}>Ethical Sourcing</p>
                    <p className={Styles.FooterPageAbouUSContentText}>Environmental Stewordship</p>
                    <p className={Styles.FooterPageAbouUSContentText}>Learn More</p>
                </div>
                <div className={Styles.FooterPageAbouUSContent}>
                    <p className={Styles.FooterPageAbouUSContentTitle}>Quick Links </p>
                    <p className={Styles.FooterPageAbouUSContentText}>Privacy Policy</p>
                    <p className={Styles.FooterPageAbouUSContentText}>FAQs</p>
                    <p className={Styles.FooterPageAbouUSContentText}>AttiCafe India Mobile App Terms of Use</p>
                    <p className={Styles.FooterPageAbouUSContentText}>Customer Services</p>
                    <p className={Styles.FooterPageAbouUSContentText}>Delivery</p>
                    <p className={Styles.FooterPageAbouUSContentText}>Season's Gifting</p>
                    <p className={Styles.FooterPageAbouUSContentText}> Loyalty Program Terms and Conditions </p>
                    <p className={Styles.FooterPageAbouUSContentText}> Starbucks Rewards Day Offer </p>
                    <p className={Styles.FooterPageAbouUSContentText}> Diwali Bonus Star Offer </p>
                    <p className={Styles.FooterPageAbouUSContentText}> Beverage Subscription </p>
                </div>
                <div className={Styles.FooterPageAbouUSContent}>
                    <p className={Styles.FooterPageAbouUSContentTitle}>Social Media </p>
                    <div className={Styles.FooterPageSocialMediaContent}>
                        <p className={Styles.FooterPageAbouUSContentText}><InstagramIcon /></p>
                        <p className={Styles.FooterPageAbouUSContentText}><FacebookIcon /></p>
                        <p className={Styles.FooterPageAbouUSContentText}><XIcon /></p>

                    </div>
                </div>
                <div className={Styles.FooterPageAbouUSContent}>
                    <img src={AppStore} alt=""/>
                    <img src={PlayStore} alt=""/>
                </div>
            </div>
            <div className={Styles.FooterPageBottumContentField}>
                <div className={Styles.FooterPageBottumCartContent}>
                    <p className={Styles.FooterPageBottumCartContentText}>Web Accesibility</p> |
                    <p className={Styles.FooterPageBottumCartContentText}>Privacy Statement</p> |
                    <p className={Styles.FooterPageBottumCartContentText}>Teams Of Use</p> |
                    <p className={Styles.FooterPageBottumCartContentText}>Contact Us </p>
                </div>
                <p className={Styles.FooterPageBottumCartContentText}>© 2024 AttiCafe Coffee Company. All rights reserved. </p>
            </div>
        </div>
    )
}
export default FooterPage