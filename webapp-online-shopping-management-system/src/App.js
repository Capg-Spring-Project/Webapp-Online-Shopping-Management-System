import './App.css';
import ListMedicineComponent from './component/medicine/ListMedicineComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuyMedicineComponent from './component/medicine/BuyMedicineComponent';
import LoginComponent from './component/authentication/LoginComponent';
import SignUpComponent from './component/authentication/SignUpComponent';
import NavbarComponent from './component/common/NavbarComponent';
import HomeComponent from './component/common/HomeComponent';
import {Routes, Route} from 'react-router-dom';
import CustomerDashboardComponent from './component/customer/CustomerDashboardComponent'
import AdminDashboardComponent from './component/admin/AdminDashboardComponent'


function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <ListMedicineComponent />
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/home" element={<HomeComponent />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/signup" element={<SignUpComponent />} />
                <Route path="/user" element={<CustomerDashboardComponent />} />
                <Route path="/admin" element={<AdminDashboardComponent />} />
            </Routes>

        </div>
    );
}

export default App;
