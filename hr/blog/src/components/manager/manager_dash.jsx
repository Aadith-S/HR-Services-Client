import React, { useState } from "react";
import { login } from "../../services/accountsHandler"
import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, HR_Sidebar, ManagerSidebar } from "../sidebar/sideBar";
import { RequestLeave, ViewProfile } from "../essentials";
import {useQuery} from "react-query"
import {profile} from "../../services/accountsHandler"
function Manager_dash () {
    const {data,isLoading,isError}  = useQuery("profile",profile);
    if(isLoading){
        return <>isLoading</>
    }
    if(isError){
        return <>is Error</>
    }
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <ManagerSidebar/>
            <ViewProfile data={data.data} hide = "hide"/>
            </div>
        </div>
    )
}

export default Manager_dash;