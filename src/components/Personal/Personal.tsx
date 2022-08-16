import React, { FC } from "react";
import styles from "./Personal.module.css";
import classNames from "classnames";

export const Personal: FC<Personal> = ({ data, setData }) => {
  const handleChange = (event: any, label: string) => {
    setData((c: any) => {
      let newData = { ...c };
      newData[label] = event.target.value;
      return newData;
    });
  };

  return (
    <div className={styles.section}>
      <h2>Personal Details</h2>
      <form className={styles.form}>
        <label>
          First Name
          <input
            type="text"
            className={styles.input}
            value={data.fName || ""}
            onChange={(e) => {
              handleChange(e, "fName");
            }}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            className={styles.input}
            value={data.lName || ""}
            onChange={(e) => {
              handleChange(e, "lName");
            }}
          />
        </label>

        <div className={classNames(styles["break"])} />

        <label>
          E-mail
          <input
            type="text"
            className={styles.input}
            value={data.email || ""}
            onChange={(e) => {
              handleChange(e, "email");
            }}
          />
        </label>

        <label>
          Phone number
          <input
            type="text"
            className={styles.input}
            value={data.phone || ""}
            onChange={(e) => {
              handleChange(e, "phone");
            }}
          />
        </label>

        <div className={classNames(styles["break"])} />

        <label>
          Country
          <input
            type="text"
            className={styles.input}
            value={data.country || ""}
            onChange={(e) => {
              handleChange(e, "country");
            }}
          />
        </label>

        <label>
          City
          <input
            type="text"
            className={styles.input}
            value={data.city || ""}
            onChange={(e) => {
              handleChange(e, "city");
            }}
          />
        </label>
      </form>
    </div>
  );
};
