<<<<<<< HEAD
import React from 'react'
// import User from '../components/User'
import UserOrdersContainer from './UserOrdersContainer'

export default class UserContainer extends React.Component {
    render() {
        return (
            <div>
                {/* <User /> */}
                <UserOrdersContainer />
            </div>
        )
    }
}
=======
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
>>>>>>> 4d6dd7f9442ed54d6bb0b1f565d82abe0f49a851
