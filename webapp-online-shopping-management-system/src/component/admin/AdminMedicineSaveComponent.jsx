import '../../css/LoginComponent.css'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminService from '../../service/AdminService';
import { isDate, parse } from 'date-fns';

const AdminMedicineSaveComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [itemType, setItemType] = useState();
    const [itemId, setItemId] = useState();
    const [item, setItem] = useState({});

    useEffect(() => {
        if (location.state) {
            setItemId(location.state.id);
            setItemType(location.state.itemType);
        }

    }, [itemId, itemType, location?.state?.id, location?.state?.itemType]);

    useEffect(() => {
        if (location.state) {
            const handleItems = async () => {

                try {
                    if (itemType === 'medicine') {
                        const medicine = await AdminService.getAllMedicinesWithRelations(itemId);
                        setItem(medicine[0]);
                        console.log(medicine[0].name, item.price);
                        // setInitialValues({
                        //     name: 'aa',
                        //     price: medicine[0].price,
                        //     companyName: medicine[0].companyName,
                        //     manufacturingDate: medicine[0].manufacturingDate,
                        //     expiryDate: medicine[0].expiryDate,
                        // });

                    } else if (itemType === 'category') {
                        const res = await AdminService.getCategoryById(itemId);
                        setItem(res.data);
                    }

                } catch (e) {
                    console.log(e);
                }
            }
            handleItems();
        }

    }, [itemType, itemId])

    const handleSave = async (data) => {
        try {

                const res = await AdminService.saveMedicine(data);
                console.log(res);
                console.log(data);
                navigate('/admin/medicines');
            
        } catch (e) {
            console.log(e);
        }
    };

    const parseDateString = (value, originalValue) => {
        const parsedDate = isDate(originalValue)
            ? originalValue  // this make sure that a value is provided
            : parse(originalValue, "dd/MM/yyyy", new Date());

        return parsedDate;
    }


    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        price: Yup.number().moreThan(0).required("Price is required"),
        companyName: Yup.string().required("Company Name is required"),
        manufacturingDate: Yup.date().transform(parseDateString).required("This is required"),
        expiryDate: Yup.date().transform(parseDateString).required("This is required")
    });


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: item.name || "",
            price: item.price || '',
            companyName: item.companyName || "",
            manufacturingDate: item.manufacturingDate || "",
            expiryDate: item.expiryDate || "",
        },
        validationSchema,
        // validateOnChange: false,
        // validateOnBlur: false,
        onSubmit: (data) => {
            let medicine;
            if (location.state) {
                medicine = {
                    id: item.id,
                    name: data.name,
                    price: data.price,
                    companyName: data.companyName,
                    manufacturingDate: data.manufacturingDate,
                    expiryDate: data.expiryDate
                }
            } else {
                medicine = {
                    name: data.name,
                    price: data.price,
                    companyName: data.companyName,
                    manufacturingDate: data.manufacturingDate,
                    expiryDate: data.expiryDate
                }
            }
            console.log(JSON.stringify(medicine));
            handleSave(medicine);
        },
    });

    return (
        <>
            <div className="login-form">
                <form onSubmit={formik.handleSubmit}>
                    <div className='form-group'>
                        <h2 className="text-center">Save</h2>
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values?.name}
                            placeholder='Name'
                        />
                        <div className="text-danger">
                            {formik.errors.name ? formik.errors.name : null}
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            name="price"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values?.price}
                            placeholder='Price'
                        />
                        <div className="text-danger">
                            {formik.errors.price ? formik.errors.price : null}
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            name="companyName"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values?.companyName}
                            placeholder='Company Name'
                        />
                        <div className="text-danger">
                            {formik.errors.companyName ? formik.errors.companyName : null}
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            name="manufacturingDate"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values?.manufacturingDate}
                            placeholder='Manufacturing Date'
                        />
                        <div className="text-danger">
                            {formik.errors.manufacturingDate ? formik.errors.manufacturingDate : null}
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            name="expiryDate"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values?.expiryDate}
                            placeholder='Expiry Date'
                        />
                        <div className="text-danger">
                            {formik.errors.expiryDate ? formik.errors.expiryDate : null}
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            {location.state && <>Update</>}
                            {!location.state && <>Create</>}
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning float-end"
                            onClick={formik.handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AdminMedicineSaveComponent