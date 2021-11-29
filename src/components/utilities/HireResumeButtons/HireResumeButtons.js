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
        <a href="cv.pdf" download="EJS cv.pdf">
            <MyButton>
                Get Resume
            </MyButton>
        </a>    
    </div>    
  )
}

export default HireResumeButtons;
