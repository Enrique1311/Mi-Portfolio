import React from "react";
import "./AboutMe.css";
import Subtitle from "../utilities/Subtitle/Subtitle";
import HireResumeButtons from "../utilities/HireResumeButtons/HireResumeButtons";
import { useContext } from "react";
import langContext from "../../context/langContext";

const AboutMe = () => {
	const { texts } = useContext(langContext);

	return (
		<div
			className="about-me-container"
			id="about-me"
		>
			<Subtitle>{texts.aboutMeTitle}</Subtitle>
			<div
				className="about-me"
				data-aos="zoom-in"
			>
				<div
					className="about-me-photo"
					data-aos="zoom-in"
				></div>
				<div className="about-me-details">
					<div className="about-me-details-content">
						<h2>{texts.aboutMeSubtitle}</h2>
						<p>{texts.aboutMeContent}</p>
					</div>
					<HireResumeButtons
						className="about-me-button"
						data-aos="fade-right"
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
