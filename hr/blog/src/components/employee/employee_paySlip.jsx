import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar } from "../sidebar/sideBar"
import { Viewpayslip } from "../essentials"
import { useQuery } from "react-query"
import { viewPayslip } from "../../services/paySlipHandler"
function Employee_ViewPayslip(){
    const {data,isLoading} = useQuery("Payslip",viewPayslip);
    if(isLoading){
        return <>Loading....</>
    }
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
                <EmployeeSidebar/>
                <Viewpayslip data={data.data}/>
            </div>
        </div>
    )
}

export default Employee_ViewPayslip;