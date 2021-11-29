import SocialNetworks from "../utilities/SocialNetworks/SocialNetworks";
import "./Footer.css";
import MyForm from "./MyForm";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Subtitle from "../utilities/Subtitle/Subtitle";

const Footer = () => {
  return (
    <div className="footer-container" id="contact-me">
      <Subtitle>Contact Me</Subtitle>        
      <div className="footer">
        <div className="footer-content">
          <MyForm/>
          <div className="footer-contacts">
            <div className="comment" >
              <p>
                If you like my works and want to hire
                me or make a question, here I let you
                my contacts. Also you can send me
                a consult using this form. Thanks!
              </p> 
            </div> 
            <div className="whatsapp-email-container">
              <div className="whatsapp-email"> 
                <FaWhatsapp className="contact-logo"/>
                <p>(54) 11 4914-4055</p>
              </div>
              <div className="whatsapp-email">
                <AiFillMail className="contact-logo"/>
                <p>enriquespinelli.coder@gmail.com</p>
              </div>
            </div>         
 
          </div>          
          <div className="footer-social">
            <SocialNetworks/>
            <div className="footer-photo">
            </div>
          </div>
        </div>
      </div> 
      <p className="copyright">All Copyright reserved.</p>
    </div>
  )
}

export default Footer
