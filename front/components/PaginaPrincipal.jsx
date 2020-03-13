import React from "react";
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { Player } from 'video-react';



export default ({
  handleSubmit,
  handleChange,
  history
}) => {


  const imgStyles = {
    background: 'url(https://i.imgur.com/HtMp3dQ.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: 'auto'
  }




  const bodyStyles = {
    position: 'fixed',
    display:'flex',
    flexDirection:'column',


  }

  const containerStyles = {

    // margin: 'auto',
    // width: '50%',
    // padding: '10px',


    marginLeft: '37%',
    gridArea: '1 / 1 / auto / auto',
    position: 'fixed',
    marginBlockStart: '15%',
    zIndex:'1',
    
    // backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
  const formStyles = {
    width: "12rem",
    textAlign: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: '1.5rem'
  }

  const videoStyle = {
    zIndex:'0',
    position: 'fixed',
    backgroundPosition: 'center',
    paddingTop: '0% !important',
    gridArea: '1 / 1'
  }

 
  return (
    <div style={bodyStyles}>

      
      <div style={containerStyles}>


        <h1 style={{ color: '#ffffff', paddingBottom: '1.5rem', display:'block' }}>

          ¿Qué vino querés probar hoy?
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
          <Button styles={{ paddingTop: '2rem' }} variant="dark" onClick={handleSubmit} >
            Probar
            </Button>
        </Form>
      </div>

    <div style={{gridArea: '1 / 1'}} >
      {/* <video id='myvideo' autoPlay="autoplay"  preload='auto' loop src="./media/videofondo.mp4" ></video> */}
      <Player autoPlay loop style={videoStyle}
        src="./media/videofondo.mp4"
        />
      </div>
    
            </div>
  );
};


