import React, { useEffect, useState } from 'react';
import '../../css/MedicineListComponent.css';
// import PlaceholderMedicine from '../../image/medicine/placeholder_medicine.webp';
import PlaceholderImage from '../../image/medicine/placeholder_medicine.webp';
import CommonService from '../../service/CommonService';

const ItemListMedicineComponent = (props) => {

    const [category, setCategory] = useState({});

    useEffect(() => {
        CommonService.getCategoryByMedicineId(props.medicine.id)
        .then(response => {
            console.log(response.data);
            setCategory(response.data);
        }).catch(e => {
            console.log(e);
        });
    },[props.medicine.id])

    return (
        <div>
            <div className="row p-2 bg-white border rounded">
                {/* <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/QpjAiHq.jpg" /></div> */}
                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={PlaceholderImage} /></div>
                <div className="col-md-6 mt-1">
                    <h5>{props.medicine.name}</h5>
                    <div className="d-flex flex-row">

                                        {/* "companyName": "string",
                                        "expiryDate": "2022-07-21",
                                        "id": 0,
                                        "manufacturingDate": "2022-07-21",
                                        "name": "string",
                                        
                                        "price": 0 */}


                        <div className="mt-1 mb-1 spec-1"><span>{props.medicine.companyName}</span></div>
                    </div>
                    <h6 className="text-success">{category.name}</h6>
                    <p className="text-justify text-truncate para mb-0 mt-3">MFD - {props.medicine.manufacturingDate}</p>
                    <p className="text-justify text-truncate para mb-0">Expiry - {props.medicine.expiryDate}<br /><br /></p>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1">₹{props.medicine.price}</h4>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <button className="btn btn-primary btn-sm" type="button">Buy Now</button>
                        <button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to cart</button></div>
                </div>
            </div>
        </div>
    )
}

export default ItemListMedicineComponent