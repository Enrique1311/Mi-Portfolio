import {
  //    FaFacebookSquare,
  //  FaInstagramSquare,
  FaGithubSquare,
  //    FaYoutubeSquare,
  FaLinkedin,
  //    FaPinterestSquare,
} from "react-icons/fa";
//  import {BsFacebook, } from "react-icons/bs"
import "./SocialNetworks.css";

const SocialNetworks = () => {
  return (
    <div className="social-icons" data-aos="zoom-in">
      {/* <div>
        <a href="#">
          <i className="facebook"><FaInstagramSquare className="icons"/></i>
        </a>
      </div> */}
      <div>
        <a href="https://github.com/Enrique1311">
          <i className="github">
            <FaGithubSquare className="icons" />
          </i>
        </a>
      </div>
      {/* <div>
        <a href="#">
          <i className="instagram"><FaInstagramSquare className="icons"/></i>
        </a>
      </div> */}
      {/* <div>
        <a href="#">
          <i className="pinterest"><FaPinterestSquare className="icons"/></i>
        </a>        
      </div> */}
      <div>
        <a href="https://linkedin.com/in/enrique-spinelli">
          <i className="linkedin">
            <FaLinkedin className="icons" />
          </i>
        </a>
      </div>
    </div>
  );
};

export default SocialNetworks;
