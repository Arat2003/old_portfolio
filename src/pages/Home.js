import React, { useRef } from "react";
import HomeComponent from "../components/HomeComponent";
import AboutComponent from "../components/AboutComponent";
import ProjectsComponent from "../components/ProjectsComponent";
// import ContactComponent from "../components/ContactComponent";
import useWindowSize from "../hooks/useWindowSize";
import "./styles/home.css";

const Home = () => {
	const { width } = useWindowSize();
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const portfolioRef = useRef(null);
	const isDesktop = width < 768 ? false : true;

	const scrollToContent = (ref) => {
		console.log("scrolled");
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<main className={`home ${isDesktop ? "home__desktop" : ""}`}>
			<div
				className="left-section"
				style={{ display: `${isDesktop ? "" : "none"}` }}
			>
				<section className="content-nav-link-container">
					<h2 onClick={() => scrollToContent(homeRef)}>Home</h2>
				</section>
				<section className="content-nav-link-container">
					<h2 onClick={() => scrollToContent(aboutRef)}>
						<br />
						<br />
						<br />
						About
					</h2>
				</section>
				<section className="content-nav-link-container">
					<h2 onClick={() => scrollToContent(portfolioRef)}>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						Portfolio
					</h2>
				</section>
			</div>
			<div className="right-section">
				<div
					className={`${isDesktop ? "right-section__section-desktop" : ""}`}
					ref={homeRef}
					id="home"
				>
					<HomeComponent />
				</div>
				<div
					className={`${isDesktop ? "right-section__section-desktop" : ""}`}
					ref={aboutRef}
					id="about"
				>
					<AboutComponent />
				</div>
				<div
					className={`${isDesktop ? "right-section__section-desktop" : ""}`}
					ref={portfolioRef}
					id="portfolio"
				>
					<ProjectsComponent />
				</div>
			</div>
			{/* <ContactComponent /> */}
		</main>
	);
};

export default Home;
