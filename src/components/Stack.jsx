import React from "react";

const stackObj = [
  {
    discription: "HTML5 HTML5 HTML5 HTML5 HTML5 HTML5",
    style: "stack__html",
    title: "HTML",
  },
  {
    discription: "CSS CSS CSS CSS CSS CSS CSS",
    style: "stack__css",
    title: "CSS",
  },
  { discription: "JS JSJSJSJSJSJSJSJSJSJS", style: "stack__js", title: "JS" },
  { discription: "TS TS TS TS TS TS ", style: "stack__ts", title: "TS" },
  {
    discription: "React React React React ",
    style: "stack__react",
    title: "React",
  },
  {
    discription: "Figma Figma Figma Figma Figma Figma",
    style: "stack__figma",
    title: "Figma",
  },
  {
    discription: "Photoshop Photoshop Photoshop Photoshop Photoshop",
    style: "stack__photoshop",
    title: "Photoshop",
  },
  {
    discription: "Illustrator Illustrator Illustrator Illustrator",
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
                <p>{obj.discription}</p>
              </div>
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
