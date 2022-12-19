import React from 'react';
import './ProjectsCards.css';
import img1 from '../../assets/portf.png';
import img2 from '../../assets/calculator.png';
import img3 from '../../assets/movie.png';
import img4 from '../../assets/mobile-ecommerce.png';
import img5 from '../../assets/task.png';
import MyButton from '../utilities/Button/MyButton';
import { IoIosArrowForward } from 'react-icons/io';
import LangContext from '../../context/LangContext';
import { useContext } from 'react';

const ProjectsCards = () => {
	const { texts } = useContext(LangContext);

	const projectsData = [
		{
			id: '0',
			title: 'Portfolio',
			img: img1,
			description: 'ReactJS y Css.',
			url: 'https://enrique-spinelli-port.vercel.app/',
		},
		{
			id: '1',
			title: 'Calculator app',
			img: img2,
			description: 'ReactJs, NextJs y Css.',
			url: 'https://my-calculator-react.netlify.app/',
		},
		{
			id: '2',
			title: 'Movie App',
			img: img3,
			description: 'ReactJs y Css',
			url: 'https://movie-searcher-react.netlify.app/',
		},
		{
			id: '3',
			title: 'Ecommerce',
			img: img4,
			description: 'React Native y Redux',
			url: 'https://www.youtube.com/watch?v=I8kt15C6S0M',
		},
		{
			id: '4',
			title: 'Task App',
			img: img5,
			description: 'React Native',
			url: 'https://www.youtube.com/watch?v=QXlreHsEIFY',
		},
	];

	return (
		<div className='cards-container'>
			{projectsData.map((data) => {
				return (
					<div
						className='projects-cards'
						key={data.id}
						data={data}
					>
						<a
							href={data.url}
							className='card-href'
						>
							<div
								className='card'
								data-aos='zoom-in'
							>
								<img
									src={data.img}
									alt=''
									className='card-image'
								/>
								<div className='card-details'>
									<h2 className='card-title'>{data.title}</h2>
									<p className='card-description'>{data.description}</p>
									<MyButton>
										<p className='button-text'>
											{texts.projectsButton}
											<IoIosArrowForward className='icon' />
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
