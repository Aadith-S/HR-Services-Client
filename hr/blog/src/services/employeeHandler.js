import axios from "./axiosInstances";

async function allEmployees(){
    const result= await axios.get("/allEmployees");
    console.log(result);
    return result;
}

export {allEmployees};