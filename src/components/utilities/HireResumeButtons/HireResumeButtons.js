import MyButton from "../Button/MyButton";
import "./HireResumeButtons.css";

const HireResumeButtons = () => {
  return (
    <div className="hire-resume-buttons">
        <a href="/#contact-me">
            <MyButton>
                Hire Me
            </MyButton> 
        </a>
        <a href="../../../assets/CV-Enrique-Spinelli.pdf" download="CV-Enrique-Spinelli.pdf">
            <MyButton>
                Get Resume
            </MyButton>
        </a>    
    </div>    
  )
}

export default HireResumeButtons;
