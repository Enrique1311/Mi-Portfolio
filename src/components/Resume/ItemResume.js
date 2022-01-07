import "./ItemResume.css";

const ItemResume = ({item, index, toggle}) => {
  return (
    <div className={"item " + (item.open ? "open" : "")} key={index} onClick={() => toggle(index)}>
      <div className="item-container">
        <div className="item-icon">
          {item.icon}
        </div> 
        <div className="item-title"> 
          {item.title}
        </div>
      </div>
      <div className="item-content">
        {item.content}
      </div>
    </div>
  );
}

export default ItemResume



