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
import Americano from "../../../assets/images/100433.webp"
import VegImg from "../../../assets/images/VegImg.png";
import ColdCoffee from "../../../assets/images/ColdCoffee.webp"
import JavaChipFrappuccino from "../../../assets/images/JavaChipFrappuccino.webp";
import DoubleChocolateChip from "../../../assets/images/DoubleChocolateChip.webp"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Union from "../../../assets/images/Union.svg"
import Drinks from './drinks/Drinks';
import Food from './food/Food';
import Merchandise from './merchandise/Merchandise';
import CoffeeAtHome from './coffeeAtHome/CoffeeAtHome';
import ReadyToEat from './readyToEat/ReadyToEat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ThemeProvider } from '@mui/material/styles';
import { getMuiTheme } from '../../../assets/MuiCreateTheme';


const OrderPage = () => {

    const [giftCard, setGiftCard] = useState("Bestseller");
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [bestseller, setBestseller] = useState([
        {
            image: <img src={Americano} alt='' className={Styles.OrderPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Caffe Americano",
            size: " SHORT(237 mL) .0 kcal",
            describtion: "Rich in flavour, full-bodied espresso with hot water in true... ",
            price: "₹ 241.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={ColdCoffee} alt='' className={Styles.OrderPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Cold coffee",
            size: "TALL(354 mL) .354 kcal",
            describtion: "Our signature rich in flavour espresso blended with delicate...",
            price: "₹ 304.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={JavaChipFrappuccino} alt='' className={Styles.OrderPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Java Chip Frappuccino",
            size: "TALL(354 mL) .392 kcal",
            describtion: " Mocha sauce  and Frappuccino® chips blended with with Frappu... ",
            price: "₹ 325.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={DoubleChocolateChip} alt='' className={Styles.OrderPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Double Chocolate Chip Frappuccino",
            size: "TALL(354 mL) .415 kcal",
            describtion: "Rich mocha-flavored sauce meets up with chocolaty chips, mil...",
            price: "₹ 372.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
    ]);

    const [orderSubNavData, setOrderSubNavData] = useState([
        {
            title: <button className={Styles.OrderPageSubNavContentTextButton}>Espresso</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButton}>Frappuccino® Blended Beverages</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButton}>Other Beverages</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButton}>Brewed Coffee</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButton}>Tea</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButton}>Cold Brew</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButton}>Bottled Beverage</button>,
        },
       
    ]);

    const [orderSubNavDataButton, setOrderSubNavDataButton] = useState([
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Hot</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Cold</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Milkshake</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Black</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Blended</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Coffeine Free</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Nitro</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>On Top</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Ice Cream</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Cream</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Brew</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Juice</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Ice Cream</button>,
        },
        {
            title: <button className={Styles.OrderPageSubNavContentTextButtonData}>Coffeine Free</button>,
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
        <div className={Styles.OrderPageMainContainer}>
            <div className={Styles.OrderPageBreadcrumbs}>
                <Breadcrumbs separator="›" aria-label="breadcrumb" >
                    <Link to="/" className={Styles.OrderPageBreadcrumbsLink}>
                        Home
                    </Link>,
                    <Typography  >
                        Order
                    </Typography>,
                </Breadcrumbs>
            </div>
            <div className={Styles.OrderPageNavContainer}>
                <div className={Styles.OrderPageFillterContent}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <MyLocationIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Current Location" variant="standard" />
                    </Box>
                    <p className={Styles.OrderPageFillterContentTextTiming}>
                    <AccessTimeIcon/> <span>25mins</span></p>
                </div>
                <ThemeProvider theme={getMuiTheme()}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="web"><DiningIcon />Dine-In</ToggleButton>
                    <ToggleButton value="android"><ShoppingBasketIcon />Takeaway</ToggleButton>
                </ToggleButtonGroup>
                </ThemeProvider>
            </div>
            <div className={Styles.OrderPageNavContainerFilter}>
                <button onClick={() => setGiftCard("Bestseller")} className={Styles.OrderPageNavText}>Bestseller</button>|
                <button onClick={() => setGiftCard("Drinks")} className={Styles.OrderPageNavText}>Drinks</button>|
                <button onClick={() => setGiftCard("Food")} className={Styles.OrderPageNavText}>Food</button>|
                <button onClick={() => setGiftCard("Merchandise")} className={Styles.OrderPageNavText}>Merchandise</button>|
                <button onClick={() => setGiftCard("Coffee At Home")} className={Styles.OrderPageNavText}>Coffee At Home</button>|
                <button onClick={() => setGiftCard("Ready to Eat")} className={Styles.OrderPageNavText}>Ready to Eat</button>
            </div>

           {giftCard === "Bestseller"?(

            <div className={Styles.OrderPageBestsellerContainer}>
                <p className={Styles.OrderPageBestsellerContainerTittle}>Bestseller</p>
                <p className={Styles.OrderPageBestsellerContainerText}>Everyone's favorite Starbucks put together in a specially curated collection.</p>
                <div className={Styles.OrderPageContent}>
                    {bestseller.map((data, index) => (
                        <div key={index} className={Styles.OrderPageContentCart}>
                            {data.image}
                            <div className={Styles.OrderPageContentCartData}>
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
            </div>):(giftCard === "Drinks"?
            <Drinks/>:giftCard === "Food"?
                <Food/>:giftCard === "Merchandise"?
                <Merchandise/>:giftCard === "Coffee At Home"?<CoffeeAtHome/>
                :giftCard === "Ready to Eat"?<ReadyToEat/>:"")
                }
        </div>
    )
}
export default OrderPage