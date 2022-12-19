import React from 'react';
import Typical from 'react-typical';
import './ProfileDetails.css';
import SocialNetworks from '../utilities/SocialNetworks/SocialNetworks';
import HireResumeButtons from '../utilities/HireResumeButtons/HireResumeButtons';
import LangContext from '../../context/LangContext';
import { useContext } from 'react';

const ProfileDetails = () => {
	const { texts } = useContext(LangContext);

	return (
		<div className='profile-details'>
			<SocialNetworks />
			<div className='profile-details-name'>
				<span className='primary-text'>
					{' '}
					{texts.hello}
					<span className='name-text'>Enrique J.Spinelli</span>
				</span>
			</div>
			<div className='profile-details-role'>
				<span className='primary-text'>
					<p className='profile-extra'>{texts.subtitle}</p>{' '}
					<h1>
						{' '}
						<Typical
							loop={Infinity}
							steps={[
								'Full Stack',
								1000,
								'Html',
								1000,
								'Css',
								1000,
								'Javascript',
								1000,
								'React Js',
								1000,
								'React Native',
								1000,
							]}
						/>
					</h1>
				</span>
			</div>
			<HireResumeButtons />
		</div>
	);
};

export default ProfileDetails;
