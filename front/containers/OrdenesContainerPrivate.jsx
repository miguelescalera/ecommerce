import React from "react";
import OrdenesPrivate from "../components/OrdenesPrivate";
import Accordion from "react-bootstrap/Accordion";

export default class OrdenesContainer extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const orders= this.props.orders

    


    return (
      <div>
       
          {orders.map(ordenes => {
                        return (
                            <OrdenesPrivate ordenes={ordenes}/>
                        )
                    })}
        
      </div>
    );
  }
}
