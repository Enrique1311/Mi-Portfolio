import "./Subtitle.css";

const Subtitle = ({ children }) => {
  return (
    <div className="subtitle-container">
      <div className="subtitle">
        <h3>{children}</h3>
      </div>
    </div>
  );
};

export default Subtitle;
