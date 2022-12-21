import React from "react";
import { NavLink } from "react-router-dom";
import hrlogo from './HR_logo.png';

const logo = {
    height:"15vh",
    marginTop:"2v h"
}

const logoName = {
  fontFamily:"arial",
  marginTop:"2vh",
  textDecoration:"none",
  color:"white",
  alignSelf:"center" 
}

const navbar = {
  height:"20vh",
  backgroundColor:"black",
  width:"100vw",
  display:"flex",
  flexDirection:"row"
}

const logoLink = {
  display:"flex",
  flexDirection:"row",
  alignContent:"center",
  justifyContent:"center",
  color:'white'
}

function Navigation() {
  return (
    <div style={navbar}>
       <NavLink to="" style={logoLink}>
    <img src={hrlogo} style={logo} alt="LOGO"/>
    <div style={{width:'105px',display:'flex',justifyContent:'center',alignItems:'center'}}><h2>MY HR</h2></div>
    </NavLink>
    </div>
  );
}

export default Navigation;