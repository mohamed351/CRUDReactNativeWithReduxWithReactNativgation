import apis from '../../api/apis';
import {Employee } from "../../model/employees"
export const ACTION_TYPES = {
    CREATE: "CREATE",
    FETCH_ALL: "FETCH_ALL",
    UPDATE: "UPDATE",
    DELETE:"DELETE"
}

export const fetchEmployees = () => dispatch => {
    apis.EmployeesAPI().fetchAll().then(a => {
       
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload:a.data
        })
        
    }).catch(a => {
        console.log(a);
    })
  
}

export const createEmployees = (data) => dispatch => {
  
    apis.EmployeesAPI().create(data).then(a => {
        console.log(a);
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: a.data
        });
        
    }).catch(a => {
        console.log(a);
    });
}