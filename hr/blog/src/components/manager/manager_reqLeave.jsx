import React, { useState } from "react";
import { login } from "../../services/accountsHandler"
import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, HR_dashboard, ManagerSidebar } from "../sidebar/sideBar";
import { RequestLeave, ViewProfile } from "../essentials";



function Manager_reqLeave () {
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <ManagerSidebar/>
            <RequestLeave/>
            </div>
        </div>
    )
}

export default Manager_reqLeave;