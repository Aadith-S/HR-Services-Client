import axios from "./axiosInstances"

async function AttendanceOne(){
    return await axios.get("/viewAttendance");
}

export {AttendanceOne}