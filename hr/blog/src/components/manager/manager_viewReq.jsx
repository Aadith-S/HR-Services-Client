import { useQuery } from "react-query";
import { leaveAppget } from "../../services/leaveHandler";
import { ManagerLeaveView } from "../essentials";
import NavigationLogout from "../navigationLogout";
import { ManagerSidebar } from "../sidebar/sideBar";

// only get data where approval status == null (from the server side)

function Manager_viewReq(){
    const {data,isLoading} = useQuery("viewReq",leaveAppget)
    if(isLoading){
        return <>Loading....</>
    }
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <ManagerSidebar/>
            <ManagerLeaveView mdata={data.data}/>
            </div>
        </div>
    )
}

export default Manager_viewReq;