import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginform, redirectdash } from "../services/accountsHandler"
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

const showPassword = {
  marginLeft: "15vw",
  border: "none",
  padding: "5px"
}
const h1 = {
  marginLeft: "16vw"
}
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const login = useMutation(loginform)
  function HandleForm(e) {
    e.preventDefault();
    login.mutate({
      email: email,
      password: password
    })
  }
  if(login.isSuccess){
    if(!login.data.data.success){
      setErrorMessage(login.data.data.errors[0]);
      return;
    }
    else{
      localStorage.setItem('token', login.data.data.data);
      setLoggedIn(true);
      navigate("/otp");
    }
  }
  return (
    <div>
      <Navigation />
      <div style={bottomDiv}>
        <div style={leftDiv}>
          <img src="https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg?w=826&t=st=1670952650~exp=1670953250~hmac=7c134f3179785ab87e5cda1f1982a63dd512b0492af90a102807d85f08a724c2"
            style={{ width: "45vw" }} alt="LOGO" />
        </div>
        <div style={rightDiv}>
          <br />
          <h1 style={h1}>Login</h1>
          <br />
          <form onSubmit={HandleForm}>
            <div class="form-outline mb-4" style={{ width: "40vw" }}>
              <label class="form-label" for="email">Email address</label>
              <input type="email"
                name="email"
                class="form-control" required
                onChange={e => { setEmail(e.target.value) }}
              />
            </div>
            <div class="form-outline mb-4" style={{ width: "40vw" }}>
              <label class="form-label" for="password">Password</label>
              <input type="password" id="password" name="password" class="form-control" required
                onChange={e => { setPassword(e.target.value) }}
              />
            </div>
            <div class="form-outline mb-4">
              <input type="checkbox" style={showPassword} />
              <label class="form-label" for="showPassword" style={{ marginLeft: "1.5vw" }}>Show Password</label>
            </div>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <input type="submit" class="btn btn-primary btn-block mb-4" style={{ width: "40vw" }} />
          </form>
        </div >
      </div >
    </div >

  );
}

export default Login;