import React from "react";
import styles from "./button.module.css";
const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  if (onClick) {
    return (
      <div>
        <button className={styles.button} onClick={onClick}>
          {text}
        </button>
      </div>
    );
  }
  return (
    <div>
      <button className={styles.button}>{text}</button>
    </div>
  );
};

export default Button;
