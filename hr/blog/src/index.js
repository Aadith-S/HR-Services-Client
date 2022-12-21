import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Employee_dash from "./components/employee/employee_dash"
import Otp from "./components/otp";
import Employee_reqLeave from "./components/employee/employee_reqLeave";
import Employee_Feedback from "./components/employee/employee_feedback";
import { HR_dash } from "./components/hr/hr_dash";
import { HR_AddEmployee } from "./components/hr/hr_addEmployee";
import Employee_viewLeave from "./components/employee/employee_viewLeaveReq";
import Employee_attendence from "./components/employee/employee_attendance";
import Manager_viewReq from "./components/manager/manager_viewReq";
import Manager_attendance from "./components/manager/manager_attendance";
import Manager_dash from "./components/manager/manager_dash";
import Manager_feedback from "./components/manager/manager_feedback";
import Employee_ViewPayslip from "./components/employee/employee_paySlip";
import Manager_ViewPayslip from "./components/manager/manager_payslip";
import Manager_reqLeave from "./components/manager/manager_reqLeave";
import { ViewAllEmployee, ViewAllLeaveReq } from "./components/essentials";
import HR_viewAllEmployee from "./components/hr/hr_viewAllEmployee";
import HR_ViewAllPayslip from "./components/hr/hr_viewAllpayslip";
import HR_ViewAllLeaveReq from "./components/hr/hr_viewAllLeave";
import HR_viewAllAttendance from "./components/hr/hr_viewAllAttendance";
import { QueryClientProvider,QueryClient } from "react-query";
import Manager_viewLeave from "./components/manager/manager_viewLeaveReq";
import HR_viewAllFeedback from "./components/hr/hr_viewAllFeedbacks";
import HR_viewBank from "./components/hr/hr_viewBankDetails";

const queryClinet = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClinet}>
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/employee/dash" element={<Employee_dash/>}/>
      <Route path="/employee/reqLeave" element={<Employee_reqLeave/>}/>
      <Route path="/employee/viewLeave" element={<Employee_viewLeave/>}/>
      <Route path="/employee/viewPayslip" element={<Employee_ViewPayslip/>}/>
      <Route path="/employee/feedback" element={<Employee_Feedback/>}/>
      <Route path="/employee/attendance" element={<Employee_attendence/>}/>
      <Route path="/manager/leaveView" element={<Manager_viewReq/>}/>
      <Route path="/manager/viewLeave" element={<Manager_viewLeave/>}/>
      <Route path="/manager/dash" element={<Manager_dash/>}/>
      <Route path="/manager/feeback" element={<Manager_feedback/>}/>
      <Route path="/manager/viewPayslip" element={<Manager_ViewPayslip/>}/>
      <Route path="/manager/reqLeave" element={<Manager_reqLeave/>}/>
      <Route path="/manager/attendance" element={<Manager_attendance/>}/>
      <Route path="/hr/dash" element={<HR_dash/>}/>
      <Route path="/hr/addEmployee" element={<HR_AddEmployee/>}/>
      <Route path="/hr/viewAllEmployee" element={<HR_viewAllEmployee/>}/>
      <Route path="/hr/viewAllPayslip" element={<HR_ViewAllPayslip/>}/>
      <Route path="/hr/viewAllLeave" element={<HR_ViewAllLeaveReq/>}/>
      <Route path="/hr/viewAllAttendance" element={<HR_viewAllAttendance/>}/>
      <Route path="/hr/viewAllFeedback" element={<HR_viewAllFeedback/>}/>
      <Route path="/hr/viewBank" element={<HR_viewBank/>}/>
    </Routes>
  </Router>
  </QueryClientProvider>
);
