import React from "react";
import { json } from "react-router-dom";
import {useQuery} from "react-query";
import './essentials.css'
import { submitFeedback } from "./../services/feedbackHandler";
import { useState } from "react";
import { reqLeave } from "../services/leaveHandler";

export function ViewProfile({ data }) {

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
        </div>
    )
}


export function RequestLeave() {
    function reqsub(e){
        e.preventDefault();
        refetch();
    }
    const [from,setfrom] = useState("");
    const [to,setto] = useState("");
    const [type,setType] = useState("");
    const [reason,setReason] = useState("");
    console.log(type);
    const {data,isLoading,refetch} = useQuery("requestLeave",()=>reqLeave({
        from : from,
        to : to,
        type : type,
        reason : reason
    }),
    {
        enabled : false
    })
    if(isLoading) {
        return <>Loading....</>
    }
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
                {data && <div className="alert alert-success">Request Submitted</div>}
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
    const {name,setName} = useState("");
    const {address,setAddress} = useState("");
    return (
        <div style={{ width: '70vw', height: "80vh" }}>
            <center><h2 style={{ fontFamily: 'arial' }}>Add Employee</h2></center>
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <form method="post" >
                        <div>
                            <label for="name">Name</label>
                            <input type="name" name="name" id="email" class="form-control" />
                        </div>
                        <div>
                            <label for="address">Address</label>
                            <input type="text" name="address" id="addresss" class="form-control" />
                        </div>
                        <div>
                            <label for="department">Department</label>
                            <input type="text" name="department" id="department" class="form-control" />
                        </div>

                        <div>
                            <label for="superior1">Superior1</label>
                            <input type="text" name="superior1" id="superior1" class="form-control" />
                        </div>
                        <div>
                            <label for="superior2">Superior2</label>
                            <input type="text" name="superior2" id="superior2" class="form-control" />
                        </div>
                        <div>
                            <label for="role_id">RoleId </label>
                            <input type="integer" name="role_id" id="role_id" class="form-control" />
                        </div>
                        <br />

                        <div class=" offset-0">
                            <button class="btn btn-primary  col-12  ">Save</button>
                        </div>

                    </form>
                </div>
            </div>
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


export function ManagerLeaveView({data}){
    let button = {
        border:"none",
        padding:"2px",
        height:"30px",
        borderRadius:"5px",
        width:"70px"
    }
        const getOneRow = (obj, index) => {
            return (
                <tr>
                <td key={index}>{obj.employee_id}</td>
                <td key={index}>{obj.employee.name}</td>
                <td key={index}>{obj.employee.department}</td>
                <td key={index}>{obj.employee.address}</td>
                <td key={index}>{obj.from}</td>
                <td key={index}>{obj.to}</td>
                <td key={index}><button className="btn-success" style={button}>Approve</button></td>
                <td key={index}><button className="btn-danger" style={button}>Reject</button></td>
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
                    {data.map(getOneRow)}
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
            <td key={index}>{obj.employee_id}</td>
            <td key={index}>{obj.name}</td>
            <td key={index}>{obj.month}</td>
            <td key={index}>{obj.year}</td>
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
            <td key={index}>{obj.name}</td>
            <td key={index}>{obj.month}</td>
            <td key={index}>{obj.year}</td>
            <td key={index}>{percentage}</td>
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