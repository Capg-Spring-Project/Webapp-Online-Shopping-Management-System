import '../../css/LoginComponent.css'
import { useFormik } from "formik";
import * as Yup from 'yup';
import AuthenticationService from '../../service/AuthenticationService';
import { useNavigate } from 'react-router-dom';

const AdminEditItemComponent = () => {
    let navigate = useNavigate();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [role, setRole] = useState("");

    const handleLogin = (user) => {
        // console.log(email, password, role);
        AuthenticationService.login(user.email, user.password, user.role).then(
            () => {
                navigate("/home");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log(resMessage);
            }
        );
    };

    const validationSchema = Yup.object().shape({

        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string()
            .required("Password is required")
    });

    const formik = useFormik({
        initialValues: {

            email: "",
            password: "",
            role: "user"
        },
        validationSchema,
        // validateOnChange: false,
        // validateOnBlur: false,
        onSubmit: (data) => {
            console.log(JSON.stringify(data, null, 2));
            let user = {
                email: data.email,
                password: data.password,
                role: data.role
            }
            handleLogin(user);
        },
    });

    return (
        <>

            <div className="login-form">

                <form onSubmit={formik.handleSubmit}>
                    <div className='form-group'>
                        <h2 className="text-center">Log in</h2>
                        <br />
                        <div className="text-center">
                            <div className="form-check form-check-inline" >

                                <input
                                    name="role"
                                    type="radio"
                                    className="form-check-input"
                                    onChange={formik.handleChange}
                                    value='user'
                                    id='radioUser'
                                    defaultChecked={true}

                                />
                                <label className="form-check-label" htmlFor="radioUser">
                                    User
                                </label>
                            </div>
                            <div className="form-check form-check-inline" >

                                <input
                                    name="role"
                                    type="radio"
                                    className="form-check-input"
                                    onChange={formik.handleChange}
                                    value='admin'
                                    id='radioAdmin'
                                />
                                <label className="form-check-label" htmlFor="radioAdmin">
                                    Admin
                                </label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder='Email'
                        />
                        <div className="text-danger">
                            {formik.errors.email ? formik.errors.email : null}
                        </div>
                    </div>
                    <br />
                    <div className="form-group">

                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            placeholder='Password'
                        />
                        <div className="text-danger">
                            {formik.errors.password ? formik.errors.password : null}
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Login
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
                <p className="text-center">Create an Account</p>
            </div>
        </>
    );
}

export default AdminEditItemComponent