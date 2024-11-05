import React from "react";
import styles from "./title.module.css";
const Title = ({ text, size }: { text: string; size: number }) => {
  return (
    <h1 style={{ fontSize: size }} className={styles.title}>
      {text}
    </h1>
  );
};

export default Title;
