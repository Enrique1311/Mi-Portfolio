import React from "react";
import "./AboutMe.css";
import Subtitle from "../utilities/Subtitle/Subtitle";
import HireResumeButtons from "../utilities/HireResumeButtons/HireResumeButtons";

const AboutMe = () => {
	return (
		<div className="about-me-container" id="about-me">
			<Subtitle>Sobre mí</Subtitle>
			<div className="about-me" data-aos="zoom-in">
				<div className="about-me-photo" data-aos="zoom-in"></div>
				<div className="about-me-details">
					<div className="about-me-details-content" data-aos="zoom-in">
						<h2>¿Por qué elegirme?</h2>
						<p>
							Amo la programación. No me rindo ante los desafíos. Creo sitioss
							web y aplicaciones para celulares ágiles, intuitivos, modernos,
							visualmente atractivos y adaptables a todos los dispositivos para
							que los usuarios tengan una experiencia placentera. Quiero seguir
							aprendiendo de mis compañeros y aportar mis conocimientos.
						</p>
					</div>
					<HireResumeButtons className="about-me-button" />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
