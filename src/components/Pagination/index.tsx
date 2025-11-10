import React from "react";
import { Pagination as TablePagination } from "antd";
import styled from "styled-components";

interface TablePaginationProps {
  current: number;
  total: number;
  pageSize?: number;
  onChange?: (page: number, pageSize: number) => void;
}

const StyledPagination = styled(TablePagination)`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  .ant-pagination-item {
    color: #1a1a1a !important;
    font-size: 14px !important;
    line-height: 16px !important;
    font-weight: 500 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-family: "Montserrat" !important;
  }

  .ant-pagination-item a {
    color: inherit !important;
  }

  .ant-pagination-item-active {
    border: none !important;
    background-color: var(--blue_main) !important;
    border-radius: 50px !important;
  }

  .ant-pagination-item-active a {
    color: #ffffff !important;
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border: none !important;
  }

  .ant-pagination-prev button,
  .ant-pagination-next button {
    color: #1a1a1a !important;
  }

  .ant-pagination-disabled {
    color: #3e3e3e !important;
  }

  .ant-pagination-options {
    display: none !important;
  }
`;

const Pagination: React.FC<TablePaginationProps> = ({
  current,
  total,
  pageSize = 3,
  onChange,
}) => {
  return (
    <StyledPagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
    />
  );
};

export default Pagination;
