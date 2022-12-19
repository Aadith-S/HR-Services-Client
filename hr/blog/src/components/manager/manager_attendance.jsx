import NavigationLogout from "../navigationLogout";
import { EmployeeSidebar, ManagerSidebar } from "../sidebar/sideBar";
import { ViewAttendance } from "../essentials";



let attendenceData = [
    {
        name:'abishek',
        month:'Feb',
        year:"2022",
        workingdays:'27',
        leaves:'24'
    },
    {
        name:'abishek',
        month:'Mar',
        year:"2022",
        workingdays:'28',
        leaves:'20'
    },
    {
        name:'abishek',
        month:'April',
        year:"2022",
        workingdays:'25',
        leaves:'24'
    }
]

function Manager_attendance(){

    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <ManagerSidebar/>
            <ViewAttendance data={attendenceData}/>
            </div>
        </div>
    )
}

export default Manager_attendance;