import React from "react";
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


export default ({
  handleSubmit,
  handleChange,
  redirect
}) => {
  const imgStyles = {
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'

  }
  const bodyStyles = {
    position: 'fixed',
    top: 0,
    right: 0,
  }

  const containerStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    textAlign: 'center',
    paddingTop: '20%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
  const formStyles = {
    width: "12rem",
    textAlign: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: '1.5rem'
  }

  return (
    <body style={bodyStyles} >
      <div style={containerStyles}>
        <Image

          width={150}
          height={'auto'}



          src={"https://i.imgur.com/vOMwX0n.png"}
        />
        <h1 style={{ color: '#ffffff', paddingBottom: '1.5rem' }}>
          ¿Que vino queres probar hoy?
        </h1>
        <Form type="submit" style={formStyles} onSubmit={handleSubmit}>
          {" "}
          {/*aca esta el handle submit*/}
          <FormControl
            onChange={handleChange}
            type="text"
            placeholder="Malbec"
            className="mr-sm-2"
          />
          <br />
          {/*el formulario no esta siendo controlado del todo, igual deberia funcionar*/}
          <Button styles={{ paddingTop: '2rem' }} variant="light" onClick={handleSubmit} >
            Probar
            </Button>
        </Form>
      </div>
      {/* <Image src="https://i.imgur.com/3bLGgC1.jpg" style={imgStyles} />  */}
      {/* copadevino */}


      {/* <Image src="https://i.imgur.com/KKsqYPV.jpg" style={imgStyles} /> */}
      {/* botellasdecolores */}

      {/* <Image src="https://i.imgur.com/CP0CcBX.png" style={imgStyles} /> */}
      {/* chicassonriendo */}





      <Image src="https://i.imgur.com/ZF9uAdn.jpg" style={imgStyles} />
      {/* chicassonriendoALT */}

      {/* <Image src="https://i.imgur.com/cTyCueG.jpg" style={imgStyles} /> */}
    </body>
  );
};


