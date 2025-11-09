import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd/es/select";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  .ant-select-selector {
    padding: 14px 24px !important;
    height: 52px !important;
    border-radius: 6px !important;
    box-shadow: none !important;
    margin-top: 10px !important;
    outline: none !important;
  }
  .ant-select-arrow {
    padding-right: 24px;
    padding-top: 17px;
    top: 25px !important;
  }
  .ant-select-selection-placeholder {
    color: black;
    padding-left: 23px;
  }
`;

export const SelectFilter: React.FC<SelectProps> = (props) => (
  <StyledSelect {...props} className={`${props.className}`} />
);
