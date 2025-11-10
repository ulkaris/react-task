import { Button } from "antd";
import type { ButtonProps } from "antd/es/button";
import styles from "./index.module.css";

export const TertiaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className={`${styles.button} ${props.className}`} />
  );
};
