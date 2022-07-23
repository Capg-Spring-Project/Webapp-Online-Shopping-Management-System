import '../../css/LoginComponent.css'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminService from '../../service/AdminService';
import { isDate, parse } from 'date-fns';

const AdminCategorySaveComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [itemId, setItemId] = useState();
    const [item, setItem] = useState({});

    useEffect(() => {
        if (location.state) {
            setItemId(location.state.id);
        }

    }, [itemId, location?.state?.id]);

    useEffect(() => {
        if (location.state) {
            const handleItems = async () => {
                try {
                    const res = await AdminService.getCategoryById(itemId);
                    setItem(res.data);
                } catch (e) {
                    console.log(e);
                }
            }
            handleItems();
        }

    }, [ itemId])

    const handleSave = async (data) => {
        try {

            const res = await AdminService.saveCategory(data);
            console.log(res);
            console.log(data);
            navigate('/admin/caregories');

        } catch (e) {
            console.log(e);
        }
    };

    const parseDateString = (originalValue) => {
        const parsedDate = isDate(originalValue)
            ? originalValue  // this make sure that a value is provided
            : parse(originalValue, "dd/MM/yyyy", new Date());
        return parsedDate;
    }


    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required")
    });


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: item.name || ""
        },
        validationSchema,
        onSubmit: (data) => {
            let category;
            if (location.state) {
                category = {
                    id: item.id,
                    name: data.name,
                }
            } else {
                category = {
                    name: data.name,
                }
            }
            console.log(JSON.stringify(category));
            handleSave(category);
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

export default AdminCategorySaveComponent