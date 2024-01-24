import React from "react";
import Typical from "react-typical";
import "./ProfileDetails.css";
import SocialNetworks from "../utilities/SocialNetworks/SocialNetworks";
import HireResumeButtons from "../utilities/HireResumeButtons/HireResumeButtons";
import langContext from "../../context/langContext";
import { useContext } from "react";

const ProfileDetails = () => {
	const { texts } = useContext(langContext);

	return (
		<div className="profile-details">
			<SocialNetworks />
			<div className="profile-details-name">
				<span className="primary-text">
					{" "}
					{texts.hello}
					<span className="name-text">Enrique J. Spinelli</span>
				</span>
			</div>
			<div className="profile-details-role">
				<span className="primary-text">
					<p className="profile-extra">{texts.subtitle}</p>{" "}
					<h1>
						{" "}
						<Typical
							loop={Infinity}
							steps={[
								"Full Stack",
								1500,
								"Html",
								1500,
								"Css",
								1500,
								"Javascript",
								1500,
								"React Js",
								1500,
								"React Native",
								1500,
							]}
						/>
					</h1>
				</span>
			</div>
			<HireResumeButtons />
		</div>
	);
};

export default ProfileDetails;
