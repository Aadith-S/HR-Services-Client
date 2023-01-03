import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { PayslipInvoice } from "../services/paySlipHandler";
import { AddEmployee } from "./essentials";
import NavigationLogout from "./navigationLogout";
import { HR_Sidebar } from "./sidebar/sideBar";



export function PaySlip(){
    const location = useLocation();
    const info = location.state;
    console.log(info);
    const {data,isLoading} = useQuery("PaySlip",()=>PayslipInvoice(info));
    if(isLoading){
        return <>Loading...</>
    }
    console.log(data);
    return (
        <div>
            <NavigationLogout/>
            <div style={{display:'flex'}}>
        <div class="row">
        <div class="col-md-12 offset-4">
            <div class="text-center lh-1 mb-2">
                <h6 class="fw-bold">Payslip</h6> <span class="fw-normal">Payment slip for the month of June 2021</span>
            </div>
            <div class="d-flex justify-content-end"> <span>Department : {data.data.data.attendence.employee.department}</span> </div>
            <div class="row">
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">Id</span> <small class="ms-3">{data.data.data.attendence.employee.employee_id}</small> </div>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6">
                            <div> <span class="fw-bolder">Name</span> <small class="ms-3">{data.data.data.attendence.employee.name}</small> </div>
                        </div>
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">IFSC : </span>{data.data.data.attendence.employee.bankAccount.ifsc}<small class="ms-3"></small> </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">Designation</span> <small class="ms-3">{data.data.data.attendence.employee.companyMaster.designation}</small> </div>
                        </div>
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">Mode of Pay</span> <small class="ms-3">{data.data.data.attendence.employee.bankAccount.bankName}</small> </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div> <span class="fw-bolder"></span> <small class="ms-3"></small> </div>
                        </div>
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">Ac No.</span> <small class="ms-3">{data.data.data.attendence.employee.bankAccount.account_number}</small> </div>
                        </div>
                    </div>
                </div>
                <table class="mt-4 table table-bordered">
                    <thead class="bg-dark text-white">
                        <tr>
                            <th scope="col">Earnings</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Deductions</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Basic</th>
                            <td>{data.data.data.attendence.employee.companyMaster.monthlyPay}</td>
                            <td>Leave</td>
                            <td>{data.data.data.amountPaid}</td>
                        </tr>
                       
                        <tr class="border-top">
                            <th scope="row">Total Earning</th>
                            <td>{data.data.data.amountPaid}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="d-flex justify-content-end">
                <div class="d-flex flex-column mt-2"> <span class="fw-bolder">For Experion</span> <span class="mt-4">Authorised Signatory</span> </div>
            </div>
        </div>
    </div>
            </div>
        </div>
    )
}