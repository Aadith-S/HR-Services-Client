
import axios from "./axiosInstances";

function login(data){
    return axios.post("/login",data)
}
async function profile(){
    const res = await axios.get("/profile");
    return res;
}
async function redirectdash(){
    const link = await axios.get("/redirect");
    console.log("In red");
    console.log(link);
    return link.data;
}
export {login,profile,redirectdash};