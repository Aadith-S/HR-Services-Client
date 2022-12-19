import NavigationLogout from "../navigationLogout";
import { EmployeeSidebar, HR_Sidebar } from "../sidebar/sideBar";
import { ViewAllAttendance, ViewAttendance } from "../essentials";



let attendenceData = [
    {
        req_id:"1",
        employee_id:"1",
        name:'abishek',
        month:'Feb',
        year:"2022",
        workingdays:'27',
        leaves:'24'
    },
    {
        req_id:"2",
        employee_id:"2",
        name:'kiran',
        month:'Mar',
        year:"2022",
        workingdays:'28',
        leaves:'20'
    },
    {
        req_id:"3",
        employee_id:"3",
        name:'kumar',
        month:'April',
        year:"2022",
        workingdays:'25',
        leaves:'24'
    }
]

function HR_viewAllAttendance(){

    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <HR_Sidebar/>
            <ViewAllAttendance data={attendenceData}/>
            </div>
        </div>
    )
}

export default HR_viewAllAttendance;