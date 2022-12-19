import React, { useState } from "react";
import Navigation from "./navigation";

const bottomDiv = {
  height: "80vh",
  width: "100vw",
  backgroundColor: "white",
  display: "flex"
}
const leftDiv = {
  height: "80vh",
  width: "50vw",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignContent: "center"
}
const rightDiv = {
  height: "80vh",
  width: "50vw",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignContent: "center"
}

const inputRow = {
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "white",
  width: "50vw",
  height: "10vh",
  alignContent: "center",
  verticalAlign: "middle"
}
let table = {
  border: '0px',
  padding: '5px',
  borderCollapse: 'collapse',
  borderRadius: '5px',
  marginTop: '10vh'
}

let resend = {
  width:'6vw',
}
                   
let row = {
  display:'flex',
  width:'50vw'
}


function Otp() {

  return (
    <div>
      <Navigation />
      <div style={bottomDiv}>
        <div style={leftDiv}>
          
        </div>
        <div style={rightDiv}>
          <br />
          <h1 style={{marginLeft:'16vw'}}>OTP</h1>
          <br />
          <form>
            <div style={row}>
            <div class="form-outline mb-4" style={{ width: "20vw" }}>
              <label class="form-label" for="email">Enter the otp</label>
              <input type="text"
                name="otp"
                class="form-control" required
              />
            </div>
            <div style={resend} class="form-outline mb-4">
              <div style={{height:'5.5vh'}}></div>
              <a href="" class="btn btn-primary btn-block mb-4" style={{height:'6vh',marginLeft:'5vw'}}>resend</a>
              </div>
              </div>
            <input type="submit" class="btn btn-primary btn-block mb-4" style={{ width: "30vw" }} />
          </form>
        </div >
      </div >
    </div>
  );
}

export default Otp;