import { connect } from "react-redux";
import { Dispatch } from "redux";
import { authActions } from "../../redux/auth/actions";
import { IStore } from "../../redux";
import { Header } from "./Header.flex";

function mapStateToProps(appState: IStore) {
  return {
    isAuthorized: !!(appState.auth.user && appState.auth.user.token),
    username: appState.auth.user && appState.auth.user.username
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    signOut: () => dispatch(authActions.signOut({ token: "1" }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
