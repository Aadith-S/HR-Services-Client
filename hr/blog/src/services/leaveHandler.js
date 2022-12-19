import axios from "./axiosInstances"

async function reqLeave(data){
    return await axios.post("/addLeaveRequest", data);
}
async function viewLeaves(){
    return await axios.get("/viewLeaveRequests");
}
export {reqLeave,viewLeaves}