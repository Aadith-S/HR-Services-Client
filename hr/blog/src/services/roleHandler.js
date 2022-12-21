import axios from "./axiosInstances"

async function RoleGet(){
    return await axios.get("/getDesignation");
}
async function roleinfoget(){
    return await axios.get("/getRole")
}
export {RoleGet,roleinfoget}