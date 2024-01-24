import React, { useContext } from "react";
import MyButton from "../utilities/Button/MyButton";
import LangContext from "../../context/LangContext";

const WhatsappButton = () => {
	const { texts } = useContext(LangContext);

	return (
		<a href="https://wa.me/5491149144055">
			<MyButton>{texts.send}</MyButton>{" "}
		</a>
	);
};

export default WhatsappButton;
