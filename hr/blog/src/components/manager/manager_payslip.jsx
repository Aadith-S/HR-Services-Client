import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, ManagerSidebar } from "../sidebar/sideBar"
import { Viewpayslip } from "../essentials"
import { useQuery } from "react-query"
import { viewPayslip } from "../../services/paySlipHandler"

function Manager_ViewPayslip(){
    const {data,isLoading} = useQuery("Payslip",viewPayslip);
    if(isLoading){
        return <>Loading....</>
    }
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
                <ManagerSidebar/>
                <Viewpayslip data={data.data.data}/>
            </div>
        </div>
    )
}

export default Manager_ViewPayslip;