import React from "react";
import { NavLink } from "react-router-dom";


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
  justifyContent:"center"
}

const logoutButton = {
  textDecoration:"none",
  color:"white",
  marginLeft:"80vw",
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
    <NavLink to="/dashboard" style={logoLink}>
    <img src="https://cdn-icons-png.flaticon.com/512/5869/5869497.png" style={logo} alt="LOGO"/>
    </NavLink>
    <NavLink to="/login"  style={logoutButton} onClick={logout}>
      <h3>Logout</h3>
    </NavLink>
  </div>
  );
}

export default NavigationLogout;