import React from "react";
import { useContext } from "react";
import langContext from "../../../context/langContext";
import MyButton from "../Button/MyButton";
import "./HireResumeButtons.css";

const HireResumeButtons = () => {
	const { texts } = useContext(langContext);

	return (
		<div className="hire-resume-buttons">
			<a href="/#contact-me">
				<MyButton>{texts.contactButton}</MyButton>
			</a>
			<a
				href={texts.cvPdf}
				download={texts.cvPdf}
			>
				<MyButton>{texts.cvButton}</MyButton>
			</a>
		</div>
	);
};

export default HireResumeButtons;
