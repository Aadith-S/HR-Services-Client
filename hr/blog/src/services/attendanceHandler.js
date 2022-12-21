import axios from "./axiosInstances"

async function AttendanceOne(){
    return await axios.get("/viewAttendance");
}
async function AllAttendance(){
    return await axios.get("/viewAllAttendance");
}
async function updateAttendance(){
    return await axios.post("/addAttendance")
}
export {AttendanceOne,AllAttendance,updateAttendance}