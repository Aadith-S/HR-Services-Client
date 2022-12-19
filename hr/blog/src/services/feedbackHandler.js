import axios from "./axiosInstances"

async function submitFeedback(data){
    return await axios.post("/addFeedback",data);
}
async function viewAllFeedback(){
    return await axios.get("/viewFeedback");
}
export {submitFeedback,viewAllFeedback}