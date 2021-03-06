import React from "react";

const Login = () => {


    
    return (
        <form>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input  type="email" className="form-control" placeholder="Enter email" required/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input  type="password" className="form-control" placeholder="Enter password" required/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" required/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button className="btn btn-primary btn-block">Submit</button>
            
        </form>
    );

}

export default Login