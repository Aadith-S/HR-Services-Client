import React, { useState } from "react";
import { login } from "../../services/accountsHandler"
import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, HR_dashboard, ManagerSidebar } from "../sidebar/sideBar";
import { Feedback, RequestLeave, ViewProfile } from "../essentials";



function Manager_feedback () {
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <ManagerSidebar/>
            <Feedback/>
            </div>
        </div>
    )
}

export default Manager_feedback;