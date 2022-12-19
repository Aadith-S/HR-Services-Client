import React, { useState } from "react";
import { login } from "../../services/accountsHandler"
import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, HR_dashboard, ManagerSidebar } from "../sidebar/sideBar";
import { Feedback, RequestLeave, ViewProfile } from "../essentials";



function Employee_Feedback () {
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <EmployeeSidebar/>
            <Feedback/>
            </div>
        </div>
    )
}

export default Employee_Feedback;