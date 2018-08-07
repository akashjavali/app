import React, { Component } from 'react';

class Nav extends Component {
    state = {  }
    render() { 
        return ( 

            <div>
            <ul class="nav justify-content-end m-2">
                <li class="nav-item ">
                    <a class="nav-link active" style={{color:'black'}} href="">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style={{color:'black'}} href="">Login</a>
                </li>
            </ul>
            </div>
         );
    }
}
 
export default Nav;