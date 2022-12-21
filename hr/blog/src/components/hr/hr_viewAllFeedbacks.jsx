import NavigationLogout from "../navigationLogout";

import { EmployeeSidebar, HR_Sidebar } from "../sidebar/sideBar";

import { ViewAllAttendance, ViewAllFeedback, ViewAttendance } from "../essentials";
import { useQuery } from "react-query";
import { viewAllFeedback } from "../../services/feedbackHandler";
function HR_viewAllFeedback(){

    const {data,isLoading} = useQuery("feedbackdata",viewAllFeedback);
    if(isLoading){
        return <>Loading....</>
    }
    console.log(data);
    return(

        <div>

            <NavigationLogout/>

            <div style={{display:"flex"}}>

            <HR_Sidebar/>

            <ViewAllFeedback data={data.data.data}/>

            </div>

        </div>

    )

}



export default HR_viewAllFeedback;