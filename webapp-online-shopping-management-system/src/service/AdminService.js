import axios from "axios";
import authenticationHeader from "./AuthenticationHeader";
const API_URL_CATEGORY = "http://localhost:4040/category";
const API_URL_ORDER = "http://localhost:4040/order";
const API_URL_ADMIN = "http://localhost:4040/admin";
const API_URL_MEDICINE = "http://localhost:4040/medicine";
const API_URL_CUSTOMER = "http://localhost:4040/customer";

const getAllCustomers = () => {
    return axios.get(API_URL_ADMIN + "/customer", { headers: authenticationHeader(), });
};

const getAllCategories = () => {
    return axios.get(API_URL_CATEGORY, { headers: authenticationHeader(), });
};

const getAllOrders = () => {
    return axios.get(API_URL_ORDER, { headers: authenticationHeader(), });
}

const getAllOrdersWithRelations = async() => {
    const response = await getAllOrders();
    const orders = response.data;
    console.log(orders);
    
    for (const order of orders) {
        const medicine = await axios.get(API_URL_MEDICINE + '/of-order/' + order.id,  { headers: authenticationHeader() });
        const customer = await axios.get(API_URL_CUSTOMER + '/of-order/' + order.id,  { headers: authenticationHeader() });
        order.medicine = medicine.data;
        order.customer = customer.data; 
    }
    return orders;
}

// const saveMedicine = (customer) => {
//     return axios.post(API_URL + "/customer/save",{
//         params: {
//             customer: customer
//         }
//      { headers: authenticationHeader(), });
// };

const deleteCustomerById = (id) => {
    return axios.get(API_URL_ADMIN + "/customer/delete" + id, { headers: authenticationHeader(), });
}



const AdminService = {
    getAllCustomers,
    deleteCustomerById,
    getAllCategories,
    getAllOrders,
    getAllOrdersWithRelations
}
export default AdminService;