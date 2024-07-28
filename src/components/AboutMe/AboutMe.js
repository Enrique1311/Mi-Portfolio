import React from "react";
import "./AboutMe.css";
import Subtitle from "../utilities/Subtitle/Subtitle";
import HireResumeButtons from "../utilities/HireResumeButtons/HireResumeButtons";
import { useContext } from "react";
import LangContext from "../../context/LangContext";

const AboutMe = () => {
	const { texts } = useContext(LangContext);

	return (
		<div
			className="about-me-container"
			id="about-me"
		>
			<Subtitle>{texts.aboutMeTitle}</Subtitle>
			<div className="about-me">
				<div className="about-me-photo"></div>
				<div className="about-me-details">
					<div className="about-me-details-content">
						<h2>{texts.aboutMeSubtitle}</h2>
						<p>{texts.aboutMeContent}</p>
					</div>
					<HireResumeButtons className="about-me-button" />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
