import React, { FC, useState } from "react";
import styles from "./Section.module.css";
import { Education } from "../Education";
import { Work } from "../Work";
import classNames from "classnames";

enum compType {
  "Education" = 0,
  "Work Experience" = 1,
}

const compMap = [Education, Work];

export const Section: FC<Section> = ({
  id,
  type,
  data,
  setData,
  reorderData,
  reorderSections,
}) => {
  const C = compMap[type];

  return (
    <div className={styles.section}>
      <h2 className={styles["section-name"]}>{compType[type]}</h2>
      {data.map((e: any, index: number) => {
        return (
          <C
            key={index}
            data={e.data}
            id={index}
            setData={setData}
            reorderData={reorderData}
          />
        );
      })}

      <div className={styles["btn-container"]}>
        <button
          className={classNames(styles["btn"], styles["add-btn"])}
          onClick={() =>
            setData([
              ...data,
              {
                data: { toggle: true },
                id: data.length,
                setData: setData,
                reorderData: reorderData,
              },
            ])
          }
        >
          Add {compType[type]}
        </button>
        <button
          className={classNames(
            styles["btn"],
            styles["move-btn"],
            styles["move-btn-left"]
          )}
          onClick={() => {
            reorderSections(id, id - 1);
          }}
        >
          Move Up
        </button>
        <button
          className={classNames(
            styles["btn"],
            styles["move-btn"],
            styles["move-btn-right"]
          )}
          onClick={() => {
            reorderSections(id, id + 1);
          }}
        >
          Move Down
        </button>
      </div>
    </div>
  );
};
