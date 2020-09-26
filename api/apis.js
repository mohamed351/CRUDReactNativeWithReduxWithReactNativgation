import axios from 'axios';

const baseURL = "http://172.18.61.81:9195/api/"



export default {
    EmployeesAPI: (url = baseURL + "employees/") => {
        return {
            fetchAll: () => axios.get(url),
            fecthById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, newRecord) => axios.put(url + id, newRecord),
            delete: id => axios.delete(url+id)
        }
    }
    
}




