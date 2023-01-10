import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./styles/home.css";

const HomeComponent = ({ isDesktop }) => {
	const [animationIsComplete, setAnimationIsComplete] = useState(false);

	const handleTypewriter = (typewriter) => {
		typewriter
			.start()
			.typeString("Welc")
			// .pauseFor(500)
			.deleteAll()
			.typeString("Hi, I'm Arat!")
			.pauseFor(500)
			.callFunction(() => setAnimationIsComplete(true));
	};

	return (
		<section className="right-section__section home-section">
			<div
				className={`home__typewriter ${
					isDesktop ? "desktop__typewrite" : null
				}`}
			>
				<Typewriter onInit={(typewriter) => handleTypewriter(typewriter)} />

				<h4 className={`${animationIsComplete ? "show-description" : null}`}>
					A CSBA Major @ USC looking to dive deeper into Web Dev
				</h4>
			</div>
			<section className="home__socials">
				<a
					href="https://github.com/Arat2003"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub />
				</a>
				<a
					href="https://www.linkedin.com/in/aratguneri/"
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedin />
				</a>
			</section>
		</section>
	);
};

export default HomeComponent;
