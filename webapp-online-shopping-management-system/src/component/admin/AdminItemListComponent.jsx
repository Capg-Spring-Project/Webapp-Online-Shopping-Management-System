import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import AdminService from '../../service/AdminService';

const AdminItemListComponent = () => {
    const [items, setItems] = useState([]);
    const [itemType, setItemType] = useState('');
    const location = useLocation();
    // const [categories, setCategories] = useState([]);
    // const [orders, setOrders] = useState([]);
    // const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        if (location.pathname.includes('customer')) {
            setItemType('customer');
        } else if (location.pathname.includes('categor')) {
            setItemType('category');
        } else if (location.pathname.includes('order')) {
            setItemType('order');
        }
    }, [location.pathname])

    useEffect() {
        
    }


    useEffect(() => {

        const handleItems = async () => {
            let response = undefined;
            setItems([]);
            try {
                if (itemType === 'customer') {
                    response = await AdminService.getAllCustomers();
                }
                if (itemType === 'category') {
                    response = await AdminService.getAllCategories();

                }
                if (itemType === 'order') {
                    response = await AdminService.getAllOrdersWithRelations();
                    console.log(response.data);
                }
                if (response) {
                    setItems(response.data);
                }
            } catch (e) {
                console.log(e.message);
            }
        }
        handleItems();
    }, [itemType]);

    const item = items?.map((item, index) => {
        console.log(items.data);
        return (
            <tbody key={index}>
                <tr>
                    {(itemType !== 'order' && <td>{item.name}</td>)}
                    {(itemType === 'order' && <td>{item.medicine?.name}</td>)}
                    {(itemType === 'order' && <td>{item.customer?.name}</td>)}
                    {(itemType === 'order' && <td>{item.customer.email}</td>)}
                    {(itemType === 'order' && <td>{item.date}</td>)}
                    {(itemType === 'order' && <td>{item.totalPrice}</td>)}

                    {(itemType === 'customer' && <td>{item.email}</td>)}

                    
                    <td>
                        {(itemType === 'customer' && <button className="btn btn-primary mx-1" title="Edit" data-toggle="tooltip"><i className="material-icons">Orders</i></button>)}
                        {(itemType === 'category' && <button className="btn btn-primary mx-1" title="Edit" data-toggle="tooltip"><i className="material-icons">Categories</i></button>)}
                        <button className="btn btn-danger" title="Delete" data-toggle="tooltip"><i className="material-icons">Delete</i></button>
                    </td>
                </tr>
            </tbody>
        )
    });


    return (
        <div>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row ">
                            <div className="col-sm-8"><h2><b>
                                {(itemType === 'customer' && <>Customer Details</>)}
                                {(itemType === 'category' && <>Categories</>)}
                                {(itemType === 'order' && <>Orders</>)}
                            </b></h2></div>
                            <div className="col-sm-4 text-end">
                                {itemType !== 'customer' && itemType !== 'order' && (<button type="button" className="btn btn-success"><i className="fa fa-plus"></i> Add New</button>)}

                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                {(itemType !== 'order' && <th>Name</th>)}
                                {(itemType === 'order' && <th>Medicine</th>)}
                                {(itemType === 'order' && <th>Customer</th>)}
                                {(itemType === 'order' && <th>Email</th>)}
                                {(itemType === 'order' && <th>Date</th>)}
                                {(itemType === 'customer' && <th>Email</th>)}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {item}

                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminItemListComponent