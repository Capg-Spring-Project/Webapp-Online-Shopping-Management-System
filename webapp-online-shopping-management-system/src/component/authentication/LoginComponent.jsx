import React from 'react'
import '../../css/LoginComponent.css'

const LoginComponent = () => {
    return (

        <div>

            <div class="login-form">
                <form action="/examples/actions/confiration.php" method="post">
                    


                    <h2 class="text-center">Log in</h2>
                    <br/>
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    User
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Admin
                                </label>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username" required="required" />
                    </div>
                    <br/>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" required="required" />
                    </div>
                    <br/>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Log in</button>
                    </div>

                </form>
                <p class="text-center"><a href="#">Create an Account</a></p>
            </div>

        </div>
    )
}

export default LoginComponent