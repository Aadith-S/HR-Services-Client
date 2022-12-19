import NavigationLogout from "../navigationLogout"
import { EmployeeSidebar, HR_Sidebar } from "../sidebar/sideBar"
import { ViewAllpayslip, Viewpayslip } from "../essentials"




let payslipData = [
    {
        employee_id:'1',
        name:"abishek",
        month:"jan",
        year:"2022",
        amountPaid:"20000",
    },
    {
        employee_id:'2',
        name:"kishore",
        month:"Feb",
        year:"2022",
        amountPaid:"22000",
    },
    {
        employee_id:'3',
        name:"kumar",
        month:"Mar",
        year:"2022",
        amountPaid:"30000",
    },
 ]


function HR_ViewAllPayslip(){
    
    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
                <HR_Sidebar/>
                <ViewAllpayslip data={payslipData}/>
            </div>
        </div>
    )
}

export default HR_ViewAllPayslip;