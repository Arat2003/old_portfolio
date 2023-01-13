import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles/projects.css";
import minestats from "../images/minestats.png";
import metronome from "../images/metronome.png";

const projects = [
	{
		image: minestats,
		link: "https://discord.com/oauth2/authorize?client_id=720525129850814494&permissions=388160&scope=bot",
		title: "Minestats",
		alt: "Minestats Command Execution",
		description:
			"Discord bot developed for Hypixel players who want to check their stats in an easy and efficient way. Haven't updated after Discord's API most recent update.",
	},
	{
		image: metronome,
		link: "/project/metronome",
		title: "Simple Metronome",
		alt: "Metronome Project",
		description:
			"Simple metronome focused on applying new knowledge of audio and useEffect hook.",
	},
];

const ProjectsComponent = ({ isMobile }) => {
	return (
		<section className="right-section__section projects-section">
			<h1 className="projects-section__title">Projects</h1>
			<div className="projects-container">
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						project={project}
					/>
				))}
			</div>
			{/* <ProjectCard />
			<ProjectCard /> */}
		</section>
	);
};

export default ProjectsComponent;

// {
// 	image: minestats,
// 	link: "",
// 	title: "",
//  alt: "",
// 	description:
// 		"",
// },
