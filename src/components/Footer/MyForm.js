import MyButton from "../utilities/Button/MyButton";
import "./MyForm.css";

const MyForm = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-name">
          <label for="name">Name:</label>
          <input type="text" name="name" required/>
        </div>
        <div className="form-email">
          <label for="email">E-mail:</label>
          <input type="email" name="email" required/>
        </div>
        <div className="form-message">
          <label for="name">Message:</label>
          <textarea type="text" name="message" rows="4" required/>
        </div>
        <div className="send-resp">
          <MyButton type="submit">Send</MyButton>
        </div> 
      </form>      
    </div>
  )
}

export default MyForm
