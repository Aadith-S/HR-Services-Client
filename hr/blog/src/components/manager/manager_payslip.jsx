import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, ManagerSidebar } from "../sidebar/sideBar"
import { Viewpayslip } from "../essentials"




let payslipData = [
    {
        month:"jan",
        year:"2022",
        amountPaid:"20000",
    },
    {
        month:"Feb",
        year:"2022",
        amountPaid:"22000",
    },
    {
        month:"Mar",
        year:"2022",
        amountPaid:"30000",
    },
 ]


function Manager_ViewPayslip(){
    
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
                <ManagerSidebar/>
                <Viewpayslip data={payslipData}/>
            </div>
        </div>
    )
}

export default Manager_ViewPayslip;