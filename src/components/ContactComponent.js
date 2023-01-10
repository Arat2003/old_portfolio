import React from "react";
import "./styles/contact.css";

const ContactComponent = () => {
	return (
		<div className="contact-section">
			<h3>Contact me!</h3>
			<div className="contact-section__links">
				<a
					href="https://www.linkedin.com/in/aratguneri/"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
				<a
					href="mailto:arat2003@hotmail.com"
					target="_blank"
					rel="noreferrer"
				>
					Email
				</a>
				<a
					href="https://github.com/Arat2003"
					target="_blank"
					rel="noreferrer"
				>
					Github
				</a>
				<a
					href="https://www.instagram.com/aratgs/"
					target="_blank"
					rel="noreferrer"
				>
					Instagram
				</a>
				<a
					href="https://docs.google.com/document/d/1gLT_UWap7V4ziVxgHHYJzebkrrIiXq1vGosNXQqzbzg/edit?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					Resume
				</a>
			</div>
		</div>
	);
};

export default ContactComponent;
