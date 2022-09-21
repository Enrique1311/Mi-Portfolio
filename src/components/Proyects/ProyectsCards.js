import React from "react";
import "./ProyectsCards.css";
import img1 from "../../assets/portf.png";
import img2 from "../../assets/calculator.png";
import img3 from "../../assets/movie.png";
import img4 from "../../assets/mobile-ecommerce.png";
import img5 from "../../assets/task.png";
import MyButton from "../utilities/Button/MyButton";
import { IoIosArrowForward } from "react-icons/io";

const ProyectsCards = () => {
	const proyectsData = [
		{
			id: "0",
			title: "My Portfolio",
			img: img1,
			description: "Mi Portfolio personal con ReactJS y Css.",
			url: "https://enrique-spinelli-port.vercel.app/",
		},
		{
			id: "1",
			title: "Calculadora",
			img: img2,
			description: "Sitio web realizado con ReactJs, NextJs y Css.",
			url: "https://my-calculator-react.netlify.app/",
		},
		{
			id: "2",
			title: "Movie App",
			img: img3,
			description: "Sitio web de películas con ReactJs y Css",
			url: "https://movie-searcher-react.netlify.app/",
		},
		{
			id: "3",
			title: "Ecommerce",
			img: img4,
			description: "Ecommerce con React Native y Redux",
			url: "https://www.youtube.com/watch?v=I8kt15C6S0M",
		},
		{
			id: "4",
			title: "Task App",
			img: img5,
			description: "Aplicación de tareas con React Native",
			url: "https://www.youtube.com/watch?v=QXlreHsEIFY",
		},
	];

	return (
		<div className="cards-container">
			{proyectsData.map((data) => {
				return (
					<div className="proyects-cards" key={data.id} data={data}>
						<a href={data.url} className="card-href">
							<div className="card" data-aos="zoom-in">
								<img src={data.img} alt="" className="card-image" />
								<div className="card-details">
									<h2 className="card-title">{data.title}</h2>
									<p className="card-description">{data.description}</p>
									<MyButton>
										<p className="button-text">
											Ver
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

export default ProyectsCards;
