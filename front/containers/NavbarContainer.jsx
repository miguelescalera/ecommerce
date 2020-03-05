import React from "react";
import Navbars from "../components/Navbar";

import { connect } from "react-redux";
import { setInput } from "../actions/search";
import { withRouter } from "react-router-dom";
import addLogin from "../actions/LoginActions";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div>
        <Navbars
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          emailUser={this.props.email}
          dispatchLogout={this.props.dispatchLogout}
        />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    foundProducts: state.foundProducts,
    email: state.user.loginUser.email
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setInput: input => dispatch(setInput(input)),
    dispatchLogout: () => dispatch(addLogin(""))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
);
