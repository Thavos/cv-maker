import React, { FC, useState } from "react";
import { JsxElement } from "typescript";
import { Education } from "../Education";

interface Props {
  type: number;
  data: any;
  setData: any;
  reorderData: (oldID: number, newID: number, type: number) => void;
}

enum compType {
  "Education" = 0,
}

const compMap = [Education];

export const Section: FC<Props> = ({ type, data, setData, reorderData }) => {
  const C = compMap[type];

  return (
    <>
      {data}
      <button
        onClick={() =>
          setData([...data, <C myID={data.length} reorderData={reorderData} />])
        }
      >
        Add Education
      </button>
    </>
  );
};
