import UpButton from "../utilities/UpButton/UpButton";
import "./Profile.css";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  return (
    <div className="profile-container" id="home">
      <div className="profile-picture-container">
        <div className="profile-picture">
          <div className="profile-picture-background">
          </div>
        </div>
      </div>
      <ProfileDetails/>
    </div>
  )
}

export default Profile
