import './App.css';
import ListMedicineComponent from './component/medicine/ListMedicineComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuyMedicineComponent from './component/medicine/BuyMedicineComponent';
import LoginComponent from './component/authentication/LoginComponent';
import SignUpComponent from './component/authentication/SignUpComponent';


function App() {
    return (
        <div className="App">

            <ListMedicineComponent />
            <BuyMedicineComponent/>
            <LoginComponent />
            <SignUpComponent/>
        </div>
    );
}

export default App;
