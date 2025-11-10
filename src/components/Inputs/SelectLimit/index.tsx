import React from "react";
import { Select } from "antd";
import styles from "./index.module.css";

interface LimitSelectProps {
  className?: string;
  limit: number;
  handleLimit: (value: number) => void;
}

export const SelectLimit: React.FC<LimitSelectProps> = ({
  className,
  limit,
  handleLimit,
}) => {
  return (
    <Select
      defaultValue={limit}
      className={`${styles.select} ${className}`}
      size="large"
      onChange={handleLimit}>
      <Select.Option value={6}>6 / page</Select.Option>
      <Select.Option value={12}>12 / page</Select.Option>
      <Select.Option value={18}>18 / page</Select.Option>
    </Select>
  );
};
