import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { Section } from "./components/Section";
import classNames from "classnames";
import { Personal } from "./components/Personal";
import { ProfHistory } from "./components/ProfHistory";

function App() {
  const [personal, setPersonal] = useState<any>({});
  const [profHistory, setProfHistory] = useState<any>();

  const [educations, setEducations] = useState<any[]>([]);
  const [works, setWorks] = useState<any[]>([]);

  const sectionsArr = [educations, works];
  const setSectionsArr = [setEducations, setWorks];

  const [sections, setSections] = useState<any[]>([0, 1]);

  function reorderSection(oldID: number, newID: number, type: number) {
    if (newID < 0 || newID > sectionsArr[type].length - 1) return;

    let newArr = [...sectionsArr[type]];
    newArr[oldID] = sectionsArr[type][newID];
    newArr[newID] = sectionsArr[type][oldID];

    let set = setSectionsArr[type];
    set(newArr);
  }

  function reorderSections(oldID: number, newID: number) {
    if (newID < 0 || newID > sections.length - 1) return;

    let newArr = [...sections];
    newArr[oldID] = sections[newID];
    newArr[newID] = sections[oldID];

    setSections(newArr);
  }

  return (
    <div className="main">
      <div className="input-side">
        <Personal data={personal} setData={setPersonal} />
        <ProfHistory desc={profHistory} setData={setProfHistory} />
        {sections.map((e, index) => {
          return (
            <>
              <Section
                id={index}
                type={e}
                data={sectionsArr[e]}
                setData={setSectionsArr[e]}
                reorderData={reorderSection}
                reorderSections={reorderSections}
              />
              <div className="break" />
            </>
          );
        })}
      </div>
      <div className="output-side">
        {educations.map((e, index) => {
          return <p key={index}>{e.data.school}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
