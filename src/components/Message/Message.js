import React from "react";
import styles from "./message.module.css";

export const Message = ({ msg }) => {
  return <div className={styles.msg}>{msg}</div>;
};
