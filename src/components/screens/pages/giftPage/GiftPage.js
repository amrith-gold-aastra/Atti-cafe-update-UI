import React, { useState } from "react";
import Styles from "./Index.module.css";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import CardImg from "../../../assets/images/CoffeeAtHome.png"
import { Title } from "@mui/icons-material";

const GiftPage = () => {

    const [giftCard, setGiftCard] = useState("Featured");

    const [anytime, setAnyTime] = useState([
        {
            Img: "",
            Title: "India Exclusive",
            Description: "Bring in the festive season and make each celebration memorable.",
            Button: <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>,
        },
        {
            Img: "",
            Title: "AttiCafe Coffee",
            Description: "AttiCafe is best when shared. Treat your pals to a good cup of coffee.",
            Button: <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>,
        },
        {
            Img: "",
            Title: "ATTI CAFE",
            Description: "Take the moment and make it special with AttiCafe.",
            Button: <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>,
        },
        {
            Img: "",
            Title: "Hang In There",
            Description: "Sometimes, company goes a long way. Let your friends know you have their back.",
            Button: <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>,
        },
        {
            Img: "",
            Title: "My Treat",
            Description: " Nothing like a cup of coffee to flame a friendship. Share the experience with your best friends ",
            Button: <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>,
        },
        {
            Img: "",
            Title: "Way To Go",
            Description: "It's time to celebrate! Show your appreciation with this AttiCafe Gift Card.",
            Button: <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>,
        },
        {
            Img: "",
            Title: "This One's On Me",
            Description: "Everything I brew, I brew it for you. This one's on me.",
            Button: <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>,
        },
        {
            Img: "",
            Title: "Life Happens",
            Description: "Life happens, coffee helps. Brighten up their day with AttiCafe.",
            Button: <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>,
        },

    ]);

    const [congratulations, setCongratulations]=useState([
        {
            Img: "",
            Title: "Congrats",
            Description: "Coffee. Cheer. Celebrate. Enjoy each of your special moments with AttiCafe.",
            Button: <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>,
        },
    ])

    const [thankyou, setThankyou]=useState([
        {
            Img: "",
            Title: "Thank You",
            Description: "To the people who make coffee and those who love it, thank you.",
            Button: <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>,
        },
    ])
    return (
        <div className={Styles.GiftPageMainContainer}>
            <div className={Styles.GiftPageBreadcrumbs}>
                <Breadcrumbs separator="›" aria-label="breadcrumb" >
                    <Link to="/" className={Styles.GiftPageBreadcrumbsLink}>
                        Home
                    </Link>,
                    <Typography  >
                        Gift
                    </Typography>,
                </Breadcrumbs>
            </div>
            <p className={Styles.GiftPageNavTag}></p>
            <div className={Styles.GifrPageNavContainer}>
                <button onClick={() => setGiftCard("Featured")} className={Styles.footerPageNavText}>FEATURED</button> <span className={Styles.GiftPageFilterData}>|</span>
                <button onClick={() => setGiftCard("Anytime")} className={Styles.footerPageNavText}>ANYTIME</button> <span className={Styles.GiftPageFilterData}>|</span>
                <button onClick={() => setGiftCard("Congratulations")} className={Styles.footerPageNavText}>CONGRATULATIONS</button> <span className={Styles.GiftPageFilterData}>|</span>
                <button onClick={() => setGiftCard("")} className={Styles.footerPageNavText}>THANK YOU</button>
            </div>
            {giftCard === "Featured" ? (
                <div>
                    <div className={Styles.GifrPageNavHeaderContainer}>
                        <p className={Styles.GifrPageNavHeaderContainerText}>Anytime</p>
                    </div>
                    <div className={Styles.GifrPageCardContainer}>
                        <div className={Styles.GifrPageCardContent}>
                            <div className={Styles.GifrPageCardContentImgContent} >
                                <img src={CardImg} alt="" className={Styles.GifrPageCardContentImg} />
                            </div>
                            <div className={Styles.GifrPageCardTextContent}>
                                <p className={Styles.GifrPageCardTextContentTittle}>India Exclusive</p>
                                <p className={Styles.GifrPageCardTextContentDescription}>Bring in the festive season and make each celebration memorable.</p>
                                <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>
                            </div>
                        </div>
                        <div className={Styles.GifrPageCardContent}>
                            <div className={Styles.GifrPageCardContentImgContent} >
                                <img src={CardImg} alt="" className={Styles.GifrPageCardContentImg} />
                            </div>
                            <div className={Styles.GifrPageCardTextContent}>
                                <p className={Styles.GifrPageCardTextContentTittle}>AttiCafe Coffee</p>
                                <p className={Styles.GifrPageCardTextContentDescription}>AttiCafe is best when shared. Treat your pals to a good cup of coffee.</p>
                                <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>
                            </div>
                        </div>
                        <div className={Styles.GifrPageCardContent}>
                            <div className={Styles.GifrPageCardContentImgContent} >
                                <img src={CardImg} alt="" className={Styles.GifrPageCardContentImg} />
                            </div>
                            <div className={Styles.GifrPageCardTextContent}>
                                <p className={Styles.GifrPageCardTextContentTittle}>U Keep Me Warm</p>
                                <p className={Styles.GifrPageCardTextContentDescription}>Captivating, cosy, coffee. Gift your loved ones this AttiCafe Gift Card.</p>
                                <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.GifrPageNavHeaderContainer}>
                        <p className={Styles.GifrPageNavHeaderContainerText}>Congratulations</p>
                    </div>
                    <div className={Styles.GifrPageCardContainer}>
                        <div className={Styles.GifrPageCardContent}>
                            <div className={Styles.GifrPageCardContentImgContent} >
                                <img src={CardImg} alt="" className={Styles.GifrPageCardContentImg} />
                            </div>
                            <div className={Styles.GifrPageCardTextContent}>
                                <p className={Styles.GifrPageCardTextContentTittle}>Congrats</p>
                                <p className={Styles.GifrPageCardTextContentDescription}>Coffee. Cheer. Celebrate. Enjoy each of your special moments with AttiCafe.</p>
                                <button className={Styles.GifrPageCardTextContentButton}>Add Item</button>
                            </div>
                        </div>

                    </div>
                </div>
            ) : giftCard === "Anytime" ? (
                <div className={Styles.anytimeContent}>
                    <div className={Styles.GifrPageNavHeaderContainer}>
                        <p className={Styles.GifrPageNavHeaderContainerText}>Anytime</p>
                    </div>
                    <div className={Styles.GifrPageCardAnyTimeContainer}>
                    {
                        anytime.map((data, index) => {
                            return (
                               
                                    <div className={Styles.GifrPageAnyTimeCardContent}>
                                        <div className={Styles.GifrPageCardContentImgContent} >
                                            <img src={CardImg} alt="" className={Styles.GifrPageCardContentImg} />
                                        </div>
                                        <div className={Styles.GifrPageCardTextContent}>
                                            <p className={Styles.GifrPageCardTextContentTittle}>{data.Title}</p>
                                            <p className={Styles.GifrPageCardTextContentDescription}>{data.Description}</p>
                                            {data.Button}
                                        </div>
                                    </div>
                              
                            )
                        })
                    }
                      </div>
                </div>
            ) : giftCard === "Congratulations" ? (
                <div className={Styles.anytimeContent}>
                <div className={Styles.GifrPageNavHeaderContainer}>
                    <p className={Styles.GifrPageNavHeaderContainerText}>Congratulations</p>
                </div>
                <div className={Styles.GifrPageCardAnyTimeContainer}>
                {
                    congratulations.map((data, index) => {
                        return (
                           
                                <div className={Styles.GifrPageAnyTimeCardContent}>
                                    <div className={Styles.GifrPageCardContentImgContent} >
                                        <img src={CardImg} alt="" className={Styles.GifrPageCardContentImg} />
                                    </div>
                                    <div className={Styles.GifrPageCardTextContent}>
                                        <p className={Styles.GifrPageCardTextContentTittle}>{data.Title}</p>
                                        <p className={Styles.GifrPageCardTextContentDescription}>{data.Description}</p>
                                        {data.Button}
                                    </div>
                                </div>
                          
                        )
                    })
                }
                  </div>
            </div>
            ) : (
                <div className={Styles.anytimeContent}> 
                <div className={Styles.GifrPageNavHeaderContainer}>
                    <p className={Styles.GifrPageNavHeaderContainerText}>Thank You</p>
                </div>
                <div className={Styles.GifrPageCardAnyTimeContainer}>
                {
                    thankyou.map((data, index) => {
                        return (
                           
                                <div className={Styles.GifrPageAnyTimeCardContent}>
                                    <div className={Styles.GifrPageCardContentImgContent} >
                                        <img src={CardImg} alt="" className={Styles.GifrPageCardContentImg} />
                                    </div>
                                    <div className={Styles.GifrPageCardTextContent}>
                                        <p className={Styles.GifrPageCardTextContentTittle}>{data.Title}</p>
                                        <p className={Styles.GifrPageCardTextContentDescription}>{data.Description}</p>
                                        {data.Button}
                                    </div>
                                </div>
                          
                        )
                    })
                }
                  </div>
            </div>
            )}

        </div>
    )
}
export default GiftPage