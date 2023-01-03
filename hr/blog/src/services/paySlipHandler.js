import axios from "./axiosInstances"

async function viewPayslip(){
    return await axios.get("/viewPaySlips");
}
async function allPaySlips(){
    return await axios.get("/viewAllPaySlips");
}
async function updatePaySlips(){
    return await axios.post("/addPaySlip");
}
async function PayslipInvoice(info){
    return await axios.get("/PaySlip?id="+info.id+"&month_id="+info.month_id);
}
export {viewPayslip,allPaySlips,updatePaySlips,PayslipInvoice}