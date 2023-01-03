import { useQuery } from "react-query";
import { allEmployees } from "../../services/employeeHandler";
import { ViewAllEmployee } from "../essentials";
import NavigationLogout from "../navigationLogout";
import { HR_Sidebar } from "../sidebar/sideBar";

function HR_viewAllEmployee(){
const{data,isLoading} = useQuery("allemployees",allEmployees)
if(isLoading){
    return <>Loading....</>
}
console.log(data);
    return (
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <HR_Sidebar/>
            <ViewAllEmployee data={data.data}/>
            </div>
        </div>
    )
}

export default HR_viewAllEmployee;