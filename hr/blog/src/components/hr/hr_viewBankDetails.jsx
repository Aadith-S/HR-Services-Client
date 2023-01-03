import NavigationLogout from "../navigationLogout";

import { EmployeeSidebar, HR_Sidebar } from "../sidebar/sideBar";

import {ViewBank} from "../essentials";
import { useQuery } from "react-query";
import { bankDeatils } from "../../services/bankHandler";
import { useLocation } from "react-router-dom";
function HR_viewBank(){
    const location = useLocation();
    const {id} = location.state;
    const {data,isLoading} = useQuery("BankDetails",()=>bankDeatils(id));
    if(isLoading){
        return <>Loading...</>
    }
    return(

        <div>

            <NavigationLogout/>

            <div style={{display:"flex"}}>

            <HR_Sidebar/>

            <ViewBank data = {data.data}/>

            </div>

        </div>
    )
}

export default HR_viewBank;