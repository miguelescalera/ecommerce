import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import MainPrivate from "../components/MainPrivate"

import FooterContainer from "../containers/FooterContainer";




class PrivateContainer extends React.Component {
  constructor(props) {
      super(props)
  }


  
  render(){
    
    return (
      <div id="main">
       <MainPrivate/>
        
        <FooterContainer/>
      </div>
         );
       }
     };
     
    export default PrivateContainer;
         
       
        
          
  
      
  