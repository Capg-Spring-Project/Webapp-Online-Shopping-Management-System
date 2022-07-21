import axios from "axios"

const API_URL = 'http://localhost:4040/commons';

const getAllMedicines = () => {
    return axios.get(API_URL + '/medicines');
}

const getCategoryByMedicineId = (id) => {
    return axios.get(API_URL + '/category-of-medicine/' + id);
}

const CommonService = {
    getAllMedicines,
    getCategoryByMedicineId
}

export default CommonService;