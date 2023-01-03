import NavigationLogout from "../navigationLogout";
import { EmployeeSidebar } from "../sidebar/sideBar";
import { ViewAttendance } from "../essentials";
import { useQuery } from "react-query";
import { AttendanceOne } from "../../services/attendanceHandler";

function Employee_attendence(){
    const {data,isLoading} = useQuery("attendance",AttendanceOne);
    if(isLoading){
        return <>Loading ....</>
    }
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <EmployeeSidebar/>
            <ViewAttendance data={data.data}/>
            </div>
        </div>
    )
}

export default Employee_attendence;