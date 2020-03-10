import React from "react";
import User from "../components/User";
import OrdenesContainer from "./OrdenesContainer";


export default class UserContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <User />
        <OrdenesContainer />
      </div>
    );
  }
}
