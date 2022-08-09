import React, { FC, useState } from "react";
import styles from "./Education.module.css";
import classNames from "classnames";

export const Education: FC<Education> = ({
  data,
  id,
  setData,
  reorderData,
}) => {
  const [school, setSchool] = useState<string>(data.school || "");
  const [degree, setDegree] = useState<string>(data.degree || "");
  const [sDate, setSDate] = useState<string>(data.sDate || "");
  const [eDate, setEDate] = useState<string>(data.eDate || "");
  const [city, setCity] = useState<string>(data.city || "");
  const [desc, setDesc] = useState<string>(data.desc || "");

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
          value={data.school}
          onChange={(e) => {
            setData((c: any) => {
              let newArr = [...c];
              newArr[id].data.school = e.target.value;
              return newArr;
            });
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
          value={desc}
          onChange={(e) => {
            handleChange(e, setDesc);
          }}
        />
      </label>

      <button
        type="button"
        onClick={() => {
          reorderData(id, id - 1, 0);
        }}
      >
        Move Up
      </button>
      <button
        type="button"
        onClick={() => {
          reorderData(id, id + 1, 0);
        }}
      >
        Move Down
      </button>

      <button
        type="button"
        onClick={() => {
          setData((c: any) => {
            let newData = [...c];
            newData[id] = {
              data: {
                school: school,
                degree: degree,
                sDate: sDate,
                eDate: eDate,
                city: city,
                desc: desc,
              },
              ...newData[id],
            };
            return newData;
          });
        }}
      >
        Save
      </button>
    </form>
  );
};
