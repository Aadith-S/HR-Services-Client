import React from "react";
import './sidebar.css'

const sidebar = {
    height:"80vh",
    width:"20vw",
    backgroundColor:"beige",
    display:"flex",
    position:"relative"
}

export function EmployeeSidebar() {
    return (
        <div style={sidebar}>
            <ul className="sidebar">
                <b><h4>Employee Dashboard</h4></b>
                <li><a href="dash" className="tag"><span></span><span>View profile</span></a></li>
                <li><a href="reqLeave"className="tag"><span></span><span>Request leave</span></a></li>
                <li><a href="viewLeave"className="tag"><span></span><span>View your old leave requests</span></a></li>
                <li><a href="viewPayslip"className="tag"><span></span><span>View paysip</span></a></li>
                <li><a href="attendance"className="tag"><span></span><span>View attendence</span></a></li>
                <li><a href="feedback"className="tag"><span></span><span>Give a feedback</span></a></li>
            </ul>
            </div>
    );
}
export function ManagerSidebar() {
    return (
        <div style={sidebar}>
            <ul className="sidebar">
                <b><h4>Manager Dashboard</h4></b>
                <li><a href="dash" className="tag"><span></span><span>View profile</span></a></li>
                <li><a href="leaveView" className="tag"><span></span><span>View  requests</span></a></li>
                <li><a href="reqLeave"className="tag"><span></span><span>Request leave</span></a></li>
                <li><a href="viewPayslip"className="tag"><span></span><span>View paysip</span></a></li>
                <li><a href="attendance"className="tag"><span></span><span>View attendence</span></a></li>
                <li><a href="feeback"className="tag"><span></span><span>Give a feedback</span></a></li>
            </ul>
            </div>
    );
}

export function HR_Sidebar() {
    return (
        <div style={sidebar}>
            <ul className="sidebar">
                <b><h4>HR Dashboard</h4></b>
                <li><a href="/hr/dash" className="tag"><span></span><span>View profile</span></a></li>
                <li><a href="/hr/viewAllEmployee" className="tag"><span></span><span>View all employees details</span></a></li>
                <li><a href="viewAllLeave"className="tag"><span></span><span>View leave requests</span></a></li>
                <li><a href="viewAllPayslip"className="tag"><span></span><span>View payslip</span></a></li>
                <li><a href="viewAllAttendance"className="tag"><span></span><span>View attendence</span></a></li>
            </ul>
            </div>
    );
}



