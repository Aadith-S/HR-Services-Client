import axios from "./axiosInstances"

async function reqLeave(data){
    return await axios.post("/addLeaveRequest", data);
}
async function viewLeaves(){
    return await axios.get("/viewLeaveRequests");
}
async function allLeaves(){
    return await axios.get("/allLeaveRequests");
}
export {reqLeave,viewLeaves,allLeaves}