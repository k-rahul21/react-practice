import Item from "./Items";
import "./Accordion.css";

const Accordion = ({ data, showIndex, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="accordion-container">
      <div className="accordion-header" onClick={handleClick}>
        <span>{data.title.toUpperCase()}</span>
        <span>🔽</span>
      </div>
      {showIndex &&
        data.items.map((item) => <Item key={item.id}>{item.name}</Item>)}
    </div>
  );
};

export default Accordion;
