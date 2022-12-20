import NavigationLogout from "../navigationLogout";
import { EmployeeSidebar, HR_Sidebar } from "../sidebar/sideBar";
import { ViewAllAttendance, ViewAttendance } from "../essentials";
import { useQuery } from "react-query";
import { AllAttendance } from "../../services/attendanceHandler";

function HR_viewAllAttendance(){
    const {data,isLoading} = useQuery("allaatendence",AllAttendance);
    if(isLoading){
        return <>Loading....</>
    }
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <HR_Sidebar/>
            <ViewAllAttendance data={data.data.data}/>
            </div>
        </div>
    )
}

export default HR_viewAllAttendance;