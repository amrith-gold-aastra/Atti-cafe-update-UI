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
import FrappuccinoFirstImg from "../../../../assets/images/FrappuccinoFirstImg.webp";
import FrappuccinoSecondImg from "../../../../assets/images/FrappuccinoSecondImg.webp";
import FrappuccinoThird from "../../../../assets/images/FrappuccinoThird.webp";
import beveragesFirstImg from "../../../../assets/images/beveragesFirstImg.webp";
import beveragesSecondImg from "../../../../assets/images/beveragesSecondImg.webp";
import beveragesThirdImg from "../../../../assets/images/beveragesThirdImg.webp";
import beveragesFourthImg from "../../../../assets/images/beveragesFourthImg.webp";
import beveragesFifthImg from "../../../../assets/images/beveragesFifthImg.webp";
import beveragesSixthImg from "../../../../assets/images/beveragesSixthImg.webp";
import beveragesSeventhImg from "../../../../assets/images/beveragesSeventhImg.webp";
import BrewedFirstImg from "../../../../assets/images/BrewedFirstImg.webp";
import BrewedSecondImg from "../../../../assets/images/BrewedSecondImg.webp";
import BrewedThirdImg from "../../../../assets/images/BrewedThirdImg.webp";
import AmericanoBrewedForthImg from "../../../../assets/images/AmericanoBrewedForthImg.webp";
import BrewedFifthImg from "../../../../assets/images/BrewedFifthImg.webp";
import BrewedSixthImg from "../../../../assets/images/BrewedSisthImg.webp";

const Drinks = () => {

    const [giftCard, setGiftCard] = useState("Espresso");
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [bestseller, setBestseller] = useState([
        {
            image: <img src={Americano} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Cappuccino",
            size: "PICCO(180 mL) .104 Kcal",
            describtion: "Dark, Rich in flavour espresso lies in wait under a smoothed...",
            price: "₹ 215.25",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={ColdCoffee} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Latte",
            size: "PICCO(180 mL) .76 kcal",
            describtion: "Our dark, Rich in flavour espresso balanced with steamed mil...",
            price: "₹ 220.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={JavaChipFrappuccino} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Toffee Nut Crunch Latte",
            size: "SHORT(Short Toffee Nut Crunch Latte) .225 Kcal",
            describtion: "Delight your senses with our Toffee Nut Crunch Latte. A perf...",
            price: "₹ 414.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={DoubleChocolateChip} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Iced Toffee Nut Crunch Latte",
            size: "TALL(Iced Tall Toffeenut Crunch Latte) .280 Kcal",
            describtion: "Delight your senses with our Iced Toffee Nut Crunch Latte. A...",
            price: "₹ 456.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={Americano} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Crunchy Red Hat Mocha Latte",
            size: "Shot(Short Crunchy Red Hat Mocha) .415 Kcal",
            describtion: "Almost too cute to drink, our Crunchy Red Hat Mocha Latte co...",
            price: "₹ 414.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={ColdCoffee} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Iced Crunchy Red Hat Mocha Latte",
            size: "TALL(Iced Tall Crunchy Red Hat Mocha) .396 Kcal",
            describtion: "Almost too cute to drink, our Iced Crunchy Red Hat Mocha Lat...",
            price: "₹ 456.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={JavaChipFrappuccino} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Gingerbread Latte",
            size: "SHORT(Short Gingerbread Latte) .204 Kcal",
            describtion: "Get your festive cheer on with our Gingerbread Latte. Sweet ...",
            price: "₹ 414.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={DoubleChocolateChip} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Iced Gingerbread Latte",
            size: "TALL(Iced Tall Gingerbread Latte) .259 Kcal",
            describtion: "Get your festive cheer on with our Iced Gingerbread Latte. S...",
            price: "₹ 456.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={Americano} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Classic Hot Coffee",
            size: "Classic Hot Coffee(237 mL) .105 Kcal",
            describtion: "Savour our premium coffee made with top 3% Arabica beans in ...",
            price: "₹ 157.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={ColdCoffee} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Caffe Americano",
            size: "SHORT(237 mL) .0 kcal",
            describtion: "Rich in flavour, full-bodied espresso with hot water in true...",
            price: "₹ 241.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={JavaChipFrappuccino} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Caffè Mocha",
            size: "SHORT(237 mL) .232 kcal",
            describtion: "We combine our rich in flavour, full-bodied espresso with bi...",
            price: "₹ 304.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={DoubleChocolateChip} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Hazelnut Caffe Latte",
            size: "SHORT(237 mL) .130 kcal",
            describtion: "Our dark, rich espresso balanced with Hazelnut flavored syru...",
            price: "₹ 304.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
    ]);

    const [Frappuccino, setFrappuccino] = useState([
        {
            image: <img src={FrappuccinoFirstImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Mocha Frappuccino",
            size: "PICCO(180 mL) .104 Kcal",
            describtion: "Dark, Rich in flavour espresso lies in wait under a smoothed...",
            price: "₹ 215.25",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={FrappuccinoSecondImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Crunchy Red Hat Mocha Frappuccino",
            size: "TALL(Tall Crunchy Red Hat Mocha Frappuccino) .552 Kcal",
            describtion: "Almost too cute to drink, our Crunchy Red Hat Mocha Frappucc...",
            price: "₹ 493.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={JavaChipFrappuccino} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Gingerbread Frappuccino",
            size: "TALL(Tall Gingerbread Frappuccino) .337 Kcal",
            describtion: "Get your festive cheer on with our Gingerbread Frappuccino. ...",
            price: "₹ 493.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={FrappuccinoThird} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Toffee Nut Crunch Frappuccino",
            size: "TALL(Tall Toffee Nut Crunch Frappuccino) .358 Kcal",
            describtion: "Delight your senses with our Toffee Nut Frappuccino. A perfe...",
            price: "₹ 493.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={FrappuccinoFirstImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Toffee Nut Crunch Creme Frappuccino",
            size: "TALL(Tall toffee nut crunch cream frappuccino) .372 Kcal",
            describtion: "Delight your senses with our Toffee Nut Crème Frappuccino. A...",
            price: "₹ 493.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={FrappuccinoSecondImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Crunchy Red Hat Mocha Creme Frappuccino",
            size: "TALL(Tall Crunchy Red Hat Mocha Cream Frappuc) .566 kcal",
            describtion: "Almost too cute to drink, our Crunchy Red Hat Mocha Crème Fr...",
            price: "₹ 493.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={JavaChipFrappuccino} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Gingerbread Creme Frappuccino",
            size: "TALL(Tall Gingerbread Cream Frappuccino) .351 Kcal",
            describtion: "Get your festive cheer on with our Gingerbread Crème Frappuc...",
            price: "₹ 493.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={FrappuccinoThird} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Caramel Java Chip Frappuccino",
            size: "TALL(354 mL) .398 kcal",
            describtion: "Rich in flavour coffee blended with milk, chocolate chips, c...",
            price: "₹ 383.25",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={FrappuccinoFirstImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Double Chocolate Chip Frappuccino",
            size: "TALL(354 mL) .415 kcal",
            describtion: "Rich mocha-flavored sauce meets up with chocolaty chips, mil...",
            price: "₹ 372.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={FrappuccinoSecondImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Coffee Frappuccino",
            size: "TALL(354 mL) .209 kcal",
            describtion: "Coffee meets milk and ice in a blender and together they cre...",
            price: "₹ 309.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={FrappuccinoThird} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Espresso Frappuccino",
            size: "TALL(354 mL) .195 kcal",
            describtion: "Coffee is combined with a shot of espresso and milk, then bl...",
            price: "₹ 336.00",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={DoubleChocolateChip} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Strawberries and Crème Frappuccino",
            size: "TALL(354 mL) .530 kcal",
            describtion: "Strawberries and milk are blended with ice and topped with a...",
            price: "₹ 351.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
    ]);

    const [beverages, setBeverages] = useState([
        {
            image: <img src={beveragesFirstImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Chocolate Milkshake",
            size: "TALL(354 mL) .PER SERVE (354 ml) - 632 Kcal",
            describtion: "Our Starbucks signature chocolate perfected for you as a smo...   ",
            price: "₹ 320.25",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={beveragesSecondImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Iced Signature Chocolate",
            size: "TALL(354 mL) .354 kcal",
            describtion: "Four cocoas and chilled milk over ice. Topped with chocolate...",
            price: "₹ 288.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={beveragesThirdImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Vanilla Milkshake",
            size: "TALL(354 mL) .PER SERVE (354ml) - 531 Kcal",
            describtion: "Your favourite Vanilla milkshake is now at Starbucks. A perf...",
            price: "₹ 320.25",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={beveragesFourthImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Strawberry Milkshake",
            size: "TALL(Tall Strawberry Milkshake) .PER SERVE (354ml) - 569 Kcal",
            describtion: "A Delicious milkshake for those with a sweet tooth and love ...",
            price: "₹ 320.25",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={beveragesFifthImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Signature Hot Chocolate",
            size: "PICCO(180 mL) .123 kcal",
            describtion: "Four Cocoas and fresh steamed milk with whipped vanilla topp...",
            price: "₹ 225.75",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={beveragesSixthImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Strawberry Acai Lemonade",
            size: "TALL(354 mL) .88 kcal",
            describtion: "Sweet strawberry flavours accented by acai notes, shaken wit...",
            price: "₹ 304.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={beveragesSeventhImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Mango Dragonfruit Refresher",
            size: "TALL(Tall Mango Dragonfruit Refresher) .102 Kcal",
            describtion: "This tropical-inspired pick-me-up - crafted with a clever co...",
            price: "₹ 304.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },

    ]);

    const [brewed, setBrewed] = useState([
        {
            image: <img src={BrewedFirstImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Chemex Pike Place Roast",
            size: "TALL(354 ML) .",
            describtion: "Chemex - Pike Place",
            price: "₹ 299.25",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={BrewedSecondImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Chemex India Estates Blend",
            size: "TALL(354 mL) .",
            describtion: "Chemex is a hybrid of pour over which is a drip brew and Fre...",
            price: "₹ 283.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={BrewedThirdImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Chemex Italian Roast",
            size: "TALL(354 ML) .",
            describtion: "Chemex is a hybrid of pour over which is a drip brew and Fre...",
            price: "₹ 283.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={AmericanoBrewedForthImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Chemex Kenya",
            size: "TALL(354 mL) .0 kcal",
            describtion: "Chemex is a hybrid of pour over which is a drip brew and Fre...",
            price: "₹ 283.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={BrewedFifthImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Chemex Sumatra",
            size: "TALL(354 mL) .PER SERVE (354 mL) - 0Kcal",
            describtion: "Chemex is a hybrid of pour over which is a drip brew and Fre...",
            price: "₹ 283.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={BrewedSixthImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Pour Over - Diwali Blend",
            size: "SHORT(237 mL) .0 kcal",
            describtion: "Enwrap your senses in notes of dusted cocoa that melt into a...",
            price: "₹ 262.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={BrewedSecondImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Pour Over India Estates Blend",
            size: "SHORT(237 mL) .0 kcal",
            describtion: "Pour-over is a beautifully simple and accessible way to brew...",
            price: "₹ 262.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={AmericanoBrewedForthImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Chemex Kenya",
            size: "TALL(354 mL) .0 kcal",
            describtion: "Chemex is a hybrid of pour over which is a drip brew and Fre...",
            price: "₹ 283.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={BrewedFifthImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Chemex Sumatra",
            size: "TALL(354 mL) .PER SERVE (354 mL) - 0Kcal",
            describtion: "Chemex is a hybrid of pour over which is a drip brew and Fre...",
            price: "₹ 283.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={BrewedSixthImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Pour Over - Diwali Blend",
            size: "SHORT(237 mL) .0 kcal",
            describtion: "Enwrap your senses in notes of dusted cocoa that melt into a...",
            price: "₹ 262.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },
        {
            image: <img src={AmericanoBrewedForthImg} alt='' className={Styles.DrinksPageContentCartImg} />,
            vegImg: <img src={VegImg} alt='' className={Styles.BestsellerVegImg} />,
            tittle: "Pour Over India Estates Blend",
            size: "SHORT(237 mL) .0 kcal",
            describtion: "Pour-over is a beautifully simple and accessible way to brew...",
            price: "₹ 262.50",
            button: <button className={Styles.BestsellerCardButton}>Add Item</button>
        },

    ]);


    const [drinksSubNavData, setDrinksSubNavData] = useState([
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButton} onClick={() => setGiftCard("Espresso")}>Espresso</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButton} onClick={() => setGiftCard("Frappuccino® Blended Beverages")}>Frappuccino® Blended Beverages</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButton} onClick={() => setGiftCard("Other Beverages")}>Other Beverages</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButton} onClick={() => setGiftCard("Brewed Coffee")}>Brewed Coffee</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButton} onClick={() => setGiftCard("Tea")}>Tea</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButton} onClick={() => setGiftCard("Cold Brew")}>Cold Brew</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButton} onClick={() => setGiftCard("Bottled Beverage")}>Bottled Beverage</button>,
        },

    ]);

    const [drinksSubNavDataButton, setDrinksSubNavDataButton] = useState([
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Hot</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Cold</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Milkshake</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Black</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Blended</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Coffeine Free</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Nitro</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>On Top</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Ice Cream</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Cream</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Brew</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Juice</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Ice Cream</button>,
        },
        {
            title: <button className={Styles.DrinksPageSubNavContentTextButtonData}>Coffeine Free</button>,
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
        <div className={Styles.DrinksPageMainContainer}>
            <div className={Styles.DrinksPageSubNavContentData}>
                <div id="main-slider-container" className={Styles.DrinksPageSubNavContainer}>
                    <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
                    <div id="slider" className={Styles.DrinksPageSubNavContent}>
                        {
                            drinksSubNavData.map((data, index) => {
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
            <div className={Styles.DrinksPageSubNavContentDataTwo}>
                <img src={Union} alt='' />
                <div className={Styles.ButtonContainerDataFilter}>
                    {
                        drinksSubNavDataButton.map((data, index) => {
                            return (
                                <div key={index} >
                                    {data.title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {giftCard === "Espresso" ?
                <div className={Styles.DrinksPageBestsellerContainer}>
                    <p className={Styles.DrinksPageBestsellerContainerTittle}>Espresso</p>
                    <p className={Styles.DrinksPageBestsellerContainerText}>Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.</p>
                    <div className={Styles.DrinksPageContent}>
                        {bestseller.map((data, index) => (
                            <div key={index} className={Styles.DrinksPageContentCart}>
                                {data.image}
                                <div className={Styles.DrinksPageContentCartData}>
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
                : giftCard === "Frappuccino® Blended Beverages" ?
                    <div className={Styles.DrinksPageBestsellerContainer}>
                        <p className={Styles.DrinksPageBestsellerContainerTittle}>Frappuccino® Blended Beverages</p>
                        <p className={Styles.DrinksPageBestsellerContainerText}>The Frappuccino® is a blended beverage unique to ATTI CAFE.</p>
                        <div className={Styles.DrinksPageContent}>
                            {Frappuccino.map((data, index) => (
                                <div key={index} className={Styles.DrinksPageContentCart}>
                                    {data.image}
                                    <div className={Styles.DrinksPageContentCartData}>
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
                    </div> : giftCard === "Other Beverages" ?
                        <div className={Styles.DrinksPageBestsellerContainer}>
                            <p className={Styles.DrinksPageBestsellerContainerTittle}>Other Beverages</p>
                            <p className={Styles.DrinksPageBestsellerContainerText}>The contemporary taste of ATTI CAFE in a coffee-free avatar.</p>
                            <div className={Styles.DrinksPageContent}>
                                {beverages.map((data, index) => (
                                    <div key={index} className={Styles.DrinksPageContentCart}>
                                        {data.image}
                                        <div className={Styles.DrinksPageContentCartData}>
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
                        : giftCard === "Brewed Coffee" ?
                            <div className={Styles.DrinksPageBestsellerContainer}>
                                <p className={Styles.DrinksPageBestsellerContainerTittle}>Brewed Coffee</p>
                                <p className={Styles.DrinksPageBestsellerContainerText}>The ATTI CAFE brews are made with premium estate coffee to impart a unique flavour.</p>
                                <div className={Styles.DrinksPageContent}>
                                    {brewed.map((data, index) => (
                                        <div key={index} className={Styles.DrinksPageContentCart}>
                                            {data.image}
                                            <div className={Styles.DrinksPageContentCartData}>
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
                            </div> : giftCard === "Tea" ?
                                <div className={Styles.DrinksPageBestsellerContainer}>
                                    <p className={Styles.DrinksPageBestsellerContainerTittle}>Tea</p>
                                    <p className={Styles.DrinksPageBestsellerContainerText}>An exclusive tea experience championed by ATTI CAFE India.</p>
                                    <div className={Styles.DrinksPageContent}>
                                        {bestseller.map((data, index) => (
                                            <div key={index} className={Styles.DrinksPageContentCart}>
                                                {data.image}
                                                <div className={Styles.DrinksPageContentCartData}>
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
                                </div> : giftCard === "Cold Brew" ?
                                    <div className={Styles.DrinksPageBestsellerContainer}>
                                        <p className={Styles.DrinksPageBestsellerContainerTittle}>Cold Brew</p>
                                        <p className={Styles.DrinksPageBestsellerContainerText}>Slow-steeped, complex, and full-bodied, the Cold Brew is an experience.</p>
                                        <div className={Styles.DrinksPageContent}>
                                            {bestseller.map((data, index) => (
                                                <div key={index} className={Styles.DrinksPageContentCart}>
                                                    {data.image}
                                                    <div className={Styles.DrinksPageContentCartData}>
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
                                    </div> : giftCard === "Bottled Beverage" ?
                                        <div className={Styles.DrinksPageBestsellerContainer}>
                                            <p className={Styles.DrinksPageBestsellerContainerTittle}>Bottled Beverage</p>
                                            <p className={Styles.DrinksPageBestsellerContainerText}>Bottled Beverage</p>
                                            <div className={Styles.DrinksPageContent}>
                                                {bestseller.map((data, index) => (
                                                    <div key={index} className={Styles.DrinksPageContentCart}>
                                                        {data.image}
                                                        <div className={Styles.DrinksPageContentCartData}>
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
                                        </div> : ""}
        </div>
    )
}
export default Drinks