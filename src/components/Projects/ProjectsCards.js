import React from "react";
import "./ProjectsCards.css";
import img1 from "../../assets/portf.png";
import img3 from "../../assets/movie.png";
import img4 from "../../assets/mobile-ecommerce.png";
import img5 from "../../assets/task.png";
import img6 from "../../assets/beer.png";
import img7 from "../../assets/responsive.png";
import img8 from "../../assets/food.png";
import img9 from "../../assets/money.png";
import img10 from "../../assets/gym.png";
import MyButton from "../utilities/Button/MyButton";
import { BiWorld } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ProjectsCards = () => {
	const projectsData = [
		{
			id: "0",
			title: "Portfolio",
			img: img1,
			description: "ReactJS & Css.",
			gitHubLink: "https://github.com/Enrique1311/Mi-Portfolio.git",
			buttonIcon: <BiWorld />,
			url: "https://enrique-spinelli-port.vercel.app",
		},
		{
			id: "1",
			title: "Movie App",
			img: img3,
			description: "API, ReactJs & CSS",
			gitHubLink: "https://github.com/Enrique1311/Movie-App-React.git",
			buttonIcon: <BiWorld />,
			url: "https://movie-searcher-react.netlify.app",
		},
		{
			id: "2",
			title: "Mobile Ecommerce",
			img: img4,
			description: "React Native & Redux",
			gitHubLink:
				"https://github.com/Enrique1311/E-commerce-Coderhouse-Enrique-Spinelli.git",
			buttonIcon: <FaYoutube />,
			url: "https://www.youtube.com/watch?v=I8kt15C6S0M",
		},
		{
			id: "3",
			title: "Mobile Task App",
			img: img5,
			description: "React Native & CSS",
			gitHubLink: "https://github.com/Enrique1311/task-app-react-nat.git",
			buttonIcon: <FaYoutube />,
			url: "https://www.youtube.com/watch?v=QXlreHsEIFY",
		},
		{
			id: "4",
			title: "Bar Website",
			img: img6,
			description: "Html, CSS & JavaScript",
			gitHubLink: "https://github.com/Enrique1311/resto-project.git",
			buttonIcon: <BiWorld />,
			url: "https://resto-project-neon.vercel.app",
		},
		{
			id: "5",
			title: "AI Website",
			img: img7,
			description: "ReactJs & CSS",
			gitHubLink: "https://github.com/Enrique1311/AI-Page.git",
			buttonIcon: <BiWorld />,
			url: "https://ai-page-eosin.vercel.app",
		},
		{
			id: "6",
			title: "Restó Website",
			img: img8,
			description: "ReactJs & CSS",
			gitHubLink: "https://github.com/Enrique1311/restaurant-react-app.git",
			buttonIcon: <BiWorld />,
			url: "https://ejs-restaurant-react-app.vercel.app",
		},
		{
			id: "7",
			title: "Bank App",
			img: img9,
			description: "ReactJs & Tailwind",
			gitHubLink: "https://github.com/Enrique1311/bank-app.git",
			buttonIcon: <BiWorld />,
			url: "https://bank-app-clone.vercel.app",
		},
		{
			id: "8",
			title: "Gym App",
			img: img10,
			description: "Html, CSS & JavaScript",
			gitHubLink: "https://github.com/Enrique1311/Gym-Website.git",
			buttonIcon: <BiWorld />,
			url: "https://gym-website-ebon.vercel.app",
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
						<div
							href={data.url}
							className="card-href"
						>
							<div className="card">
								<img
									src={data.img}
									alt="image"
									className="card-image"
								/>
								<div className="card-details">
									<h2 className="card-title">{data.title}</h2>
									<p className="card-description">{data.description}</p>
									<div className="card-buttons-container">
										<a
											href={data.gitHubLink}
											className="card-button"
										>
											<MyButton>
												<FiGithub />{" "}
											</MyButton>
										</a>

										<a
											href={data.url}
											className="card-button"
										>
											<MyButton>{data.buttonIcon}</MyButton>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectsCards;
