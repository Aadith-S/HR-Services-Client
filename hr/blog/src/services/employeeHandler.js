import axios from "./axiosInstances";

async function allEmployees(){
    const result= await axios.get("/allEmployees");
    console.log(result);
    return result;
}
async function addEmployee(data){
    console.log("hlo add emp");
    console.log(data);
    console.log("before data");
    return axios.post("/addEmployee",data);
}
export {allEmployees,addEmployee};