import React from "react";
import SocialNetworks from "../utilities/SocialNetworks/SocialNetworks";
import "./Footer.css";
import MyForm from "./MyForm";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Subtitle from "../utilities/Subtitle/Subtitle";
import { useContext } from "react";
import LangContext from "../../context/LangContext";
// import MyButton from "../utilities/Button/MyButton";
import WhatsappButton from "../WhatsappButton.js/WhatsappButton";

const Footer = () => {
	const { texts } = useContext(LangContext);

	return (
		<div
			className="footer-container"
			id="contact-me"
		>
			<Subtitle>{texts.footerTitle}</Subtitle>
			<div
				className="footer"
				data-aos="zoom-in"
			>
				<div className="footer-content">
					<MyForm />
					<div className="footer-contacts">
						<div
							className="comment"
							data-aos="zoom-in"
						>
							<p>{texts.footerContent}</p>
						</div>
						<div
							className="whatsapp-email-container"
							data-aos="zoom-in"
						>
							<div className="whatsapp-email">
								{" "}
								<WhatsappButton />
							</div>{" "}
							<div className="whatsapp-email">
								<FaWhatsapp className="contact-logo" />
								<p>+54 9 11 4914-4055</p>
							</div>{" "}
							<div
								className="whatsapp-email"
								data-aos="zoom-in"
							>
								<AiFillMail className="contact-logo" />
								<p>enriquespinelli.coder@gmail.com</p>
							</div>
						</div>
					</div>
					<div
						className="footer-social"
						data-aos="zoom-in"
					>
						<SocialNetworks />
						<div className="footer-photo"></div>
					</div>
				</div>
			</div>
			<p className="copyright">{texts.copyright}.</p>
		</div>
	);
};

export default Footer;
