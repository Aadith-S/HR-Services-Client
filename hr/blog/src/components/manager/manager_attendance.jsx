import NavigationLogout from "../navigationLogout";
import { ManagerSidebar } from "../sidebar/sideBar";
import { ViewAttendance } from "../essentials";
import { useQuery } from "react-query";
import {AttendanceOne} from "../../services/attendanceHandler"
function Manager_attendance(){
    const {data,isLoading} = useQuery("attendance",AttendanceOne);
    if(isLoading){
        return <>Loading ....</>
    }
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <ManagerSidebar/>
            <ViewAttendance data={data.data.data}/>
            </div>
        </div>
    )
}

export default Manager_attendance;