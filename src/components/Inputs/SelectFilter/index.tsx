import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd/es/select";
import styled from "styled-components";
import styles from "./index.module.css";

const StyledSelect = styled(Select)`
  .ant-select-selector {
    padding: 8px 13px !important;
    height: 36px !important;
    border-radius: 10px !important;
    box-shadow: none !important;
    outline: none !important;
  }
  .ant-select-arrow {
    top: 19px !important;
    color: #787486 !important;
  }
  .ant-select-selection-placeholder {
    color: #0a0a0a;
  }
  &.ant-select-focused .ant-select-selector {
    border: 1px solid #e5e7eb !important;
    box-shadow: none !important;
  }
  &.ant-select-focused .ant-select-selection-placeholder {
    color: #0a0a0a !important;
  }
  .ant-select-dropdown {
    box-shadow: 0px 0px 10.9px 0px #ebebeb40 !important;
    border: 1px solid #f7f7f7 !important;
  }
  .ant-select-item-option {
    font-size: 14px !important;
    line-height: 20px !important;
    font-weight: 500 !important;
    letter-spacing: -1% !important;
    color: #787486 !important;
  }
  .ant-select-item-option-active {
    background: none !important;
    color: var(--blue_main) !important;
  }
  .ant-select-item-option-selected {
    background: none !important;
  }
`;

export const SelectFilter: React.FC<SelectProps> = (props) => (
  <StyledSelect {...props} className={`${styles.select} ${props.className}`} />
);
