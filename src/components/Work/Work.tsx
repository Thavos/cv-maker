import React, { FC, useState } from "react";
import styles from "./Work.module.css";
import classNames from "classnames";

export const Work: FC<Work> = ({ data, id, setData, reorderData }) => {
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
    <form>
      <div className={styles["work-label"]}>
        <div>{data.company || "Company name"}</div>
        <div>{data.title || "Title"}</div>
        <div className={styles["work-label-right"]}>
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

          <label>
            Company name
            <input
              type="text"
              value={data.company || ""}
              onChange={(e) => {
                handleChange(e, "company");
              }}
            />
          </label>

          <label>
            Title
            <input
              type="text"
              value={data.title || ""}
              onChange={(e) => {
                handleChange(e, "title");
              }}
            />
          </label>

          <div className={classNames(styles["break"])} />

          <label className={classNames(styles["label-date"])}>
            Start
            <input
              type="date"
              value={data.sDate || ""}
              onChange={(e) => {
                handleChange(e, "sDate");
              }}
            />
          </label>

          <label className={classNames(styles["label-date"])}>
            End
            <input
              type="date"
              value={data.eDate || ""}
              onChange={(e) => {
                handleChange(e, "eDate");
              }}
            />
          </label>

          <label>
            City
            <input
              type="text"
              value={data.city || ""}
              onChange={(e) => {
                handleChange(e, "city");
              }}
            />
          </label>

          <div className={classNames(styles["break"])} />

          <label className={classNames(styles["label-desc"])}>
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
            reorderData(id, id - 1, 1);
          }}
        >
          Move Up
        </button>
        <button
          className={classNames(styles["btn"], styles["btn-right"])}
          type="button"
          onClick={() => {
            reorderData(id, id + 1, 1);
          }}
        >
          Move Down
        </button>
      </div>
    </form>
  );
};
