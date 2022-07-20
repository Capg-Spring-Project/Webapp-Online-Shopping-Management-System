import React from 'react'
import MedicineListItemComponent from './ItemListMedicineComponent'
import '../../css/MedicineListComponent.css'

const ListMedicineComponent = () => {
  return (
    <div>
        <div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10">
        <MedicineListItemComponent/>
        <div className="mt-2"></div>
        <MedicineListItemComponent/>
        <div className="mt-2"></div>
        <MedicineListItemComponent/>
        <div className="mt-2"></div>
            
        </div>
    </div>
</div>
    </div>
  )
}

export default ListMedicineComponent