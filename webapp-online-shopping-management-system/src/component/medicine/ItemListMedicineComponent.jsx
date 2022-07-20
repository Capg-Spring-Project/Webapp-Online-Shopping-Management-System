import React from 'react'
import '../../css/MedicineListComponent.css'

const ItemListMedicineComponent = () => {
    return (
        <div>
            <div class="row p-2 bg-white border rounded">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/QpjAiHq.jpg" /></div>
                <div class="col-md-6 mt-1">
                    <h5>Disprin - 2000</h5>
                    <div class="d-flex flex-row">
                        <div class="mt-1 mb-1 spec-1"><span>Zycus Pvt Ltd</span></div>
                    </div>
                    <h6 class="text-success">Tablets</h6>
                    <p class="text-justify text-truncate para mb-0 mt-3">MFD - 22/02/2021</p>
                    <p class="text-justify text-truncate para mb-0">Expiry - 22/02/2021<br /><br /></p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">$13.99</h4>
                    </div>
                    <div class="d-flex flex-column mt-4">
                        <button class="btn btn-primary btn-sm" type="button">Buy Now</button>
                        <button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to cart</button></div>
                </div>
            </div>
        </div>
    )
}

export default ItemListMedicineComponent