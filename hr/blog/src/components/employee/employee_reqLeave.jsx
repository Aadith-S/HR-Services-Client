import React, { useState } from "react";
import { login } from "../../services/accountsHandler"
import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, HR_dashboard, ManagerSidebar } from "../sidebar/sideBar";
import { RequestLeave, ViewProfile } from "../essentials";



function Employee_reqLeave () {
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <EmployeeSidebar/>
            <RequestLeave/>
            </div>
        </div>
    )
}

export default Employee_reqLeave;