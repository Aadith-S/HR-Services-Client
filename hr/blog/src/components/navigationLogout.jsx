import React from "react";
import { NavLink } from "react-router-dom";
import hrlogo from './HR_logo.png';

const logo = {
    height:"15vh",
    marginTop:"2vh"
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
  color:"white"
}

const logoutButton = {
  textDecoration:"none",
  color:"white",
  marginLeft:"70vw",
  marginTop:"6vh"
}


function NavigationLogout() {
  function logout(){
    console.log("Logged out");
    localStorage.clear();
    console.log(localStorage.getItem("token"));
  }
  return (
    <div style={navbar}>
    <NavLink to="" style={logoLink}>
    <img src={hrlogo} style={logo} alt="LOGO"/>
    <div style={{width:'105px',display:'flex',justifyContent:'center',alignItems:'center'}}><h2>MY HR</h2></div>
    </NavLink>
    
    <NavLink to="/logout"  style={logoutButton} onClick={logout}>
      <h3>Logout</h3>
    </NavLink>
  </div>
  );
}

export default NavigationLogout;