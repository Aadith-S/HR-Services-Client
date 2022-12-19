import React, { useState } from "react";
import { login } from "../../services/accountsHandler"
import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, HR_dashboard, ManagerSidebar } from "../sidebar/sideBar";
import { RequestLeave, ViewAllLeaveReq, ViewleaveRequests, ViewProfile } from "../essentials";
import { useQuery } from "react-query";
import { viewLeaves } from "../../services/leaveHandler";
function Employee_viewLeave () {
    const {data,isLoading} = useQuery("viewLeave",viewLeaves)
    if(isLoading){
        return <>Loading....</>
    }
for(let i = 0; i<data.data.data.length; i++){
    if(data.data.data[i].approvalStatus==null){
        data.data.data[i].approvalStatus = "Pending"
        data.data.data[i].color = "grey"
    }
    else if(data.data.data[i].approvalStatus=="A1"){
        data.data.data[i].approvalStatus="Being Reviewed"
        data.data.data[i].color = "blue"
    }
    else if(data.data.data[i].approvalStatus=="A2"){
        data.data.data[i].approvalStatus="Approved"
        data.data.data[i].color = "green"
    }
    else if(data.data.data[i].approvalStatus=="R"){
        data.data.data[i].approvalStatus="Rejected"
        data.data.data[i].color = "red"
    }
}

    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <EmployeeSidebar/>
            <ViewleaveRequests data={data.data.data}/>
            </div>
        </div>
    )
}

export default Employee_viewLeave;