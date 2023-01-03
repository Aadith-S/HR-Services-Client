import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, HR_Sidebar } from "../sidebar/sideBar"
import { ViewAllpayslip, Viewpayslip } from "../essentials"
import { useQuery } from "react-query"
import { allPaySlips } from "../../services/paySlipHandler"

function HR_ViewAllPayslip(){
    const {data,isLoading} = useQuery("AllPay",allPaySlips);
    if(isLoading){
        return <>Loading...</>
    }
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
                <HR_Sidebar/>
                <ViewAllpayslip data={data.data}/>
            </div>
        </div>
    )
}

export default HR_ViewAllPayslip;