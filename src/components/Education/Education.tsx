import React, { FC, useState } from "react";
import styles from "./Education.module.css";
import classNames from "classnames";

interface Props {
  myID: number;
  reorderData: (oldID: number, newID: number, type: number) => void;
}

export const Education: FC<Props> = ({ myID, reorderData }) => {
  const [school, setSchool] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [sDate, setSDate] = useState<string>();
  const [eDate, setEDate] = useState<string>();
  const [city, setCity] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleChange = (event: any, setState: any) => {
    setState(event.target.value);
  };

  return (
    <form className={classNames(styles.form)}>
      <label className={classNames(styles.label)}>
        School
        <input
          type="text"
          className={classNames(styles.input)}
          value={school}
          onChange={(e) => {
            handleChange(e, setSchool);
          }}
        />
      </label>

      <label className={classNames(styles.label)}>
        Degree
        <input
          type="text"
          className={classNames(styles.input)}
          value={degree}
          onChange={(e) => {
            handleChange(e, setDegree);
          }}
        />
      </label>

      <label className={classNames(styles.label, styles["label-date"])}>
        Start date
        <input
          type="date"
          className={classNames(styles.input)}
          value={sDate}
          onChange={(e) => {
            handleChange(e, setSDate);
          }}
        />
      </label>

      <label className={classNames(styles.label, styles["label-date"])}>
        End date
        <input
          type="date"
          className={classNames(styles.input)}
          value={eDate}
          onChange={(e) => {
            handleChange(e, setEDate);
          }}
        />
      </label>

      <label className={classNames(styles.label)}>
        City
        <input
          type="text"
          className={classNames(styles.input)}
          value={city}
          onChange={(e) => {
            handleChange(e, setCity);
          }}
        />
      </label>

      <label className={classNames(styles.label, styles["label-desc"])}>
        Description
        <textarea
          className={classNames(styles.textarea)}
          value={description}
          onChange={(e) => {
            handleChange(e, setDescription);
          }}
        />
      </label>

      <button
        type="button"
        onClick={() => {
          reorderData(myID, myID - 1, 0);
        }}
      >
        Move Up
      </button>
      <button
        type="button"
        onClick={() => {
          reorderData(myID, myID + 1, 0);
        }}
      >
        Move Down
      </button>
    </form>
  );
};
