import React from 'react'
import PaginaPrincipal from '../components/PaginaPrincipal'


import { connect } from "react-redux";
import { setInput } from "../actions/search";
import { withRouter } from "react-router-dom";
import {fetchSearchProducts} from "../actions/searchProductsActions";


class PaginaPrincipalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.redirect = this.redirect.bind(this)
    }
    handleChange(event) {
        this.setState({ input: event.target.value })

    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.getProducts(this.state.input)
        this.props.history.push('/products')// esta linea de cod. redirecciona al usuario cuando haga submit al formulario
    }
    redirect() {
        this.props.history.push('/products')
    }

    render() {

        return (
                <PaginaPrincipal
                    history={history}
                    redirect={this.redirect}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
        )
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
      setProductLocalStorage: () => dispatch(LocalStorageAction([])),
      setInput: input => dispatch(setInput(input)),
      getProducts: (input)=> dispatch(fetchSearchProducts(input)),
  
    };
  };
  
  
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PaginaPrincipalContainer)
  );

