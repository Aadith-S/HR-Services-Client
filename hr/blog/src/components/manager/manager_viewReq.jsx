import { ManagerLeaveView } from "../essentials";
import NavigationLogout from "../navigationLogout";
import { ManagerSidebar } from "../sidebar/sideBar";

let leaveData = [
    {
        "req_id": 2,
        "from": "2022-01-01",
        "to": "2022-01-03",
        "type": "sick",
        "reason": "really sick",
        "approvalStatus": null,
        "employee_id": 2,
        "createdAt": "2022-12-16T06:28:35.000Z",
        "updatedAt": "2022-12-16T06:28:35.000Z",
        "employee": {
            "employee_id": 2,
            "name": "john",
            "address": "e3addr",
            "department": "DTS",
            "superior1": 1,
            "superior2": null,
            "role_id": 1,
            "createdAt": "2022-02-02T00:00:00.000Z",
            "updatedAt": "2022-02-02T00:00:00.000Z"
        }
    },
    {
        "req_id": 3,
        "from": "2022-01-01",
        "to": "2022-01-03",
        "type": "sick",
        "reason": "really sick",
        "approvalStatus": true,
        "employee_id": 3,
        "createdAt": "2022-12-16T06:31:08.000Z",
        "updatedAt": "2022-12-16T06:31:08.000Z",
        "employee": {
            "employee_id": 3,
            "name": "abishek",
            "address": "e4addr",
            "department": "VVD",
            "superior1": 2,
            "superior2": 1,
            "role_id": 1,
            "createdAt": "2022-02-02T00:00:00.000Z",
            "updatedAt": "2022-01-01T00:00:00.000Z"
        }
    }
]

// only get data where approval status == null (from the server side)

function Manager_viewReq(){

    return(
        <div>
            <NavigationLogout/>
            <div style={{display:"flex"}}>
            <ManagerSidebar/>
            <ManagerLeaveView data={leaveData}/>
            </div>
        </div>
    )
}

export default Manager_viewReq;