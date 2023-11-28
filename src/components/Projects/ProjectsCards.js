import React from "react";
import "./ProjectsCards.css";
import img1 from "../../assets/portf.png";
import img2 from "../../assets/calculator.png";
import img3 from "../../assets/movie.png";
import img4 from "../../assets/mobile-ecommerce.png";
import img5 from "../../assets/task.png";
import img6 from "../../assets/beer.png";
import img7 from "../../assets/responsive.png";
import MyButton from "../utilities/Button/MyButton";
import { IoIosArrowForward } from "react-icons/io";
import LangContext from "../../context/LangContext";
import { useContext } from "react";

const ProjectsCards = () => {
	const { texts } = useContext(LangContext);

	const projectsData = [
		{
			id: "0",
			title: "Portfolio",
			img: img1,
			description: "ReactJS & Css.",
			url: "https://enrique-spinelli-port.vercel.app/",
		},
		{
			id: "1",
			title: "Calculator app",
			img: img2,
			description: "ReactJs, NextJs & CSS",
			url: "https://my-calculator-react.netlify.app/",
		},
		{
			id: "2",
			title: "Movie App",
			img: img3,
			description: "API, ReactJs & CSS",
			url: "https://movie-searcher-react.netlify.app/",
		},
		{
			id: "3",
			title: "Ecommerce",
			img: img4,
			description: "React Native & Redux",
			url: "https://www.youtube.com/watch?v=I8kt15C6S0M",
		},
		{
			id: "4",
			title: "Task App",
			img: img5,
			description: "React Native",
			url: "https://www.youtube.com/watch?v=QXlreHsEIFY",
		},
		{
			id: "5",
			title: "Resto Website",
			img: img6,
			description: "Html, CSS & JavaScript",
			url: "https://resto-project-neon.vercel.app",
		},
		{
			id: "6",
			title: "AI Website",
			img: img7,
			description: "ReactJs & CSS",
			url: "https://ai-page-eosin.vercel.app",
		},
	];

	return (
		<div className="cards-container">
			{projectsData.map((data) => {
				return (
					<div
						className="projects-cards"
						key={data.id}
						data={data}
					>
						<a
							href={data.url}
							className="card-href"
						>
							<div
								className="card"
								data-aos="zoom-in"
							>
								<img
									src={data.img}
									alt=""
									className="card-image"
								/>
								<div className="card-details">
									<h2 className="card-title">{data.title}</h2>
									<p className="card-description">{data.description}</p>
									<MyButton>
										<p className="button-text">
											{texts.projectsButton}
											<IoIosArrowForward className="icon" />
										</p>
									</MyButton>
								</div>
							</div>
						</a>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectsCards;
