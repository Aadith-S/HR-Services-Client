import { useQuery } from "react-query";
import { profile } from "../../services/accountsHandler";
import { ViewProfile } from "../essentials";
import NavigationLogout from "../navigationLogout";
import { HR_Sidebar } from "../sidebar/sideBar";


export function HR_dash(){
    const {data,isLoading} = useQuery("profile",profile);
    if(isLoading){
        return <>Loading...</>
    }
    return (
        <div>
             <NavigationLogout/>
            <div style={{display:"flex"}}>
            <HR_Sidebar/>   
            <ViewProfile data={data.data.data}/>
            </div>
        </div>
    )
}