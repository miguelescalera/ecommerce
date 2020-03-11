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