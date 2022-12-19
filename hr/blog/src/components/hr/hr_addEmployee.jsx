import { AddEmployee } from "../essentials";
import NavigationLogout from "../navigationLogout";
import { HR_Sidebar } from "../sidebar/sideBar";



export function HR_AddEmployee(){

    return (
        <div>
            <NavigationLogout/>
            <div style={{display:'flex'}}>
                <HR_Sidebar/>
                <AddEmployee/>
            </div>
        </div>
    )
}