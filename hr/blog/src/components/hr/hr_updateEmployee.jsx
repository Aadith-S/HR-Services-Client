import { useLocation } from "react-router-dom";
import { UpdateEmployee } from "../essentials";
import NavigationLogout from "../navigationLogout";
import { HR_Sidebar } from "../sidebar/sideBar";



export function HR_UpdateEmployee(){
    const location = useLocation();
    const {id} = location.state;
    return (
        <div>
            <NavigationLogout/>
            <div style={{display:'flex'}}>
                <HR_Sidebar/>
                <UpdateEmployee id={id}/>
            </div>
        </div>
    )
}