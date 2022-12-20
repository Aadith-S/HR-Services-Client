import axios from "./axiosInstances";

async function allEmployees(){
    const result= await axios.get("/allEmployees");
    console.log(result);
    return result;
}
async function addEmployee(data){
    return axios.post("/addEmployee",data);
}
export {allEmployees,addEmployee};