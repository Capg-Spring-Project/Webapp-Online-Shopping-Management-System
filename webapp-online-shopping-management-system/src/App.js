import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuyMedicineComponent from './component/medicine/BuyMedicineComponent';
import LoginComponent from './component/authentication/LoginComponent';
import SignUpComponent from './component/authentication/SignUpComponent';
import NavbarComponent from './component/common/NavbarComponent';
import { Routes, Route } from 'react-router-dom';
import CustomerDashboardComponent from './component/customer/CustomerDashboardComponent'
import AdminItemListComponent from './component/admin/AdminItemListComponent'
import AdminMedicineSaveComponent from './component/admin/AdminMedicineSaveComponent'
import AdminCategorySaveComponent from './component/admin/AdminCategorySaveComponent'
import CustomerOrdersComponent from './component/customer/CustomerOrdersComponent';
import ListMedicineComponent from './component/medicine/ListMedicineComponent';
import OrderSuccessComponent from './component/medicine/OrderSuccessComponent';

function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <Routes>
                <Route path="/" >
                    <Route path="admin" >
                        <Route path='medicines' element={<AdminItemListComponent/>}></Route>
                        <Route path='categories' element={<AdminItemListComponent/>}></Route>
                        <Route path='customers' element={<AdminItemListComponent/>}></Route>
                        <Route path='orders' element={<AdminItemListComponent/>}></Route>
                        <Route path='update-medicine' element={<AdminMedicineSaveComponent/>}/>
                        <Route path='add-medicine' element={<AdminMedicineSaveComponent/>}/>
                        <Route path='update-category' element={<AdminCategorySaveComponent/>}/>
                        <Route path='add-category' element={<AdminCategorySaveComponent/>}/>
                        <Route index element={<CustomerDashboardComponent />} />
                    </Route>
                    <Route path="login" element={<LoginComponent />} />
                    <Route path="signup" element={<SignUpComponent />} />
                    <Route path="user" >
                        <Route path="buy" element={<BuyMedicineComponent />} />
                        <Route path="orders" element={<CustomerOrdersComponent />} />
                        <Route path="dashboard" element={<CustomerDashboardComponent />} />
                        <Route path="success" element={<OrderSuccessComponent />} />
                        <Route index element={<ListMedicineComponent />} />
                    </Route>

                    <Route index element={<ListMedicineComponent />} />
                </Route>
                <Route path='/home' element={<ListMedicineComponent />} />
            </Routes>

        </div>
    );
}

export default App;
