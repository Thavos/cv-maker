import React, { FC } from "react";
import styles from "./ProfHistory.module.css";
import classNames from "classnames";

export const ProfHistory: FC<ProfHistory> = ({ desc, setData }) => {
  return (
    <div className={styles.section}>
      <h2>Personal Details</h2>
      <form className={styles.form}>
        <textarea
          value={desc}
          placeholder="Short overview of your skills and experience in the industry..."
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
      </form>
    </div>
  );
};
