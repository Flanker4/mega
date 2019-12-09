import { connect } from "react-redux";
import { Dispatch } from "redux";
import { authActions } from "../../redux/auth/actions";
import { IStore } from "../../redux";
import { Header } from "./Header.flex";

function mapStateToProps(appState: IStore) {
  return { isAuthorized: appState.auth.authenticated };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    signOut: () => dispatch(authActions.signOut({ token: "1" }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
