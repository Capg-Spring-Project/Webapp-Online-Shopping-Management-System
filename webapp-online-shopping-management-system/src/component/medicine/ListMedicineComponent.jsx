import React, { useEffect, useState } from 'react'
import ItemListMedicineComponent from './ItemListMedicineComponent'
import '../../css/MedicineListComponent.css'
import CommonService from '../../service/CommonService'

const ListMedicineComponent = () => {

    const [medicines, setMedicines] = useState([]);

    const handleMedicines = async () => {
        try {
            const response = await CommonService.getAllMedicines();
            setMedicines(response.data);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        handleMedicines();
    }, []);

    const medicineItems = medicines.map((medicine, index) => {

        return (<div key={index}>
            <ItemListMedicineComponent key={index} medicine={medicine} />
            <div className="mt-2"></div>
        </div>
        )
    });
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10">

                        {medicineItems}
                        {/* <ItemListMedicineComponent />
                        <div className="mt-2"></div>
                        <ItemListMedicineComponent />
                        <div className="mt-2"></div>
                        <ItemListMedicineComponent />
                        <div className="mt-2"></div>  */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListMedicineComponent