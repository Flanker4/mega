import React from "react";
import styled from "styled-components";

interface PagerProps {
  page: number;
  setPage: (page: number) => any;
}

const PageButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  font-size: calc(10px + 2vmin);
  color: #5cb85c;
  margin: 0 1em 0 1em;
  &:focus {
    outline: 0;
  }
`;

const Pager = ({ page, setPage }: PagerProps) => {
  const selectPrevPage = () => {
    setPage(page - 1);
  };
  const selectNextPage = () => {
    setPage(page + 1);
  };
  const PrevItem =
    page !== 0 ? (
      <PageButton onClick={selectPrevPage}>{"<<"}</PageButton>
    ) : null;
  return (
    <div>
      {PrevItem}
      <PageButton onClick={selectNextPage}>{">>"}</PageButton>
    </div>
  );
};

export { Pager };
