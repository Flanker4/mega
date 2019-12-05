import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "typescript-fsa";
import { authActions } from "../redux/auth/actions";
import { IStore } from "../redux";
import { Header } from "./Header.flex";

function mapStateToProps(appState: IStore) {
  return { isAuthorized: appState.auth.authenticated };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    signIn: (user: string, password: string) =>
      dispatch(authActions.logIn({ username: user, password: password })),
    signOut: () => dispatch(authActions.logOut())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
