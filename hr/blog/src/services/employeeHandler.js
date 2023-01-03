import axios from "./axiosInstances";

async function allEmployees(){
    console.log("in allemp");
    const result= await axios.get("/allEmployees");
    console.log(result);
    return result;
}
async function addEmployee(data){
    return axios.post("/addEmployee",data);
}
async function currentEmployee(id){
    console.log(id);
    return axios.get("/currentEmployee/"+id);
}
async function updateEmployee(data){
    return axios.post("/updateEmployee",data);
}
export {allEmployees,addEmployee,currentEmployee,updateEmployee};