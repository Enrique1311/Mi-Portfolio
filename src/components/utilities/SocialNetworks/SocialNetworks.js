import {
    FaFacebookSquare,
    FaInstagramSquare, 
    FaGithubSquare, 
    FaYoutubeSquare, 
    FaLinkedin,
    FaPinterestSquare
  } from "react-icons/fa";
  import "./SocialNetworks.css";

const SocialNetworks = () => {

  return (
    <div className="social-icons" data-aos="zoom-in">
      <div className="icons">
        <a href="#">
          <i className="facebook"><FaFacebookSquare/></i>
        </a>
      </div>
      <div className="icons">
        <a href="https://github.com/Enrique1311">
          <i className="github"><FaGithubSquare/></i>
        </a>
      </div>
      <div className="icons">
        <a href="#">
          <i className="instagram"><FaInstagramSquare/></i>
        </a>
      </div>
      <div className="icons">
        <a href="#">
          <i className="pinterest"><FaPinterestSquare/></i>
        </a>        
      </div>
      <div className="icons">
        <a href="https://linkedin.com/in/enrique-spinelli">
          <i className="linkedin"><FaLinkedin/></i>
        </a>
      </div>
    </div>
  )
}

export default SocialNetworks
