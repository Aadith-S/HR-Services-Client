
import axios from "./axiosInstances";

function loginform(data){
    return axios.post("/login",data)
}
async function profile(){
    const res = await axios.get("/profile");
    return res;
}
async function redirectdash(data){
    console.log(data);
    const link = await axios.post("/redirect",{otp : data});
    console.log("In red");
    console.log(link);
    return link.data;
}
export {loginform,profile,redirectdash};