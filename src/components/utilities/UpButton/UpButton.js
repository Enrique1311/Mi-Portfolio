import React from "react";
import "./UpButton.css";
import { IoIosArrowUp } from "react-icons/io";

const UpButton = () => {
	return (
		<a
			href="/#home"
			className="up-arrow"
		>
			<IoIosArrowUp />
		</a>
	);
};

export default UpButton;
