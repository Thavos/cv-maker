import React, { FC, useState } from "react";
import styles from "./Education.module.css";
import classNames from "classnames";

export const Education: FC<Education> = ({
  data,
  id,
  setData,
  reorderData,
}) => {
  const [toggle, setToggle] = useState<boolean>(true);

  const handleChange = (event: any, label: string) => {
    setData((c: any) => {
      let newArr = [...c];
      if (label === "toggle") {
        newArr[id].data[label] = !toggle;
      } else {
        newArr[id].data[label] = event.target.value;
      }
      return newArr;
    });

    setToggle(!toggle);
  };

  const handleDelete = () => {
    setData((c: any) =>
      c.filter((e: any) => {
        return e.data !== data;
      })
    );
  };

  return (
    <>
      <form className={classNames(styles.form)}>
        <div className={styles["education-label"]}>
          <div>{data.school || "School name"}</div>
          <div>{data.degree || "Degree"}</div>
          <div className={styles["education-label-right"]}>
            {data.eDate || "End date"}
          </div>
          <button
            type="button"
            className={classNames(
              styles["btn"],
              styles["btn-edit"],
              styles["btn-left"]
            )}
            onClick={(e) => {
              handleChange(e, "toggle");
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className={classNames(
              styles["btn"],
              styles["btn-delete"],
              styles["btn-right"]
            )}
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </button>
        </div>

        {data.toggle && (
          <>
            <div className={styles.break} />

            <label className={classNames(styles.label)}>
              School
              <input
                type="text"
                className={classNames(styles.input)}
                value={data.school || ""}
                onChange={(e) => {
                  handleChange(e, "school");
                }}
              />
            </label>

            <label className={classNames(styles.label)}>
              Degree
              <input
                type="text"
                className={classNames(styles.input)}
                value={data.degree || ""}
                onChange={(e) => {
                  handleChange(e, "degree");
                }}
              />
            </label>

            <div className={classNames(styles["break"])} />

            <label className={classNames(styles.label, styles["label-date"])}>
              Start
              <input
                type="date"
                className={classNames(styles.input)}
                value={data.sDate || ""}
                onChange={(e) => {
                  handleChange(e, "sDate");
                }}
              />
            </label>

            <label className={classNames(styles.label, styles["label-date"])}>
              End
              <input
                type="date"
                className={classNames(styles.input)}
                value={data.eDate || ""}
                onChange={(e) => {
                  handleChange(e, "eDate");
                }}
              />
            </label>

            <label className={classNames(styles.label)}>
              City
              <input
                type="text"
                className={classNames(styles.input)}
                value={data.city || ""}
                onChange={(e) => {
                  handleChange(e, "city");
                }}
              />
            </label>

            <div className={classNames(styles["break"])} />

            <label className={classNames(styles.label, styles["label-desc"])}>
              Description
              <textarea
                className={classNames(styles.textarea)}
                value={data.desc || ""}
                onChange={(e) => {
                  handleChange(e, "desc");
                }}
              />
            </label>
          </>
        )}

        <div className={styles.break} />

        <div className={styles["btn-holder"]}>
          <button
            className={classNames(styles["btn"], styles["btn-left"])}
            type="button"
            onClick={() => {
              reorderData(id, id - 1, 0);
            }}
          >
            Move Up
          </button>
          <button
            className={classNames(styles["btn"], styles["btn-right"])}
            type="button"
            onClick={() => {
              reorderData(id, id + 1, 0);
            }}
          >
            Move Down
          </button>
        </div>
      </form>
    </>
  );
};
