import React, { useState } from "react";
import { login } from "../../services/accountsHandler"
import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, HR_Sidebar, ManagerSidebar } from "../sidebar/sideBar";
import { RequestLeave, ViewProfile } from "../essentials";



let data = {
    employee_id:'5',
    name:'abishek',
    address:'393, erode main road, thamaraipalayam, erode, tamilnadu',
    department:'ess',
    superior1:'1'
}

function Manager_dash () {
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <ManagerSidebar/>
            <ViewProfile data={data}/>
            </div>
        </div>
    )
}

export default Manager_dash;