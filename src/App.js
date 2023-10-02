import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { accordionData } from "./Utils/MockData";
import Accordion from "./Component/Accordion/Accordion";

const App = () => {
  const [showIndex, setShowIndex] = useState(0);
  return (
    <>
      <h1 className="heading">Accordion Example</h1>
      {accordionData.map((data, index) => (
        <Accordion
          key={data.id}
          data={data}
          showIndex={showIndex === index}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
