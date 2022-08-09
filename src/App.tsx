import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { Section } from "./components/Section";

function App() {
  const [educations, setEducations] = useState([]);

  function reorderArray(oldID: number, newID: number, type: number) {
    console.log(educations.length);
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
