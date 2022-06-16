import React, { useState } from "react";

const obj = [
  { discription: "HTML5", style: "stack__html", title: "HTML" },
  { discription: "CSS", style: "stack__css", title: "CSS" },
  { discription: "JS", style: "stack__js", title: "JS" },
  { discription: "TS", style: "stack__ts", title: "TS" },
  { discription: "React", style: "stack__react", title: "React" },
  { discription: "Figma", style: "stack__figma", title: "Figma" },
  { discription: "Photoshop", style: "stack__figma", title: "Photoshop" },
  {
    discription: "Illustrator",
    style: "stack__photoshop",
    title: "Illustrator",
  },
];

const Stack = () => {
  return (
    <div className="container">
      <div className="stack">
        <h2 className="stack__title">Stack:</h2>
        <div className="stack__block">
          {obj.map((obj) => (
            <div key={obj.title}>
              <div className={obj.style}>{obj.title}</div>
            </div>
          ))}
          <div className="stack__discription">
            <span>:after</span> наведи на нас :)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
