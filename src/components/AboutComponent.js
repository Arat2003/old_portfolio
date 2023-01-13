import React from "react";
import face from "../images/face.jpg";
import "./styles/about.css";

const AboutComponent = () => {
	return (
		<section className="right-section__section about-section">
			<img
				className="about__face-img"
				src={face}
				alt="Me!"
				height="337"
				width="600"
			/>
			<div className="about__text-wrapper">
				<div className="text-wrapper__card">
					<p>
						I'm a 19 year old USC undergrad studying CS and Business based in
						LA. Creating things, especially software has been my passion for
						many years and I have been studying coding for over 5 years. <br />
						This passion has led me to explore and complete different projects
						such as videogames (created in HS using Construct3), websites and
						Discord bots. Currently, I spend my time working on Front-end
						projects and trying different emerging frameworks! As of now, I
						mainly use React.js, Apollo GraphQL, and I also do OOP using C++.
					</p>
				</div>

				<div className="text-wrapper__card">
					<p>
						Outside of CS, I'm big into philosophy (I am still debating whether
						or not to pick up the minor), film, and videogames!
						<br />
					</p>

					<p style={{ fontWeight: "600" }}>My favorite directors are:</p>
					<ul>
						<li>Guilllermo Del Toro</li>
						<li>Quentin Tarantino</li>
						<li>Hayao Miyazaki</li>
						<li>David Fincher</li>
					</ul>

					<p style={{ fontWeight: "600" }}>My favorite films:</p>
					<ul>
						<li>Se7en</li>
						<li>Once Upon a Time In Hollywood</li>
						<li>Soul</li>
						<li>Princess Mononoke</li>
						<li>Hellboy</li>
						<li>Shawshank Redemption</li>
					</ul>
				</div>

				<div className="text-wrapper__card">
					<p>
						I am very interested in learning more about AI, machine learning and
						especially Natural Language Processing. While I was developing
						Discord Bots, I wished that I could take a step further and dive
						deeper into sentiment analysis to fcreate speech-recognition bots or
						even my own HAL-9000. However, I knew that I didn't have enough
						experience to do so. That made me enroll at USC, where I believe
						that I will gain such knowledge that will allow me to be a part of
						the development of a branch that we will constantly see in the
						future.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutComponent;
