import React, { Component } from 'react';
import Nav from '../Nav/Nav'

class Home extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <Nav />
            <div className='main'>
                <h1 className='home' style={{fontSize:'6rem',marginTop:'150px'}}>Welcome to Home </h1>
                <h4 className='sign' style={{fontSize:'2rem',textAlign: 'center'}}>Please Login To Continue</h4>
            </div>
        </div>

          );
    }
}
 
export default Home;