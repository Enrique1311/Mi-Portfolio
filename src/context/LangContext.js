import React, { createContext } from "react";
import { useState } from "react";
import { FaUserGraduate, FaHistory, FaMusic } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

const LangContext = createContext();

const languages = {
	spanish: {
		//navlinks
		home: "Inicio",
		about: "Sobre mí",
		resume: "Resumen",
		projects: "Proyectos",
		contacts: "Contactos",
		//profile
		hello: "¡Hola! Soy ",
		subtitle: "Desarrollador Full Stack de aplicaciones web y para celulares.",
		//hireResumeButtons
		contactButton: "Contáctame",
		cvButton: "Obtener CV",
		cvPdf: "spanish_cv_enrique_spinelli.pdf",
		//WhatsappButton
		send: "Enviar WhatsApp",
		//about-me
		aboutMeTitle: "Sobre mí",
		aboutMeSubtitle: "¿Por qué elegirme?",
		aboutMeContent:
			"Amo la programación. No me rindo ante los desafíos. Creo sitios web y aplicaciones para celulares ágiles, intuitivos, modernos, visualmente atractivos y adaptables a todos los dispositivos para que los usuarios tengan un experiencia placentera. Quiero seguir aprendiendo de mis compañeros y aportar mis conocimientos.",
		//resume
		resumeTitle: "Resumen",
		resumeItemsContent: [
			{
				title: "Educación",
				icon: <FaUserGraduate />,
				content:
					"Actualmente: Estudiando Python y ampliando mi inglés en Platzi Academy.",
				content2: "2022: Sass, MongoDB, Express y SQLite como autodidacta.",
				content3:
					"2022: Desarrollador de Aplicaciones para Celulares en Coderhouse",
				content4: "2021: Desarrollador WEb Full Stack en Numen Academy.",
				open: false,
			},
			{
				title: "Historial",
				icon: <FaHistory />,
				content:
					"Febrero 2021 hasta la actualidad: desarrollador web freelance",
				content2: "2019 al 2021: Uber. Conductor profesional",
				content3: "2014 al 2019: Sides S.A.. Operario",
				content4: "2009 al 2014: SR Viajes. Conductor profesional.",
				content5:
					"1997 al 2009: MOCBA S.A.. Me desempeñe como control de servicio, inspector, Jefe de Tránsito y en tesorería.",
				open: false,
			},
			{
				title: "Habilidades",
				icon: <MdOutlineComputer />,
				content:
					"Desarrollo Web: Html, Css, Javascript, ReactJs, NextJs React Native, Git, SQLite, MongoDB, Strapi, Express, NodeJs, Bootstrap, Axios, Material UI, Sass, Tailwind...",
				content2: "Aplicaciones para celulares: React Native.",
				content3: "Inglés intermedio.",
				content4:
					"Soy proactivo, disciplinado, perseverante, original y me gusta resolver los desafíos con la máxima eficiencia y eficacia posibles.",
				open: false,
			},
			{
				title: "Pasiones",
				icon: <FaMusic />,
				content: "Me encanta ir a recitales de rock.",
				content2: "Viajar y conocer lugares nuevos.",
				content3: "Hacer páginas web es otra actividad que disfruto mucho.",
				content4:
					"¡Estar con mi esposa y mis dos hijos es lo que más me llena el alma!",
				open: false,
			},
		],
		//projects
		projectsTitle: "Proyectos",
		gitHubButton: "Código",
		showButton: "Ver",
		//footer
		footerTitle: "Contactos",
		footerContent:
			"Si te gustan mis trabajos y deseas contratarme o realizarme alguna pregunta, aquí te dejo algunas vías de comunicación. O sólo puedes dejar tu consulta en este formulario. ¡Gracias!",
		formName: "Nombre",
		formEmail: "Email",
		formMessage: "Mensaje",
		formButton: "Enviar",
		emailMessage: "¡Los datos han sido enviados!",
		nameErrorMessage: "¡El Nombre es requerido!",
		nameErrorMessage2:
			"¡El campo Nombre sólo acepta letras y espacios en blanco!",
		emailErrorMessage: "!El Email es requerido!",
		emailErrorMessage2: "¡El Email es incorrecto!",
		messageErrorMessage: "!El campo Mensaje es requerido!",
		messageErrorMessage2: "¡El campo Mensaje acepta hasta 250 caracteres!",
		copyright: "Todos los derechos reservados",
	},

	english: {
		//navlinks
		home: "Home",
		about: "About me",
		resume: "Resume",
		projects: "Projects",
		contacts: "Contacts",
		//profile
		hello: "Hello! I am ",
		subtitle: "Full Stack Web and Mobile Application Developer",
		//hireResumeButtons
		contactButton: "Contact me",
		cvButton: "Download CV",
		cvPdf: "english_cv_enrique_spinelli.pdf",
		//WhatsappButton
		send: "Send WhatsApp",
		//about-me
		aboutMeTitle: "About me",
		aboutMeSubtitle: "Why chosse me?",
		aboutMeContent:
			"I love programming. I don't give up on challenges. I create agile, intuitive, modern, visually appealing and all-device websites and mobile apps for a pleasant experience. I want to continue learning from my colleagues and contribute my knowledge.",
		//resume
		resumeTitle: "Resume",
		resumeItemsContent: [
			{
				title: "Education",
				icon: <FaUserGraduate />,
				content:
					"Currently: Studying Python and expanding my English in Platzi Academy.",
				content2: "2022: Sass, MongoDB, Express and SQLite as self-taught.",
				content3: "2022: Mobile Application Developer at Coderhouse.",
				content4: "2021: Full Stack WEB Developer at Numen Academy.",
				open: false,
			},
			{
				title: "History",
				icon: <FaHistory />,
				content: "February 2021 to present: Freelance web developer",
				content2: "2019 to 2021: Uber. Professional driver.",
				content3: "2014 to 2019: Sides S.A.. Operator.",
				content4: "2009 to 2014: SR Viajes. Professional driver.",
				content5:
					"1997 to 2009: MOCBA S.A.. I worked as service control, inspector, Traffic Chief and in treasury.",
				open: false,
			},
			{
				title: "Skills",
				icon: <MdOutlineComputer />,
				content:
					"Web development: Html, Css, Javascript, ReactJs, NextJs, React Native, Git, SQLite, Strapi, MongoDB, Express, NodeJs, Axios, Material UI, Sass, Bootstrap, Tailwind...",
				content2: "Mobile apps: React Native.",
				content3: "Intermediate English.",
				content4:
					"I am proactive, disciplined, persevering, original and I like to solve challenges as efficiently and effectively as possible.",
				open: false,
			},
			{
				title: "Hobbies",
				icon: <FaMusic />,
				content: "Going to rock concerts.",
				content2: "Traveling and knowing new places.",
				content3: "Making web sites is another activity that I really enjoy.",
				content4:
					"¡Being with my wife and my two children is what fills my soul the most!",
				open: false,
			},
		],
		//projects
		projectsTitle: "Projects",
		gitHubButton: "Code",
		showButton: "Show",
		//footer
		footerTitle: "Contacts",
		footerContent:
			"If you like my work and want to hire me or ask me any questions, here are some ways of communication. Or you can only leave your query in this form. Thank you!",
		formName: "Name",
		formEmail: "Email",
		formMessage: "Message",
		formButton: "Submit",
		emailMessage: "The data has been sent!",
		nameErrorMessage: "The Name is required!",
		nameErrorMessage2: "The Name field only accepts letters and whitespace!",
		emailErrorMessage: "The Email is required!",
		emailErrorMessage2: "The Email field is incorrect!",
		messageErrorMessage: "The field Message is required!",
		messageErrorMessage2: "The Message field accepts up to 250 characters!",
		copyright: "All rights reserved",
	},
};

const LangProvider = ({ children }) => {
	const [language, setLanguage] = useState("english");
	const [texts, setTexts] = useState(languages[language]);

	const handleLanguageToSpanish = (e) => {
		setLanguage("spanish");
		setTexts(languages.spanish);
	};
	const handleLanguageToEnglish = (e) => {
		setLanguage("english");
		setTexts(languages.english);
	};
	const data = { texts, handleLanguageToSpanish, handleLanguageToEnglish };
	return <LangContext.Provider value={data}>{children}</LangContext.Provider>;
};

export { LangProvider };

export default LangContext;
