import React from "react";
import { json } from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import './essentials.css'
import { submitFeedback } from "./../services/feedbackHandler";
import { useState } from "react";
import { leaveApppost, reqLeave } from "../services/leaveHandler";
import { RoleGet, roleinfoget } from "../services/roleHandler";
import { allEmployees,addEmployee } from "../services/employeeHandler";
import { updateAttendance } from "../services/attendanceHandler";
import { updatePaySlips } from "../services/paySlipHandler";

export function ViewProfile({ data }) {
    const attendence = useMutation(updateAttendance);
    const paySlip = useMutation(updatePaySlips);
    return (
        <div className="content">
            <h1 class="text-center">Profile view</h1>
            <div class="container">
                <table class="table table-striped mt-4">
                    <tbody><tr>
                        <th>Your employee ID :</th>
                        <td>{data.employee_id}</td>
                    </tr>
                    <tr>
                        <th>Name :</th>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <th>Address :</th>
                        <td>{data.address}</td>
                    </tr>
                    <tr>
                        <th>Department :</th>
                        <td>{data.department}</td>
                    </tr></tbody>
                </table>
            </div>
            <div>
            <button className="btn btn-primary col-4 m-5" onClick={attendence.mutate}>Update Attendance</button>
            <button className="btn btn-primary col-4 " onClick={paySlip.mutate}>Update Pay Slip</button>
            </div>
        </div>
    )
}


export function RequestLeave() {
    const [from,setfrom] = useState("");
    const [to,setto] = useState("");
    const [type,setType] = useState("");
    const [reason,setReason] = useState("");
    const [submitted,setSubmitted] = useState(false);
    function reqsub(e){
        e.preventDefault();
        mutate({
            from : from,
            to : to,
            type : type,
            reason : reason
        });
        setSubmitted(true);
    }
    console.log(type);
    // const {data,isLoading,refetch} = useQuery("requestLeave",()=>reqLeave({
    //     from : from,
    //     to : to,
    //     type : type,
    //     reason : reason
    // }),
    // {
    //     enabled : false
    // })
    // if(isLoading) {
    //     return <>Loading....</>
    // }
    const {mutate} = useMutation(reqLeave)
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
                {submitted && <div className="alert alert-success">Request Submitted</div>}
            </div>
            </center>
        </div>
    )
}


export function Feedback() {
    function handleFeed(e){
        e.preventDefault();
        refetch();
    }
    const [feedback,setFeedback] = useState("")
    var feed = {feedback : feedback}
    console.log(feed);
    const {data,isLoading,refetch} = useQuery(["feedback"],()=>submitFeedback(feed),{
        enabled : false,
    })
    if(isLoading){
        return <>Loading...</>
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
            {data && <div className="alert alert-success">Feedback submitted</div>}
        </div>
    )
}


export function AddEmployee() {
    // const [name,setName] = useState("");
    // const [address,setAddress] = useState("");
    // const [dept,setDept] = useState("");
    // const [superior,setSuperior] = useState();
    // const [role_id,setRoleId] = useState();
    const employeeinfo = useQuery("employeeinfo",allEmployees);
    const desigInfo = useQuery("desiginfo",RoleGet);
    const roleInfo = useQuery("roleinfo",roleinfoget)
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
    const {mutate} = useMutation(addEmployee);
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
        // <div style={{ width: '70vw', height: "80vh" }}>
        //     <center><h2 style={{ fontFamily: 'arial' }}>Add Employee</h2></center>
        //     <div class="row">
        //         <div class="col-sm-6 offset-sm-3">
        //             <form onSubmit={handleForm} >
        //                 <div>
        //                     <label for="name">Name</label>
        //                     <input type="name" name="name" id="email" class="form-control" onChange={e=>setName(e.target.value)} />
        //                 </div>
        //                 <div>
        //                     <label for="address">Address</label>
        //                     <input type="text" name="address" id="addresss" class="form-control"onChange={e=>setAddress(e.target.value)} />
        //                 </div>
        //                 <div>
        //                     <label for="department">Department</label>
        //                     <input type="text" name="department" id="department" class="form-control" onChange={e=>setDept(e.target.value)}/>
        //                 </div>

        //                 <div>
        //                     <label for="superior">Superior</label>
        //                     <select name="" id="" onChange={e=>setSuperior(e.target.value)} >
        //                     <option disabled selected value></option>
        //                     {employeeinfo.data.data.data.map(getsuperior)}
        //                     </select>
        //                 </div>
        //                 <div>
        //                     <label for="role_id">RoleId </label>
        //                     <select name="" id="" onChange={e=>setRoleId(e.target.value)} >
        //                         <option disabled selected value></option>
        //                     {roleInfo.data.data.data.map(getdesignation)}
        //                     </select>
        //                 </div>
        //                 <br />

        //                 <input type="submit" className="btn btn-primary col-4" value="Submit" />

        //             </form>
        //         </div>
        //     </div>
        // </div>
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
                {data.map(getOneRow)}
            </table>

        </div>
    )
}


export function Viewpayslip({ data }) {

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
                {data.map(getOneRow)}
            </table>

        </div>
    )
}


export function ViewAttendance({ data }) {
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
                {data.map(getOneRow)}
            </table>

        </div>
    )
}


export function ManagerLeaveView({mdata}){
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
                    {mdata[0].map(getdirectRow)}
                </table>
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
                    {mdata[1].map(getindirectRow)}
                </table>
            </div>
            </div>
        )
}


export function ViewAllEmployee({data}){

    const getOneRow = (obj, index) => {
        return (
            <tr>
            <td key={index}>{obj.employee_id}</td>
            <td key={index}>{obj.name}</td>
            <td key={index}>{obj.department}</td>
            <td key={index}>{obj.address}</td>
            <td key={index}>{obj.companyMaster.designation}</td>
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
                {data.map(getOneRow)}
            </table>

        </div>
    )
}


export function ViewAllpayslip({data}){
    const getOneRow = (obj, index) => {
        return (
            <tr>
            <td key={index}>{obj.attendence.employee_id}</td>
            <td key={index}>{obj.attendence.employee.name}</td>
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
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Amount paid</th>
                </tr>
                {data.map(getOneRow)}
            </table>

        </div>
    )
}

export function ViewAllLeaveReq({data}){
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
                    <th>REQ id</th>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Type</th>
                    <th>reason</th>
                    <th>Approval Status</th>
                </tr>
                {data.map(getOneRow)}
            </table>

        </div>
    )
}

export function ViewAllAttendance({data}){

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
                {data.map(getOneRow)}
            </table>

        </div>
    )
}