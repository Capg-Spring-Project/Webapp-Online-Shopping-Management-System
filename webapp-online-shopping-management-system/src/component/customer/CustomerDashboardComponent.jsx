import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../../css/CustomerDashboard.css'
import PlaceholderImage from '../../image/customer/customer_dashboard_medicine.png';
import AuthenticationService from '../../service/AuthenticationService';


const CustomerDashboardComponent = () => {
    const [user, setUser] = useState({});
    const location = useLocation();

    useEffect(() => {
        const initialize = async () => {
            let user = {};
            if (location.pathname.includes('user')) {
                user = await AuthenticationService.getLoggedAdmin();
            } else if (location.pathname.includes('admin')) {
                user = await AuthenticationService.getLoggedCustomer();
            }
            console.log(user);
            setUser(user.data);
        }
        initialize();
    }, [])

    return (
        <div>
            <section  >
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item active" aria-current="page">Edit Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src={PlaceholderImage} alt="avatar"
                                        className="rounded-circle img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.name}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CustomerDashboardComponent