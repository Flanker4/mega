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
  color: white;
  margin: 0 1em 0 1em;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
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
    page != 0 ? (
      <PageButton onClick={selectPrevPage}>{"<<"}Prev</PageButton>
    ) : null;
  return (
    <div>
      {PrevItem}
      <PageButton onClick={selectNextPage}>Next{">>"}</PageButton>
    </div>
  );
};

export { Pager };
