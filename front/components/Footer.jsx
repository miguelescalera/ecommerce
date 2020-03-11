import React from 'react'
import Row from 'react-bootstrap/Row'


export default () => {
    const upRowFoot = {
        backgroundColor: "#DCDCDC",
        height: "40px",
        width: '100% 100%',
        display: "flex",
        alignItems: "center"
    };

    const downRowFoot = {
        
        backgroundColor: "#f1aa96",
        // backgroundColor: "#b52a3a",
        height: "40px",
        width: '100% 100%',
        display: "flex",
        alignItems: "center",
        boxShadow :'-8px -8px 15px -10px rgba(0,0,0,0.39)'
    };

    const fontFooter = {
        color: "#919191"
    };

    const divFooter = {
        marginBlockStart: '6rem',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%'

    }

    const downRowNav = {
    backgroundColor: "#F8F8FF",
    height: "40px",
    width:'100% 100%',
    display: "flex",
    alignItems: "center",
    boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',
    

  };
    return (
        <div style={divFooter}>
            {/* PRIMERA ROW DE NAVBAR CON LOGO/BUSQUEDA/CARRITO Y USER */}
            <Row className="justify-content-md-center" style={downRowFoot}>
                <h5 className="d-flex justify-content-center" style={fontFooter}>WineNot?</h5>
            </Row>

            {/* SEGUNDA ROW DE NAVBAR CON BUSCAR POR BODEGA/CATEGORIAS/ORDENARPOR */}

        </div>
    )
}