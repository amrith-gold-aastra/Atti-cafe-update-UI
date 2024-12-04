import React, { useState } from 'react'
import Styles from "./Index.module.css"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DiningIcon from '@mui/icons-material/Dining';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import TextField from '@mui/material/TextField';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Box from '@mui/material/Box';
import Americano from "../../../../assets/images/100433.webp"
import VegImg from "../../../../assets/images/VegImg.png";
import ColdCoffee from "../../../../assets/images/ColdCoffee.webp"
import JavaChipFrappuccino from "../../../../assets/images/JavaChipFrappuccino.webp";
import DoubleChocolateChip from "../../../../assets/images/DoubleChocolateChip.webp"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Union from "../../../../assets/images/Union.svg";

const Food = () => {

    const [giftCard, setGiftCard] = useState("Featured");
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [bestseller, setBestseller] = useState([
        {
            image: <img src={Americano} alt='' className={Styles.FoodPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Caffe Americano",
            size: " SHORT(237 mL) .0 kcal",
            describtion: "Rich in flavour, full-bodied espresso with hot water in true... ",
            price: "₹ 241.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={ColdCoffee} alt='' className={Styles.FoodPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Cold coffee",
            size: "TALL(354 mL) .354 kcal",
            describtion: "Our signature rich in flavour espresso blended with delicate...",
            price: "₹ 304.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={JavaChipFrappuccino} alt='' className={Styles.FoodPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Java Chip Frappuccino",
            size: "TALL(354 mL) .392 kcal",
            describtion: " Mocha sauce  and Frappuccino® chips blended with with Frappu... ",
            price: "₹ 325.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={DoubleChocolateChip} alt='' className={Styles.FoodPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Double Chocolate Chip Frappuccino",
            size: "TALL(354 mL) .415 kcal",
            describtion: "Rich mocha-flavored sauce meets up with chocolaty chips, mil...",
            price: "₹ 372.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
    ]);

    const [foodSubNavData, setFoodSubNavData] = useState([
        {
            title: <button className={Styles.FoodPageSubNavContentTextButton}> Sandwiches & Wraps </button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButton}> Croissants & More </button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButton}> Cookies & Desserts </button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButton}> Puffs & Pies </button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButton}> Bakery </button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButton}> Cakes </button>,
        },
    ]);

    const [foodSubNavDataButton, setFoodSubNavDataButton] = useState([
        {
            title: <button className={Styles.FoodPageSubNavContentTextButtonData}>Veg</button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButtonData}>Non Veg</button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButtonData}>Contains Egg</button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButtonData}>Bakery</button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButtonData}>Cake</button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButtonData}>Dessert</button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButtonData}>Spicy</button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButtonData}>Sweet</button>,
        },
        {
            title: <button className={Styles.FoodPageSubNavContentTextButtonData}>Healthy</button>,
        },       
    ]);

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    return (
        <div className={Styles.FoodPageMainContainer}>
            <div className={Styles.FoodPageSubNavContentData}>
                <div id="main-slider-container" className={Styles.FoodPageSubNavContainer}>
                    <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
                    <div id="slider" className={Styles.FoodPageSubNavContent}>
                        {
                            foodSubNavData.map((data, index) => {
                                return (
                                    <div key={index} >
                                    {data.title}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
                </div>
            </div>
            <div className={Styles.FoodPageSubNavContentDataTwo}>
                <img src={Union} alt=''/>
                <div className={Styles.ButtonContainerDataFilter}>
                {
                            foodSubNavDataButton.map((data, index) => {
                                return (
                                    <div key={index} >
                                    {data.title}
                                    </div>
                                )
                            })
                }
                </div>
            </div>

            <div className={Styles.FoodPageBestsellerContainer}>
                <p className={Styles.FoodPageBestsellerContainerTittle}>Sandwiches & Wraps</p>
                <p className={Styles.FoodPageBestsellerContainerText}>Signature breads made with fresh ingredients and in-house sauces.</p>
                <div className={Styles.FoodPageContent}>
                    {bestseller.map((data, index) => (
                        <div key={index} className={Styles.FoodPageContentCart}>
                            {data.image}
                            <div className={Styles.FoodPageContentCartData}>
                                {data.vegImg}
                                <p className={Styles.BestsellerCardTittle}>{data.tittle}</p>
                                <p className={Styles.BestsellerCardSize}>{data.size}</p>
                                <p className={Styles.BestsellerCardDescription}>{data.describtion}</p>
                                <div className={Styles.BestsellerCardPriceAndButtonContainer}>
                                    <p className={Styles.BestsellerCardPriceText}>{data.price}</p>
                                    {data.button}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Food