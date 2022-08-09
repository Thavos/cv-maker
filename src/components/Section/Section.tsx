import React, { FC, useState } from "react";
import { JsxElement } from "typescript";
import { Education } from "../Education";

enum compType {
  "Education" = 0,
}

const compMap = [Education];

export const Section: FC<Section> = ({ type, data, setData, reorderData }) => {
  const C = compMap[type];

  return (
    <>
      {data.map((e: any, index: number) => (
        <C
          key={index}
          data={e.data}
          id={index}
          setData={setData}
          reorderData={reorderData}
        />
      ))}
      <button
        onClick={() =>
          setData([
            ...data,
            {
              data: {
                school: "",
                degree: "",
                sDate: "",
                eDate: "",
                city: "",
                desc: "",
              },
              id: data.length,
              setData: setData,
              reorderData: reorderData,
            },
          ])
        }
      >
        Add Education
      </button>
    </>
  );
};
