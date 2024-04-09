import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./SocialNetworks.css";

const SocialNetworks = () => {
	return (
		<div className="social-icons">
			<div>
				<a href="https://github.com/Enrique1311">
					<i className="github">
						<FaGithubSquare className="icons" />
					</i>
				</a>
			</div>
			<div>
				<a href="https://linkedin.com/in/enrique-javier-spinelli-dev">
					<i className="linkedin">
						<FaLinkedin className="icons" />
					</i>
				</a>
			</div>
		</div>
	);
};

export default SocialNetworks;
