import React from 'react'
import User from '../components/User'
import OrdenesContainer from './OrdenesContainer'



export default class UserContainer extends React.Component {

    render() {
        return (
            <div>
                <User />
                <OrdenesContainer />
            </div>
        )
    }
}