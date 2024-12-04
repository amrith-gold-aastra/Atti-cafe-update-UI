import React, { useState } from "react";
import Styles from "./Index.module.css";
import BannerGift from "../../../assets/images/Dashboards_Banner_Gift.png"
import Bestseller from "../../../assets/images/Bestseller.png";
import Drinks from "../../../assets/images/Drinks.png";
import Food from "../../../assets/images/Food.png";
import Merchandise from "../../../assets/images/Merchandise.png";
import CoffeeAtHome from "../../../assets/images/CoffeeAtHome.png";
import ReadyToEat from "../../../assets/images/ReadyToEat.png";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import VegImg from "../../../assets/images/VegImg.png"
import { MotionUp } from "../../../assets/animations/Motionup";

const HomePage = () => {

	const [handcrafted, setHandcrafted] = useState([
		{
			Img: <img src={Bestseller} alt="Bestseller" className={Styles.handcraftedImg} />,
			Text: "Bestseller",
		},
		{
			Img: <img src={Drinks} alt="Drinks" className={Styles.handcraftedImg} />,
			Text: "Drinks",
		},
		{
			Img: <img src={Food} alt="Food" className={Styles.handcraftedImg} />,
			Text: "Food",
		},
		{
			Img: <img src={Merchandise} alt="Merchandise" className={Styles.handcraftedImg} />,
			Text: "Merchandise",
		},
		{
			Img: <img src={CoffeeAtHome} alt="Coffee At Home" className={Styles.handcraftedImg} />,
			Text: "Coffee At Home",
		},
		{
			Img: <img src={ReadyToEat} alt="Ready to Eat" className={Styles.handcraftedImg} />,
			Text: "Ready to Eat",
		}
	]);

	const [barista, setBarista] = useState([
		{
			Img: <img src={CoffeeAtHome} alt="" className={Styles.CarosualCartImg} />,
			VegImg: <img src={VegImg} alt="" className={Styles.CarosualCartVegImg} />,
			Title: "Cappuccino",
			Description: " SHORT(237 mL).284 kcal",
			Amount: "₹ 309.20",
			Button: <button className={Styles.BaristaSlideCardButton}>Add Item</button>,
		},
		{
			Img: <img src={CoffeeAtHome} alt="" className={Styles.CarosualCartImg} />,
			VegImg: <img src={VegImg} alt="" className={Styles.CarosualCartVegImg} />,
			Title: "Cappuccino",
			Description: " SHORT(237 mL).284 kcal",
			Amount: "₹ 309.20",
			Button: <button className={Styles.BaristaSlideCardButton}>Add Item</button>,
		},
		{
			Img: <img src={CoffeeAtHome} alt="" className={Styles.CarosualCartImg} />,
			VegImg: <img src={VegImg} alt="" className={Styles.CarosualCartVegImg} />,
			Title: "Cappuccino",
			Description: " SHORT(237 mL).284 kcal",
			Amount: "₹ 309.20",
			Button: <button className={Styles.BaristaSlideCardButton}>Add Item</button>,
		},
		{
			Img: <img src={CoffeeAtHome} alt="" className={Styles.CarosualCartImg} />,
			VegImg: <img src={VegImg} alt="" className={Styles.CarosualCartVegImg} />,
			Title: "Cappuccino",
			Description: " SHORT(237 mL).284 kcal",
			Amount: "₹ 309.20",
			Button: <button className={Styles.BaristaSlideCardButton}>Add Item</button>,
		},
		{
			Img: <img src={CoffeeAtHome} alt="" className={Styles.CarosualCartImg} />,
			VegImg: <img src={VegImg} alt="" className={Styles.CarosualCartVegImg} />,
			Title: "Cappuccino",
			Description: " SHORT(237 mL).284 kcal",
			Amount: "₹ 309.20",
			Button: <button className={Styles.BaristaSlideCardButton}>Add Item</button>,
		}
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
		<div className={Styles.HomePageMainContainer}>
			<MotionUp delay={0.1}>
				<div className={Styles.HomePageNavContainer}>
					<button className={Styles.HomePageNavContainerButton}>Know More</button>
				</div>
			</MotionUp>
			<div className={Styles.HomepageCardContainer}>
				<div className={Styles.HomepageBannerCard}>
					<img src={BannerGift} alt="" className={Styles.HomepageBannerCardImg} />
					<div className={Styles.HomepageBannerCardContentField}>
						<p className={Styles.HomepageBannerCardFielsTextOne}>Gift from ATTI CAFE</p>
						<p className={Styles.HomepageBannerCardFielsTextPhera}>This festive season, we bring to you the perfect gifting story from our India exclusive limited-edition range</p>
						<div className={Styles.HomepageBannerCardFielsAmountContent}>
							<p className={Styles.HomepageBannerCardFielsAmountContentText}>Starting From</p>
							<p className={Styles.HomepageBannerCardFielsAmountContentText}>₹350.00</p>
						</div>
					</div>
					<button className={Styles.HomepageBannerCardButton}>Know more</button>
				</div>
				<div className={Styles.HomePageHandCraftedContainer}>
					<p className={Styles.HomePageHandCraftedContainerTitle}>Handcrafted Curations</p>
					<div className={Styles.HomePageHandCraftedCart}>
						{handcrafted.map((data, index) => (
							<div key={index} className={Styles.HomePageHandCraftedCartFeild}>
								{data.Img}
								<p className={Styles.HomePageHandCraftedCartText}>{data.Text}</p>
							</div>
						))}
					</div>
				</div>

			</div>
			<div className={Styles.HomePageBaristaRecommends}>
				<div className={Styles.HomePageBaristaRecommendsHeaderContainer}>
					<p className={Styles.HomePageBaristaRecommendsTitle}>Barista Recommends</p>
					<p className={Styles.HomePageBaristaRecommendsDiscoverMore}>View Menu</p>
				</div>
				<div className={Styles.HomePageBaristaRecommendsCarousel}>

					<div id="main-slider-container" className={Styles.CarosualMainContainer}>
						<MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
						<div id="slider">
							{
								barista.map((slide, index) => {
									return (
										<div className="slider-card" key={index} >
											<div className={Styles.BaristaRecommendsCard}>
												<div className={Styles.BaristaRecommendsCardImgAndData}>
													{slide.Img}
													<div className={Styles.BaristaRecommendsCardImgAndDataContent}>
														{slide.VegImg}
														<p className={Styles.BaristaRecommendsCardContentTittle}>{slide.Title}</p>
														<p className={Styles.BaristaRecommendsCardContentDescription}>{slide.Description}</p>
													</div>
												</div>
												<div className={Styles.BaristaRecommendsCardButtonContent}>
													<p className={Styles.BaristaRecommendsCardContentAmount}>{slide.Amount}</p>
													{slide.Button}
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
						<MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
					</div>
				</div>
			</div>
			<div className={Styles.HomePageBaristaRecommendsWorldCoffee}>
				<div className={Styles.HomePageBaristaRecommendsHeaderContainer}>
					<p className={Styles.HomePageBaristaRecommendsTitle}>Learn more about the world of coffee!</p>
					<p className={Styles.HomePageBaristaRecommendsDiscoverMore}>Discover More</p>
				</div>

				<div className={Styles.HomePageBaristaRecommendsWorldCoffeeContainer}>
					<p className={Styles.HomePageBaristaRecommendsWorldCoffeeCoffeeCulture}>Coffee Culture</p>
					<div className={Styles.HomePageBaristaRecommendsWorldCoffeeCartContent}>
						<p className={Styles.HomePageBaristaRecommendsWorldCoffeeCartTitle}>Art & Science Of Coffee Brewing </p>
						<p className={Styles.HomePageBaristaRecommendsWorldCoffeeCartDescription}> Master the perfect brew with AttiCoffee! Learn the art and science of coffee brewing. </p>
						<button className={Styles.HomePageBaristaRecommendsWorldCoffeeCartButton}>Know More</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
