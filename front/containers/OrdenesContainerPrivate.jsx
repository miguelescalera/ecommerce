import React from "react";
import Ordenes from "../components/Ordenes";
import Accordion from "react-bootstrap/Accordion";

export default class OrdenesContainer extends React.Component {
  render() {
    return (
      <div>
        <Accordion>
          <Ordenes />
          {/* {ordenes.map(orden => {
                        return (
                            <Ordenes orden={orden}/>
                        )
                    })} */}
        </Accordion>
      </div>
    );
  }
}
