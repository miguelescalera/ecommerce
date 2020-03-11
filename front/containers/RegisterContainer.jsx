import React from "react"
import Register from "../components/Register"
import { newUser } from "../actions/users"
import { connect } from 'react-redux'



const mapDispatchToProps = (dispatch, state) => {
    return {
        newUser: data => dispatch(newUser(data)),

    }
}
const mapStateToProps = function (state) {
    return {
        idUser: state.user.loginUser.id
    }
}

class RegisterContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        let value = e.target.value
        let key = e.target.name
        this.setState({ [key]: value })

    }

    handleSubmit(e) {

        e.preventDefault();

        this.props.newUser(this.state)

        localStorage.setItem('email', this.state.email)
        localStorage.setItem('password', this.state.password)

        this.props.history.push("/users/login")
    }






    render() {
        return (
            <div>
                <h3 className="d-flex justify-content-center" style={{ marginBlockEnd: "1.5rem", marginBlockStart: "1.5rem" }}>Registro</h3>

                <Register handleChange={this.handleChange} handleSubmit={this.handleSubmit} input={this.state} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
