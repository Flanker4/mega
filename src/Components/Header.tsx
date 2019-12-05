import * as React from "react";
import {} from "./AuthContainer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-native";

interface IProps {
  isAuthorized: boolean;
  signIn: (user: string, password: string) => any;
  signOut: () => any;
}

interface HeaderButtonProps {
  primaryLink?: boolean;
}

const HeaderButton = styled(Link)`
  display: block;
  cursor: pointer;
  font-size: 16px;
  margin: 0 1em;
  transition: 0.5s all ease-out;
  &:hover {
    color: black;
  }
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: auto;
  }
  color: ${(props: HeaderButtonProps) =>
    props.primaryLink ? "gray" : "darkgray"};
`;

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  width: 50%;
  @media only screen and (min-width: 768px) {
    width: 33.333%;
  }
  text-align: left;
`;
const NavCenter = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    width: 33.333%;
    display: inline;
  }
  text-align: center;
`;

const NavRight = styled.div`
  width: 50%;
  @media only screen and (min-width: 768px) {
    width: 33.333%;
  }
  text-align: right;
  margin-right: 20px;
`;

export const LogedInView = (props: IProps) => {
  return (
    <div>
      <HeaderButton to="/">Home</HeaderButton>
      <HeaderButton to="/">User</HeaderButton>
      <HeaderButton to="/" onClick={() => props.signOut()}>
        LogOut
      </HeaderButton>
    </div>
  );
};

export const LogedOutView = (props: IProps) => {
  return (
    <div>
      <HeaderButton primaryLink={true} to="/">
        Home
      </HeaderButton>
      <HeaderButton to="/sign_up">Sign Up</HeaderButton>
      <HeaderButton to="/sign_in" onClick={() => props.signIn("", "")}>
        Sign In
      </HeaderButton>
    </div>
  );
};

export const Header = (props: IProps) => {
  const RightComponent = props.isAuthorized ? LogedInView : LogedOutView;

  return (
    <Nav>
      <NavHeader>
        <NavLeft>Mega App</NavLeft>
        <NavCenter>Title</NavCenter>
        <NavRight>
          <RightComponent {...props} />
        </NavRight>
      </NavHeader>
    </Nav>
  );
};
