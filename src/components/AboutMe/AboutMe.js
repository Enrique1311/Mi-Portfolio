import "./AboutMe.css";
import Subtitle from "../utilities/Subtitle/Subtitle";
import HireResumeButtons from "../utilities/HireResumeButtons/HireResumeButtons";

const AboutMe = () => {
  return (
    <div className="about-me-container" id="about-me">
      <Subtitle>About Me</Subtitle>
      <div className="about-me">
        <div className="about-me-photo">
        </div>
        <div className="about-me-details">
          <div className="about-me-details-content">
            <h4>
              Why chose me?
            </h4>
            <p>
              I studied the career of Full Stack Developer at 
              the Numen Academy in Buenos Aires City. I like to
              solve simple or complex challenges that clients
              pose to me, creating Web pages with innovative, 
              agile, responsive and modern designs that stand out visually.
              I love originality !!!
            </p>            
            <p>
              My work aims to:</p>
            <p>
            <ul>
              <li>
                Perform all the required and necessary functions 
                for companies to achieve their most ambitious aspirations.
              </li>
              <li>
                That users have a pleasant, different and intuitive 
                experience.              
              </li>
            </ul>

            </p>
            <p>
           
            </p>
          </div>

          <HireResumeButtons className="about-me-button"/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
