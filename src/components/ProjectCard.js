import React from "react";

const ProjectCard = ({ project }) => {
	const { image, link, title, alt, description } = project;
	return (
		<div className="project-card">
			<img
				src={image}
				width="307px"
				height="244px"
				alt={alt}
				className="card__image"
			/>
			<a href={link}>
				<h2>{title}</h2>
			</a>
			<p>{description}</p>
		</div>
	);
};

export default ProjectCard;
