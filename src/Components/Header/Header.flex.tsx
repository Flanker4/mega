import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-native";

interface IProps {
  isAuthorized: boolean;
  signOut: () => any;
}

interface HeaderButtonProps {
  type?: string;
}

const HeaderButton = styled(Link)`
  color: ${(props: HeaderButtonProps) =>
    props.type === "primary" ? "gray" : "darkgray"};

  display: block;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.5s ease-out;
  &:hover {
    color: black;
  }
  &:not(:last-of-type) {
    margin: 0 0 1em 0;
  }
  @media only screen and (min-width: 768px) {
    &:not(:last-of-type) {
      margin: 0 1em 0 0;
    }
  }
`;

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
  box-sizing: border-box;
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  flex: 1;
  text-align: left;
`;
const NavCenter = styled.div`
  flex: 1;
  display: none;
  @media only screen and (min-width: 768px) {
    display: inline;
  }
  text-align: center;
`;

const NavRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const LogedInView = ({ signOut }: IProps) => {
  return (
    <>
      <HeaderButton to="/">Home</HeaderButton>
      <HeaderButton to="/">User</HeaderButton>
      <HeaderButton to="/" onClick={signOut}>
        LogOut
      </HeaderButton>
    </>
  );
};

export const LogedOutView = (props: IProps) => {
  return (
    <>
      <HeaderButton type="primary" to="/">
        Home
      </HeaderButton>
      <HeaderButton to="/sign_up">Sign Up</HeaderButton>
      <HeaderButton to="/sign_in">Sign In</HeaderButton>
    </>
  );
};

export const Header = (props: IProps) => {
  const RightComponent = props.isAuthorized ? LogedInView : LogedOutView;

  return (
    <Nav>
      <NavHeader>
        <NavLeft>Mega App</NavLeft>
        <NavCenter />
        <NavRight>
          <RightComponent {...props} />
        </NavRight>
      </NavHeader>
    </Nav>
  );
};
