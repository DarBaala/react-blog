import React from "react";

const Stack = () => {
  return (
    <div className="container">
      <div className="stack">
        <h2 className="stack__title">Stack:</h2>
        <div className="stack__block">
          <div className="stack__items stack__items-html">HTML</div>
          <div className="stack__items stack__items-css">CSS</div>
          <div className="stack__items stack__items-js">JS</div>
          <div className="stack__items stack__items-ts">TS</div>
          <div className="stack__items stack__items-react">React</div>
          <div className="stack__items stack__items-figma">Figma</div>
          <div className="stack__items stack__items-photoshop">Photoshop</div>
          <div className="stack__items stack__items-illustrator">
            Illustrator
          </div>
          <div className="stack__discription">
            <span>:after</span> наведи на нас :){" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
