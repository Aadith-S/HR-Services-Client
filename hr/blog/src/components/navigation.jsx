import React from "react";
import { NavLink } from "react-router-dom";


const logo = {
    height:"15vh",
    marginTop:"2vh"
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
  justifyContent:"center"
}

function Navigation() {
  return (
    <div style={navbar}>
      <NavLink to="/" style={logoLink}>
      <img src="https://cdn-icons-png.flaticon.com/512/5869/5869497.png" style={logo} alt="LOGO"/>  
      </NavLink>
    </div>
  );
}

export default Navigation;