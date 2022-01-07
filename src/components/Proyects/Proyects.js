import "./Proyects.css";
import Subtitle from "../utilities/Subtitle/Subtitle";
import ProyectsCards from "./ProyectsCards";

const Proyects = () => {
  return (
    <div className="proyects-container" id="proyects">
      <Subtitle>Proyects</Subtitle>
        <div className="proyects">
          <ProyectsCards/>
        </div>
    </div>
  )
}

export default Proyects
