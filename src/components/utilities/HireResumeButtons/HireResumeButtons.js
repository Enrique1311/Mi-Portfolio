import React from "react";
import { useContext } from "react";
import LangContext from "../../../context/LangContext";
import MyButton from "../Button/MyButton";
import "./HireResumeButtons.css";
import WhatsappButton from "../../WhatsappButton.js/WhatsappButton";

const HireResumeButtons = () => {
	const { texts } = useContext(LangContext);

	return (
		<div className="hire-resume-buttons">
			<a href="/#contact-me">
				<WhatsappButton />
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
