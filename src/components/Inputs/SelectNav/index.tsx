import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd/es/select";
import styled from "styled-components";
import styles from "./index.module.css";

const StyledSelect = styled(Select)`
  .ant-select-selector {
    padding: 20px !important;
    height: 60px !important;
    border-radius: 12px !important;
    font-size: 14px !important;
    line-height: 20px !important;
    letter-spacing: -1% !important;
    font-weight: 500 !important;
    border: none !important;
  }
  .ant-select-arrow {
    top: 32px !important;
    right: 16px !important;
    color: #787486 !important;
  }
  .ant-select-selection-placeholder {
    color: #787486;
    padding-left: 23px;
  }
  &.ant-select-focused .ant-select-selector {
    border: none !important;
    box-shadow: none !important;
    background-color: var(--blue_main) !important;
    color: #ffffff !important;
  }
  &.ant-select-focused .ant-select-selection-placeholder {
    color: #ffffff !important;
  }
  &.ant-select-focused .ant-select-arrow {
    color: #ffffff !important;
  }
  .ant-select-dropdown {
    position: static !important;
    box-shadow: 0px 0px 10.9px 0px #ebebeb40 !important;
    border: 1px solid #f7f7f7 !important;
    padding: 14px 8px !important;
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

export const SelectNav: React.FC<SelectProps> = (props) => (
  <StyledSelect
    {...props}
    className={`${styles.select} ${props.className}`}
    getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
  />
);
