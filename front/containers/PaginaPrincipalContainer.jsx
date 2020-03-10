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
        console.log(this.state.input)

    }
    handleSubmit(event) {
        console.log("Click")
        event.preventDefault()
        this.props.getProducts(this.state.input)
        this.props.redirect.history.push('/products')// esta linea de cod. redirecciona al usuario cuando haga submit al formulario
    }
    redirect() {
        this.props.redirect.history.push('/products')
    }

    render() {
        return (
            <div>
                <PaginaPrincipal
                    history={history}
                    redirect={this.redirect}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      setInput: input => dispatch(setInput(input)),
      getProducts: (input)=> dispatch(fetchSearchProducts(input)),
  
    };
  };
  
  
  
  export default withRouter(
    connect(null, mapDispatchToProps)(PaginaPrincipalContainer)
  );

