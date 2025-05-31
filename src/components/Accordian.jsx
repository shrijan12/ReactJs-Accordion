import React, { useState } from "react";
import accordionData from "../lib/data.js";
import "./Accordian.css";
//we can make use of two accordion , single and multiple accordions
//single accordion allows only one item to be open at a time, while multiple accordion allows multiple items to be open simultaneously.

const Accordian = () => {
  const [selected, setSelectd] = useState(null);

  function handleSingleSelection(getcurrentId) {
    setSelectd(getcurrentId === selected ? null : getcurrentId);
  }

  return (
    <>
      <div className="wrapper">
        <div className="accordion-header">
          <h2>Accordian Components</h2>
          <div className="accordion-description">
            {accordionData && accordionData.length > 0 ? (
              accordionData.map((item, index) => (
                <div key={index} className="items">
                  <div
                    key={index}
                    onClick={() => handleSingleSelection(item.id)}
                    className="title"
                  >
                    <h3 key={index} className="question">
                      {item.title}
                    </h3>
                    <span>+</span>
                  </div>
                  {selected === item.id ? (
                    <div className="content">
                      <p>{item.content}</p>
                    </div>
                  ) : null}
                </div>
              ))
            ) : (
              <div className="Error">
                <p>No Data Found !</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
