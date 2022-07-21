import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../../service/AuthenticationService';

const SignUpComponent = () => {
    let navigate = useNavigate();
    const handleLogin = (user) => {
        if(user.role === 'admin') {
            AuthenticationService.registerAdmin(user).then(
                () => {
                    navigate("/profile");
                    // window.location.reload();
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
        } else {
            AuthenticationService.registerCustomer(user).then(
                (response) => {
                    console.log(response);
                    navigate("/profile");
                    // window.location.reload();
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
        }
    };

    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required("Fullname is required"),
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(40, "Password must not exceed 40 characters"),
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
        acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
    });

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
            role: "user"
        },
        validationSchema,
        // validateOnChange: false,
        // validateOnBlur: false,
        onSubmit: (data) => {
            const { fullname, email, password, role } = data;
            const user = {
                name: fullname,
                email,
                password,
                role
            }
            console.log(JSON.stringify(data, null, 2));
            handleLogin(user);
        }
    });
    return (
        <>
            <div className="login-form">
                <form onSubmit={formik.handleSubmit}>
                    <div className='form=group'>
                        <h2 className="text-center">Sign Up</h2>
                        <br />
                        <div className="text-center">
                            <div className="form-check form-check-inline" >

                                <input
                                    name="role"
                                    type="radio"
                                    className="form-check-input"
                                    onChange={formik.handleChange}
                                    value='user'
                                    id='radioUserSignUp'
                                    defaultChecked={true}

                                />
                                <label className="form-check-label" htmlFor="radioUserSignUp">
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
                                    id='radioAdminSignUp'
                                />
                                <label className="form-check-label" htmlFor="radioAdminSignUp">
                                    Admin
                                </label>
                            </div>
                        </div>
                    </div>



                    <br />
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            name="fullname"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.fullname}
                            placeholder='Full Name'
                        />
                        <div className="text-danger">
                            {formik.errors.fullname ? formik.errors.fullname : null}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"> Email </label>
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
                    <div className="form-group">
                        <label htmlFor="password"> Password </label>
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
                    <div className="form-group">
                        <label htmlFor="confirmPassword"> Confirm Password </label>
                        <input
                            name="confirmPassword"
                            type="password"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                            placeholder='Confirm Password'
                        />
                        <div className="text-danger">
                            {formik.errors.confirmPassword
                                ? formik.errors.confirmPassword
                                : null}
                        </div>
                    </div>
                    <br />
                    <div className="form-group form-check">
                        <input
                            name="acceptTerms"
                            type="checkbox"
                            className="form-check-input"
                            onChange={formik.handleChange}
                            value={formik.values.acceptTerms}
                        />
                        <label htmlFor="acceptTerms" className="form-check-label">
                            I have read and agree to the Terms
                        </label>
                        <div className="text-danger">
                            {formik.errors.acceptTerms ? formik.errors.acceptTerms : null}
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Register
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
            </div >


        </>
    );
}

export default SignUpComponent