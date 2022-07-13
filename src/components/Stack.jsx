import React from "react";

const stackObj = [
  {
    description: "HTML5 HTML5 HTML5 HTML5 HTML5 HTML5",
    style: "stack__html",
    title: "HTML",
  },
  {
    description: "CSS CSS CSS CSS CSS CSS CSS",
    style: "stack__css",
    title: "CSS",
  },
  { description: "JS JSJSJSJSJSJSJSJSJSJS", style: "stack__js", title: "JS" },
  { description: "TS TS TS TS TS TS ", style: "stack__ts", title: "TS" },
  {
    description: "React React React React ",
    style: "stack__react",
    title: "React",
  },
  {
    description: "Figma Figma Figma Figma Figma Figma",
    style: "stack__figma",
    title: "Figma",
  },
  {
    description: "Photoshop Photoshop Photoshop Photoshop Photoshop",
    style: "stack__photoshop",
    title: "Photoshop",
  },
  {
    description: "Illustrator Illustrator Illustrator Illustrator",
    style: "stack__illustrator",
    title: "Illustrator",
  },
];

const Stack = () => {
  return (
    <div className="container">
      <div className="stack">
        <h2 className="stack__title">Stack:</h2>
        <div className="stack__block">
          {stackObj.map((obj) => (
            <div className={obj.style} key={obj.title}>
              <p> {obj.title}</p>
              <div className={obj.style + "--popup"}>
                <p>{obj.description}</p>
              </div>
            </div>
          ))}
          <div className="stack__description">
            <span>:after</span> наведи на нас :)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
