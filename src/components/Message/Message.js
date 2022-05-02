import React from "react";
import styles from "./message.module.css";

export const Message = ({ msg, num }) => {
  return (
    <div className={styles.msg}>
      {msg} &&& {num}
    </div>
  );
};
