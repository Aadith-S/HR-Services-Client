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
async function leaveAppget(){
    return await axios.get("/leaveApproval");
}
async function leaveApppost(data){
    return await axios.post("/leaveApproval",data);
}
export {reqLeave,viewLeaves,allLeaves,leaveAppget,leaveApppost}