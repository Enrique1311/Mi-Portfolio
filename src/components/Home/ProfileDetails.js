import Typical from "react-typical";
import "./ProfileDetails.css";
import SocialNetworks from "../utilities/SocialNetworks/SocialNetworks";
import HireResumeButtons from "../utilities/HireResumeButtons/HireResumeButtons";

const ProfileDetails = () => {
    return (
        <div className="profile-details">
            <SocialNetworks/>
            <div className="profile-details-name">
                <span className="primary-text">
                    {" "}
                    Hello! I am <span className="name-text">Enrique J. Spinelli</span>
                </span>
            </div>
            <div className="profile-details-role">
                <span className="primary-text">
                    {" "}
                    <h1>
                        {" "}
                        <Typical 
                        loop={Infinity}
                        steps={[
                            "Full Stack Developer",
                            1000,
                            "Html full",
                            1000,
                            "Css full",
                            1000,
                            "Javascript full",
                            1000,
                            "React Js full",
                            1000,
                        ]}
                    />  
                    </h1>
                    <p className="profile-extra">
                        Front and back end applications developer...
                    </p>
                </span>              
            </div>
            <HireResumeButtons/>
        </div>
    )
}

export default ProfileDetails
