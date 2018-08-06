import React from 'react';
import './Login.css'

const Login = ({onInputChange}) => {
    return (
    <div>
        <h1> Admin Login </h1>
        <div>
            <div class="card" >
                <div class="px-4 py-3">
                        <div class="form-group">
                            <h2 className='tc'>Sign In</h2>
                            <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                            <input onChange={onInputChange} type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
                        </div>
                            <div class="form-group">
                            <label htmlFor="exampleDropdownFormPassword1">Password</label>
                            <input onChange={onInputChange} type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
                            </div>
                            <div class="form-check">
                            <input onChange={onInputChange} type="checkbox" class="form-check-input" id="dropdownCheck"/>
                            <label class="form-check-label" for="dropdownCheck">
                                Remember me
                            </label>
                            </div>
                            <button  type="submit" class="btn btn-primary">Sign in</button>
                 </div>  
            </div>
        </div>
    </div>
    )
}

export default Login;   