import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    state = {  }
    render() { 
        return ( 

            <div>
            <ul class="nav justify-content-end m-2">
                <li class="nav-item ">
                   <Link to='/'> <a class="nav-link active" style={{color:'black'}} href="">Home</a></Link>
                </li>
                <li class="nav-item">
                   <Link to='/Login'> <a class="nav-link" style={{color:'black'}} href="">Login</a></Link>
                </li>
            </ul>
            </div>
         );
    }
}
 
export default Nav;