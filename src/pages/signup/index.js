import React from "react";


const Signup = () => {
    
    return (
        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" required/>
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" required/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input  type="email" className="form-control" placeholder="Enter email" required/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" required/>
            </div>

            <button className="btn btn-primary btn-block">Sign Up</button>
            
        </form>
    );
    
}

export default Signup