import React, { Component } from 'react';
import './Login.css'
import Nav from '../Nav/Nav'
// import {Link} from 'react-router-dom'; 


const database = [
        {
            email: 'akash@gmail.com',
            password: 'aj'
        },
        {
            email: 'noel@gmail.com',
            password: 'noel'
        },
        {   
            email: 'kevin@gmail.com',
            password: 'kevin',
        }
        
]



class Login extends Component {
    constructor() {
        super();
        this.state = {
            email:'',
            password:''

          }
    }

    onEmail = (e) => {
        this.setState({email: e.target.value})
    }

    onPass = (e) => {
        this.setState({password: e.target.value})
    }

    userValid = () => {
        for (let i=0; i < database.length; i++) {
            if (database[i].email === this.state.email &&
                database[i].password === this.state.password){
                    return true;
                }
    }
    return false;
    }

    onSignIn = (email, password) => {
        if (this.userValid(email, password)) {
                return this.props.history.push('/admin');
             } else {
                 alert('Sorry, Wrong Email or Password')
             }
    }


    render() { 
        return (
            <div>
        <Nav />
        <h1> Admin Login </h1>
        <div>
            <div class="card" >
                <div class="px-4 py-3">
                        <div class="form-group">
                            <h2 className='tc'>Sign In</h2>
                            <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                            <input onChange={this.onEmail} type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleDropdownFormPassword1">Password</label>
                            <input onChange={this.onPass} type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
                        </div>
                            <div class="form-check">
                            <input  type="checkbox" class="form-check-input" id="dropdownCheck"/>
                            <label class="form-check-label" for="dropdownCheck">
                                Remember me
                            </label>
                            </div>
                            <button onClick={this.onSignIn} type="submit" class="btn btn-primary">Sign in</button>
                 </div>  
            </div>
        </div>
    </div>
          );
    }
}
 
export default Login;









