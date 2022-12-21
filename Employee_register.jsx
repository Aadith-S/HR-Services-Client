import React from "react";
import './Employee_register.css';

function Employee_register() {
    return (
        <div className="main">
            <form method="post">
            <div className="container1">
                <div className="field">
                    <label style = {{"margin-right":"12px"}} htmlFor="firstName">FIRST NAME :</label>
                    <input type="text" id="firstName" />
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"15px"}}  htmlFor="lastName">LAST NAME :</label>
                    <input type="text" id="firstName" />
                </div>
                <div className="gap"></div>
                <div className="dob">
                    <label style = {{"margin-right":"83px"}}  htmlFor="dateofbirth">DOB :</label>
                    <input type="date" id="dateOfBirth" />
                </div>
                <div className="gap"></div>
                <div className="type">
                    <label style = {{"margin-right":"46px"}}  htmlFor="gender">GENDER :</label>
                    <select id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"36px"}}  htmlFor="address">ADDRESS :</label>
                    <input type="text" id="address" />
                </div>
                <div className="gap"></div>
                <br></br>
                <div className="bank">
                <div className="field">
                    <label style = {{"margin-right":"22px","margin-left":"60px","color":"rgb(88,227,104)"}}  htmlFor="city">BANK NAME :</label>

                    <br></br>
                    <select id="cars" style = {{"margin-left":"60px","font-size":"20px"}}>
    
                       <option value="sbi">STATE BANK OF INDIA</option>
                       <option value="fdrl">FEDERAL BANK</option>
                       <option value="hdfc">HDFC BANK</option>
                      <option value="canera">CANERA BANKL</option>
                      </select>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"10px","margin-left":"60px","color":"rgb(88,227,104)"}}  htmlFor="pincode">BANK A/C NO :</label>
                    <input type="text" id="acnumber" style = {{"margin-left":"60px"}} />
                </div>
                <div className="gap"></div>
                

                <div className="field">
                    <label style = {{"margin-right": "40px","margin-left":"60px","color":"rgb(88,227,104)"}}  htmlFor="country">IFSC CODE :</label>
                    <input type="text" id="ifsc" style = {{"margin-left":"60px"}} />
                </div>
            </div>
            </div>

            <div className="container2">
            <div className="field">
                    <label style = {{"margin-right":"40px"}}  htmlFor="state">EMAIL ID :</label>
                    <input type="text" id="state" />
                </div>
                <div className="gap"></div>
            <div className="field">
                    <label style = {{"margin-right":"80px"}}  htmlFor="email">ROLE:</label>
                    <input type="text" id="firstName" />
                </div>
                <div className="gap"></div>
            
                <div className="department">
                    <label style = {{"margin-right":"12px"}}  htmlFor="department">Department :</label>
                    <select id="department" placeholder="choose department">
                        
                        <option value="dts">DTS</option>
                        <option value="vvd">VVD</option>
                        <option value="pes">PES</option>
                    </select>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"83px"}}  htmlFor="role">Role :</label>
                    <input type="text" id="role" />
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"20px"}}  htmlFor="suprior1">Superior(1) :</label>
                    <input type="text" id="superior" />
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"19px"}}  htmlFor="suprior2">Superior(2) :</label>
                    <input type="text" id="superior" />
                </div>
                <div className="button">
                <button class="button-30" role="button">Register</button>
                </div>
            </div>




            </form>
        </div>
    );
}
export default Employee_register;