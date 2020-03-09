import React from 'react'
import Row from 'react-bootstrap/Row'


export default () => {
    const upRowFoot = {
        backgroundColor: "#DCDCDC",
        height: "120px",
        width: '100% 100%',
        display: "flex",
        alignItems: "center"
    };

    const downRowFoot = {
        backgroundColor: "#F8F8FF",
        height: "40px",
        width: '100% 100%',
        display: "flex",
        alignItems: "center"
    };

    const fontFooter = {
        color: "#808080"
    };

    const divFooter ={
        marginBlockStart: '3rem',
        paddingBottom: "-1.5rem!important",
        



    }
    return (
        <div className="py-3" style={divFooter}>
            {/* PRIMERA ROW DE NAVBAR CON LOGO/BUSQUEDA/CARRITO Y USER */}
            <Row className="justify-content-md-center" style={upRowFoot}>
                <h3 className="d-flex justify-content-center" style={fontFooter}>Footer</h3>
            </Row>

            {/* SEGUNDA ROW DE NAVBAR CON BUSCAR POR BODEGA/CATEGORIAS/ORDENARPOR */}

        </div>
    )
}