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
export {viewPayslip,allPaySlips,updatePaySlips}