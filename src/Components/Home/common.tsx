import styled from "styled-components";
import { Link } from "react-router-dom";
export const FeedBlob = styled.div`
  padding: 10px;
  box-sizing: border-box;
  max-width: 600pt;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;
  margin: 0 0 1em 0;
  border-radius: 0.3rem;
`;

export const AuthorBlob = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.img`
  height: 2em;
  margin-right: 0.3em;
`;

export const AuthorLink = styled(Link)`
  color: black;
  &:hover {
    color: darkgray;
  }
`;
