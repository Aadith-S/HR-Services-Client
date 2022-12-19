import axios from "./axiosInstances"

async function viewPayslip(){
    return await axios.get("/viewPaySlips");
}

export {viewPayslip}