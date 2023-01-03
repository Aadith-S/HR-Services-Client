import React from "react";
import {useNavigate, useParams } from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import './essentials.css'
import { submitFeedback } from "./../services/feedbackHandler";
import { useState } from "react";
import { leaveApppost, reqLeave } from "../services/leaveHandler";
import { RoleGet, roleinfoget } from "../services/roleHandler";
import { allEmployees,addEmployee, currentEmployee, updateEmployee } from "../services/employeeHandler";
import { updateAttendance } from "../services/attendanceHandler";
import { updatePaySlips } from "../services/paySlipHandler";

export function ViewProfile({ data ,hide}) {
    const attendence = useMutation(updateAttendance);
    const paySlip = useMutation(updatePaySlips);
    const classnames = "btn btn-primary col-4 m-5 "+hide+"";
    return (
        <div className="content">
            <h1 class="text-center">Profile view</h1>
            <div class="container">
                <table class="table table-striped mt-4">
                    <tbody><tr>
                        <th>Your employee ID :</th>
                        <td>{data.data.employee_id}</td>
                    </tr>
                    <tr>
                        <th>Name :</th>
                        <td>{data.data.name}</td>
                    </tr>
                    <tr>
                        <th>Address :</th>
                        <td>{data.data.address}</td>
                    </tr>
                    <tr>
                        <th>Department :</th>
                        <td>{data.data.department}</td>
                    </tr></tbody>
                </table>
            </div>
            <div>
            <button className={classnames} onClick={attendence.mutate}>Update Attendance</button>
            <button className={classnames} onClick={paySlip.mutate}>Update Pay Slip</button>
            </div>
        </div>
    )
}


export function RequestLeave() {
    const [from,setfrom] = useState("");
    const [to,setto] = useState("");
    const [type,setType] = useState("");
    const [reason,setReason] = useState("");
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    const {mutate,data,isSuccess} = useMutation(reqLeave)
    function reqsub(e){
        e.preventDefault();
        mutate({
            from : from,
            to : to,
            type : type,
            reason : reason
        });
        if(isSuccess){
            console.log("Leave successful");
            console.log(data);
            if(data.data.success){
                
                setSuccess(true);
                console.log(success);
            }
            else{
                setError(data.data.error[0]);
            }
        }
    }
    console.log(type);
    return (
        <div className="content">
            <div style={{ width: "80vw", height: "5vh" }}>
                <center><h2 style={{ fontFamily: "arial" }}><b>Request leave</b></h2></center>
            </div>
            <br />
            <center><div style={{ width: '40vh' }}>
                <form onSubmit={reqsub}>
                    <div className="form-group">
                        <label htmlFor="from">From :</label>
                        <input type="date" className="form-control" id="from" name="from" required onChange={e=>{setfrom(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>To :</label>
                        <input type="date" className="form-control" id="to" name="to" required onChange={e=>{setto(e.target.value)}} />
                    </div>
                    <div className="form-group">
                        <label>Type :</label>
                        <select name="type" id="type" className="form-control" onChange={e=>{setType(e.target.value)}}>
                            <option value="S" >Sick leave</option>
                            <option value="P" >Parental leave</option>
                            <option value="A" >Annual leave</option>
                            <option value="M" >Maternity leave</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="reason">Reason<span style={{ color: "red" }}><b>*</b></span> :</label>

                        <input type="text" className="form-control" id="reason" name="reason" required onChange={e=>{setReason(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" class="btn btn-primary btn-block mb-4" />
                    </div>
                </form>
                {success && <div className="alert alert-success">Feedback submitted</div>}
                {error && <div className="alert alert-success">{error}</div>}
            </div>
            </center>
        </div>
    )
}


export function Feedback() {
    const [feedback,setFeedback] = useState("")
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    var feed = {feedback : feedback}
    const feedbackData = useMutation(submitFeedback);
    function handleFeed(e){
        e.preventDefault();
        feedbackData.mutate(feed);
        if(feedbackData.isSuccess){
            console.log(feedbackData.data.data.success);
            if(feedbackData.data.data.success){
                
                setSuccess(true);
                console.log(success);
            }
            else{
                setError(feedbackData.data.data.error[0]);
            }
        }
    }
    return (
        <div className="content">

            <form onSubmit={handleFeed}>
                <center><div style={{ width: '30vw' }}>
                    <div className="form-group">
                        <label htmlFor="from">Please give your feedback here<span style={{ color: 'red' }}>*</span> : </label>
                        <input type="text" className="form-control" id="feedback" style={{ height: "15vh" }} name="feedback" value={feedback}
                        onChange={(e)=>setFeedback(e.target.value)}
                        required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" class="btn btn-primary btn-block mb-4" />
                    </div>
                </div>
                </center>
            </form>
            {success && <div className="alert alert-success">Feedback submitted</div>}
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}


export function AddEmployee() {
    const employeeinfo = useQuery("employeeinfo",allEmployees);
    const desigInfo = useQuery("desiginfo",RoleGet);
    const roleInfo = useQuery("roleinfo",roleinfoget);
    console.log(desigInfo.data,roleInfo.data);
    const [info,setInfo] = useState({
        name : "",
        address : "",
        dept : "",
        superior : null,
        desg_id : null,
        role_id : null,
        accNo : "",
        ifsc : "",
        BName : "",
        email : "",
        password : ""
    })
    function handleForm(e){
        console.log("hlo");
        e.preventDefault();
        mutate(info);
    }
    const navigate = useNavigate();
    const {mutate,isSuccess} = useMutation(addEmployee);
    if(isSuccess){
        navigate("/hr/viewAllEmployee")
    }
    if(roleInfo.isLoading){
        return <>Loading....</>
    }
    const getdesignation = (obj,index)=>{
        return (
            <option name="" id="" value={obj.role_id}>{obj.designation}</option>
        )
    }
    const getsuperior = (obj,index)=>{
        return (
            <option name="" id="" value={obj.employee_id}>{obj.employee_id}. {obj.name}</option>
        )
    }
    const getRole = (obj,index)=>{
        return (
            <option name="" id="" value={obj.role_id}>{obj.role_name}</option>
        )
    }
    console.log(info);
    return (
        <div className="main">
            <form onSubmit={handleForm}>
            <div className="container1">
                <div className="field">
                    <label style = {{"margin-right":"15px"}}  htmlFor="Name">NAME :</label>
                    <input type="text" id="Name" onChange={e=>setInfo((prev)=>({...prev,name : e.target.value}))}/>
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
                    <option disabled selected value></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"36px"}}  htmlFor="address">ADDRESS :</label>
                    <input type="text" id="address" onChange={e=>setInfo((prev)=>({...prev,address : e.target.value}))}/>
                </div>
                <div className="gap"></div>
                <br></br>
                <div className="bank">
                <div className="field">
                    <label style = {{"margin-right":"22px","margin-left":"60px","color":"rgb(88,227,104)"}}  htmlFor="city">BANK NAME :</label>

                    <br></br>
                    <select id="cars" style = {{"margin-left":"60px","font-size":"20px"}} onChange={e=>setInfo((prev)=>({...prev,BName : e.target.value}))}>
                        <option disabled selected value></option>
                       <option value="sbi">STATE BANK OF INDIA</option>
                       <option value="fdrl">FEDERAL BANK</option>
                       <option value="hdfc">HDFC BANK</option>
                      <option value="canera">CANERA BANKL</option>
                      </select>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"10px","margin-left":"60px","color":"rgb(88,227,104)"}}  htmlFor="pincode">BANK A/C NO :</label>
                    <input type="text" id="acnumber" style = {{"margin-left":"60px"}} onChange={e=>setInfo((prev)=>({...prev,accNo : e.target.value}))}/>
                </div>
                <div className="gap"></div>
                

                <div className="field">
                    <label style = {{"margin-right": "40px","margin-left":"60px","color":"rgb(88,227,104)"}}  htmlFor="country">IFSC CODE :</label>
                    <input type="text" id="ifsc" style = {{"margin-left":"60px"}} onChange={e=>setInfo((prev)=>({...prev,ifsc : e.target.value}))}/>
                </div>
            </div>
            </div>

            <div className="container2">
            <div className="field">
                    <label style = {{"margin-right":"40px"}}  htmlFor="state">EMAIL ID :</label>
                    <input type="text" id="state" onChange={e=>setInfo((prev)=>({...prev,email : e.target.value}))}/>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"40px"}}  htmlFor="state">Password:</label>
                    <input type="text" id="state" onChange={e=>setInfo((prev)=>({...prev,password : e.target.value}))}/>
                </div>
                <div className="gap"></div>
            <div className="field">
                    <label style = {{"margin-right":"80px"}}  htmlFor="email">Role:</label>
                    <select name="" id="" onChange={e=>setInfo((prev)=>({...prev,role_id : e.target.value}))}>
                    <option disabled selected value></option>
                    {roleInfo.data.data.data.map(getRole)}
                    </select>
                </div>
                <div className="gap"></div>
            
                <div className="department">
                    <label style = {{"margin-right":"12px"}}  htmlFor="department">Department :</label>
                    <select id="department" placeholder="choose department" onChange={e=>setInfo((prev)=>({...prev,dept : e.target.value}))}>
                    <option disabled selected value></option>
                        <option value="dts">DTS</option>
                        <option value="vvd">VVD</option>
                        <option value="pes">PES</option>
                    </select>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"83px"}}  htmlFor="role" >Designation :</label>
                    <select name="" id="" onChange={e=>setInfo((prev)=>({...prev,desg_id : e.target.value}))}>
                    <option disabled selected value></option>
                    {desigInfo.data.data.data.map(getdesignation)}
                    </select>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"20px"}}  htmlFor="superior1" onChange={e=>setInfo({superior : e.target.value})}>Superior(1) :</label>
                    <select name="" id="" onChange={e=>setInfo((prev)=>({...prev,superior : e.target.value}))}>
                    <option disabled selected value></option>
                    {employeeinfo.data.data.data.map(getsuperior)}
                    </select>
                </div>
                <div className="button">
                <button class="button-30" role="button">Register</button>
                </div>
            </div>
            </form>
        </div>
    )
}


export function ViewleaveRequests({ data }) {
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    const getOneRow = (obj, index) => {
        return (
            <tr>
            <td key={index}>{obj.req_id}</td>
            <td key={index}>{obj.from}</td>
            <td key={index}>{obj.to}</td>
            <td key={index}>{obj.type}</td>
            <td key={index}>{obj.reason}</td>
            <td key={index} style={{color:obj.color}}>{obj.approvalStatus}</td>
            </tr>
        )


    }

    return (
        <div class="container">
            <br />
            <center><h2>Request history</h2></center>
            <table class="table table-striped mt-4">
                <tr>
                    <th>id</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Type</th>
                    <th>reason</th>
                    <th>Approval Status</th>
                </tr>
                {data.success && data.data.map(getOneRow)}
            </table>
            {!data.success && <div className="alert alert-danger">{data.errors[0]}</div>}
        </div>
    )
}


export function Viewpayslip({ data }) {
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    const getOneRow = (obj, index) => {
        console.log(obj.attendence.workingDay);
        return (
            <tr>
            <td key={index}>{obj.attendence.workingDay.month}</td>
            <td key={index}>{obj.attendence.workingDay.year}</td>
            <td key={index}>{obj.amountPaid}</td>
            </tr>
        )


    }

    return (
        <div class="container">
            <br />
            <center><h2>Payslip history</h2></center>
            <table class="table table-striped mt-4">
                <tr>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Amount Paid</th>
                </tr>
                {data.success && data.data.map(getOneRow)}
            </table>
            {!data.success && <div className="alert alert-danger">{data.errors[0]}</div>}

        </div>
    )
}


export function ViewAttendance({ data }) {
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    const getOneRow = (obj, index) => {
        return (
            <tr>
            <td key={index}>{obj.workingDay.month}</td>
            <td key={index}>{obj.workingDay.year}</td>
            <td key={index}>{obj.workingDay.workingDays}</td>
            <td key={index}>{obj.leaves}</td>
            <td key={index}>{Math.floor((obj.workingDay.workingDays-obj.leaves)/obj.workingDay.workingDays * 100)+"%"}</td>
            </tr>
        )
    }
    return (
        <div class="container">
            <br />
            <center><h2>Attendance history</h2></center>
            <table class="table table-striped mt-4">
                <tr>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Total working days in the month</th>
                    <th>No of Leaves</th>
                    <th>Attendance %</th>
                </tr>
                {data.success && data.data.map(getOneRow)}
            </table>
            {!data.success && <div className="alert alert-danger">{data.errors[0]}</div>}

        </div>
    )
}


export function ManagerLeaveView({mdata}){
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    function handleRej(e){
        setData({
            req_id : e.target.id,
            status : "R"
        })
        mutate(data);
        console.log(data);
    }
    function handleA1(e){
        setData({
            req_id : e.target.id,
            status : "A1"
        })
        mutate(data);
        console.log(data);
    }
    function handleA2(e){
        setData({
            req_id : e.target.id,
            status : "A2"
        })
        mutate(data);
        console.log(data);
    }
    const [data,setData] = useState({
        req_id : 0,
        status : ""
    });
    let button = {
        border:"none",
        padding:"2px",
        height:"30px",
        borderRadius:"5px",
        width:"70px"
    }
    const {mutate} = useMutation(leaveApppost);
        const getdirectRow = (obj, index) => {
            return (
                <tr>
                <td key={index+1}>{obj.employee.employee_id}</td>
                <td key={index+2}>{obj.employee.name}</td>
                <td key={index+3}>{obj.employee.department}</td>
                <td key={index+4}>{obj.employee.address}</td>
                <td key={index+5}>{obj.from}</td>
                <td key={index+6}>{obj.to}</td>
                <td><button className="btn-success" id={obj.req_id} style={button} onClick={handleA1}>Approve</button></td>
                <td><button className="btn-danger" id={obj.req_id} style={button} onClick={
                    handleRej}>Reject</button></td>
                </tr>
            )
        }
        const getindirectRow = (obj, index) => {
            return (
                <tr>
                <td key={index+1}>{obj.employee_id}</td>
                <td key={index+2}>{obj.employee.name}</td>
                <td key={index+3}>{obj.employee.department}</td>
                <td key={index+4}>{obj.employee.address}</td>
                <td key={index+5}>{obj.from}</td>
                <td key={index+6}>{obj.to}</td>
                <td><button className="btn-success" id={obj.req_id} style={button} onClick={handleA2}>Approve</button></td>
                <td><button className="btn-danger" id={obj.req_id} style={button} onClick={handleRej}>Reject</button></td>
                </tr>
            )
        }
        return (
            <div>
            <div class="container">
                <br />
                <center><h2>Direct leave requests</h2></center>
                <table class="table table-striped mt-4">
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Address</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                    {mdata.data[0].map(getdirectRow)}
                </table>
                {/* {!mdata.success && <div className="alert alert-danger">{mdata.errors[0]}</div>} */}
                <center><h2>Indirect leave requests</h2></center>
                <table class="table table-striped mt-4">
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Address</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                    {mdata.data[1].map(getindirectRow)}
                </table>
                {/* {!mdata.success && <div className="alert alert-danger">{mdata.errors[0]}</div>} */}
            </div>
            </div>
        )
}


export function ViewAllEmployee({data}){
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    const navigate = useNavigate();
    function updateemp(e){
        navigate("/hr/updateEmployee",{state : {id : e.target.id}})
    }
    const getOneRow = (obj, index) => {
        return (
            <tr>
            <td key={index}>{obj.employee_id}</td>
            <td key={index}>{obj.name}</td>
            <td key={index}>{obj.department}</td>
            <td key={index}>{obj.address}</td>
            <td key={index}>{obj.companyMaster.designation}</td>
            <td key={index}><button className="btn btn-primary" id={obj.employee_id} onClick={updateemp}>Update Details</button></td>
            </tr>
        )
    }
    return (
        <div class="container">
            <br />
            <center><h2>All employees</h2></center><span><a href="/hr/addEmployee" className="btn btn-primary">Add an employee</a></span>
            <table class="table table-striped mt-4">
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Address</th>
                    <th>Designation</th>
                    
                </tr>
                {data.success && data.data.map(getOneRow)}
            </table>
            {!data.success && <div className="alert alert-danger">{data.errors[0]}</div>}
        </div>
    )
}


export function ViewAllpayslip({data}){
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    const navigate = useNavigate();
    function bankDet(e){
        navigate("/hr/viewBank",{state : {id : e.target.id}})
    }
    function paydet(e){
        navigate("/paySlip",{state : {id : e.target.id , month_id : e.target.value }})
    }
    const getOneRow = (obj, index) => {
        return (
            <tr>
            <td key={index}>{obj.attendence.employee_id}</td>
            <td key={index}>{obj.attendence.employee.name}</td>
            <td key={index}>{obj.attendence.workingDay.month}</td>
            <td key={index}>{obj.attendence.workingDay.year}</td>
            <td key={index}>{obj.amountPaid}</td>
            <td key={index}><button className="btn btn-primary" id={obj.attendence.employee_id} onClick={bankDet}>View Bank Details</button></td>
            <td key={index}><button className="btn btn-primary" id={obj.attendence.employee_id} value={obj.attendence.workingDay.month_id} onClick={paydet}>View Invoice</button></td>
            </tr>
        )
    }
    return (
        <div class="container">
            <br />
            <center><h2>Payslip history</h2></center>
            <table class="table table-striped mt-4">
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Amount paid</th>
                </tr>
                {data.success && data.data.map(getOneRow)}
            </table>
            {!data.success && <div className="alert alert-danger">{data.errors[0]}</div>}
        </div>
    )
}

export function ViewAllLeaveReq({data}){
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    const getOneRow = (obj, index) => {
        return (
            <tr>
            <td key={index}>{obj.req_id}</td>
            <td key={index}>{obj.employee_id}</td>
            <td key={index}>{obj.name}</td>
            <td key={index}>{obj.from}</td>
            <td key={index}>{obj.to}</td>
            <td key={index}>{obj.type}</td>
            <td key={index}>{obj.reason}</td>
            <td key={index} style={{color:obj.color}}>{obj.approvalStatus}</td>
            </tr>
        )
    }
    return (
        <div class="container">
            <br />
            <center><h2>Request history</h2></center>
            <table class="table table-striped mt-4">
                <tr>
                    <th>Req id</th>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Type</th>
                    <th>reason</th>
                    <th>Approval Status</th>
                </tr>
                {data.success && data.data.map(getOneRow)}
            </table>
            {!data.success && <div className="alert alert-danger">{data.errors[0]}</div>}
        </div>
    )
}

export function ViewAllAttendance({data}){
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    const getOneRow = (obj, index) => {
        let percentage = (obj.leaves/obj.workingdays)*100;
        percentage = (Math.round(percentage*100)/100).toFixed(2);    
        return (
            <tr>
            <td key={index}>{obj.employee_id}</td>
            <td key={index}>{obj.employee.name}</td>
            <td key={index}>{obj.workingDay.month}</td>
            <td key={index}>{obj.workingDay.year}</td>
            <td key={index}>{Math.floor((obj.workingDay.workingDays-obj.leaves)/obj.workingDay.workingDays * 100)+"%"}</td>
            </tr>
        )
    }
    return (
        <div class="container">
            <br />
            <center><h2>Attendance history</h2></center>
            <table class="table table-striped mt-4">
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Attendance</th>
                </tr>
                {data.success && data.data.map(getOneRow)}
            </table>
            {!data.success && <div className="alert alert-danger">{data.errors[0]}</div>}
        </div>
    )
}
export function ViewAllFeedback({data}){

    const [success,setSuccess] = useState();
    const [error,setError] = useState();

    const getOneRow = (obj, index) => {

       

        return (

            <tr>

            <td key={index}>{obj.employee.employee_id}</td>

            <td key={index}>{obj.employee.name}</td>

            <td key={index}>{obj.employee.department}</td>

            <td key={index}>{obj.feedback}</td>

            </tr>

        )

    }



    return(

        <div class="container">

        <br />

        <center><h2>Employee Feedback</h2></center>

        <table class="table table-striped mt-4">

            <tr>

                <th>Employee ID</th>

                <th>Name</th>

                <th>Department</th>

                <th>Feedback</th>

            </tr>

            {data.success && data.data.map(getOneRow)}
            </table>
            {!data.success && <div className="alert alert-danger">{data.errors[0]}</div>}


    </div>

    )

}




export function ViewBank({data}){
return(

        <div class="container">

        <br />

        <center><h2>Employee Bank Account Details</h2></center>

        <table class="table table-striped mt-4">

            <tr>

                <th>Employee ID</th>

                <th>Name</th>

                <th>Department</th>

                <th>Bank Ac.No</th>

                <th>IFSC Code</th>

                <th>Bank Name</th>

            </tr>

            <tr>

            <td>{data.employee.employee_id}</td>

            <td>{data.employee.name}</td>

            <td>{data.employee.department}</td>

            <td>{data.account_number}</td>

            <td>{data.ifsc}</td>

            <td>{data.bankName}</td>
            </tr>

        </table>



    </div>

    )

}

export function UpdateEmployee({id}){
    console.log("in update");
    const employeeinfo = useQuery("employeeinfo",allEmployees);
    const desigInfo = useQuery("desiginfo",RoleGet);
    const roleInfo = useQuery("roleinfo",roleinfoget);
    const [info,setInfo] = useState({});
    useQuery("currentEmp",()=>currentEmployee(id),{
        onSuccess : (data)=>{
            console.log(data.data.data.bankAccount);
            setInfo({
                name : data.data.data.name,
                address : data.data.data.address,
                dept : data.data.data.department,
                superior : data.data.data.superior1,
                desg_id : data.data.data.role_id,
                role_id : data.data.data.loginCredential.role_id,
                accNo : data.data.data.bankAccount.account_number,
                ifsc : data.data.data.bankAccount.ifsc,
                BName : data.data.data.bankAccount.bankName,
                email : data.data.data.loginCredential.email,
                password : null,
                id : id
            })
        }
    });
    function handleForm(e){
        console.log("hlo");
        e.preventDefault();
        mutate(info);
    }
    const navigate = useNavigate();
    const {mutate,isSuccess} = useMutation(updateEmployee);
    if(isSuccess){
        navigate("/hr/viewAllEmployee")
    }
    if(roleInfo.isLoading){
        return <>Loading....</>
    }
    const getdesignation = (obj,index)=>{
        if(obj.role_id === info.desg_id){
            return <option value={obj.role_id} selected>{obj.designation}</option>
        }
        return (
            <option name="" id="" value={obj.role_id}>{obj.designation}</option>
        )
    }
    const getsuperior = (obj,index)=>{
        if(obj.role_id === info.role_id){
            return <option value={obj.employee_id} selected>{obj.employee_id}. {obj.name}</option>
        }
        return (
            <option name="" id="" value={obj.employee_id}>{obj.employee_id}. {obj.name}</option>
        )
    }
    const getRole = (obj,index)=>{
        if(obj.role_id === info.role_id){
            return <option value={obj.role_id} selected>{obj.role_name}</option>
        }
        return (
            <option name="" id="" value={obj.role_id}>{obj.role_name}</option>
        )
    }
    console.log(info);
    return (
        <div className="main">
            <form onSubmit={handleForm}>
            <div className="container1">
                <div className="field">
                    <label style = {{"margin-right":"36px"}}  htmlFor="address">ADDRESS :</label>
                    <input type="text" id="address" onChange={e=>setInfo((prev)=>({...prev,address : e.target.value}))} value={info.address}/>
                </div>
                <div className="gap"></div>
                <br></br>
                <div className="bank">
                <div className="field">
                    <label style = {{"margin-right":"22px","margin-left":"60px","color":"rgb(88,227,104)"}}  htmlFor="city">BANK NAME :</label>
                    <br></br>
                    <select id="cars" style = {{"margin-left":"60px","font-size":"20px"}} onChange={e=>setInfo((prev)=>({...prev,BName : e.target.value}))}>
                        <option selected value={info.BName}>{info.BName}</option>
                       <option value="sbi">STATE BANK OF INDIA</option>
                       <option value="fdrl">FEDERAL BANK</option>
                       <option value="hdfc">HDFC BANK</option>
                      <option value="canera">CANERA BANKL</option>
                      </select>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"10px","margin-left":"60px","color":"rgb(88,227,104)"}}  htmlFor="pincode">BANK A/C NO :</label>
                    <input type="text" id="acnumber" style = {{"margin-left":"60px"}} onChange={e=>setInfo((prev)=>({...prev,accNo : e.target.value}))} value={info.accNo}/>
                </div>
                <div className="gap"></div>
                

                <div className="field">
                    <label style = {{"margin-right": "40px","margin-left":"60px","color":"rgb(88,227,104)"}}  htmlFor="country">IFSC CODE :</label>
                    <input type="text" id="ifsc" style = {{"margin-left":"60px"}} onChange={e=>setInfo((prev)=>({...prev,ifsc : e.target.value}))} value={info.ifsc}/>
                </div>
            </div>
            </div>

            <div className="container2">
            <div className="field">
                    <label style = {{"margin-right":"40px"}}  htmlFor="state">EMAIL ID :</label>
                    <input type="text" id="state" onChange={e=>setInfo((prev)=>({...prev,email : e.target.value}))} value={info.email}/>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"40px"}}  htmlFor="state">Password:</label>
                    <input type="text" id="state" onChange={e=>setInfo((prev)=>({...prev,password : e.target.value}))}/>
                </div>
                <div className="gap"></div>
            <div className="field">
                    <label style = {{"margin-right":"80px"}}  htmlFor="email">Role:</label>
                    <select name="" id="" onChange={e=>setInfo((prev)=>({...prev,role_id : e.target.value}))}>
                    <option disabled selected value></option>
                    {roleInfo.data.data.data.map(getRole)}
                    </select>
                </div>
                <div className="gap"></div>
            
                <div className="department">
                    <label style = {{"margin-right":"12px"}}  htmlFor="department">Department :</label>
                    <select id="department" placeholder="choose department" onChange={e=>setInfo((prev)=>({...prev,dept : e.target.value}))} value={info.dept}>
                    <option selected value={info.dept}>{info.dept}</option>
                        <option value="dts">DTS</option>
                        <option value="vvd">VVD</option>
                        <option value="pes">PES</option>
                    </select>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"83px"}}  htmlFor="role" >Designation :</label>
                    <select name="" id="" onChange={e=>setInfo((prev)=>({...prev,desg_id : e.target.value}))}>
                    <option disabled selected value></option>
                    {desigInfo.data.data.data.map(getdesignation)}
                    </select>
                </div>
                <div className="gap"></div>
                <div className="field">
                    <label style = {{"margin-right":"20px"}}  htmlFor="superior1" onChange={e=>setInfo({superior : e.target.value})}>Superior(1) :</label>
                    <select name="" id="" onChange={e=>setInfo((prev)=>({...prev,superior : e.target.value}))}>
                    <option disabled selected value></option>
                    {employeeinfo.data.data.data.map(getsuperior)}
                    </select>
                </div>
                <div className="button">
                <button class="button-30" role="button">Register</button>
                </div>
            </div>
            </form>
        </div>)
}