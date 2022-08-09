import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { Section } from "./components/Section";

function App() {
  const [educations, setEducations] = useState<Education[]>([]);

  function reorderArray(oldID: number, newID: number, type: number) {
    if (newID < 0 || newID > educations.length - 1) return;

    console.log(educations);

    let newArr = [...educations];
    newArr[oldID] = educations[newID];
    newArr[newID] = educations[oldID];

    setEducations(newArr);
  }

  return (
    <div className="main">
      <div className="input-side">
        <Section
          type={0}
          data={educations}
          setData={setEducations}
          reorderData={reorderArray}
        />
      </div>
      <div className="output-side"></div>
    </div>
  );
}

export default App;
