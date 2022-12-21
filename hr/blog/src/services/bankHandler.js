import axios from "./axiosInstances"

async function bankDeatils(id){
    return await axios.get('BankDetail/'+id);
}

export {bankDeatils}