import React, { Component } from 'react';
import './Admin.css';
import {Link} from 'react-router-dom';
import "react-table/react-table.css";


class Admin extends Component {
    
    constructor() {
        super();
        this.state = {
            id: 0,
            nameInput: '',
            emailInput: '',
            passwordInput: '',
            data: [],
            list: []
        
        }
      }

      
      hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
          // if the key exists in localStorage
          if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);
    
            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
            } catch (e) {
              // handle empty string
              this.setState({ [key]: value });
            }
          }
        }
      }

      componentDidMount() {
        this.hydrateStateWithLocalStorage();
     }

    

      onInputChange = (input, e) => {
        if(input === 'name') {
            this.setState({nameInput: e.target.value})
        }else if(input === 'email') {
            this.setState({emailInput: e.target.value})
        }else if(input === 'password') {
            this.setState({passwordInput: e.target.value})
        }
        console.log(input, e.target.value); 
      }
    
      onBtn = () => {
          
        const data = this.state.data;
        data.push({
            name: this.state.nameInput,
            email: this.state.emailInput,
            password: this.state.passwordInput
        })
        this.setState({data: data})
        console.log(this.state.data)
        localStorage.setItem('data', JSON.stringify(data))
    
    }


    render() {  

        const onInputChange = this.onInputChange;
        const onBtn = this.onBtn;

        
        return (  

        
        <div className='main'>

           
                <Link to="/"><p className= 'signout'>Sign out</p></Link>
                <h1>Admin Panel</h1>
                <div className='bt'><button className='btn btn-primary' data-toggle="modal" data-target="#myModal">Add Users</button></div>
                <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                <div class="modal-content">

                <div class="add-card " >
                <div class="px-4 py-3">
                <div class="form-horizotal">
                <div class="modal-header">
                <h4 class="modal-title">Add User</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                
                </div>
                
                <div class="modal-body">
                <label >Name</label>
                    <input onChange={(e) => onInputChange('name', e)} type="text" class="form-control" id="focusedInput" placeholder="Name"/>
                    <label >Email</label>
                    <input onChange={(e) => onInputChange('email', e)} type="Email" class="form-control" id="focusedInput" placeholder="Email"/>
                    <label >Password</label>
                    <input onChange={(e) => onInputChange('password', e)} type="text" class="form-control" id="focusedInput" placeholder="Password"/>
                </div>
                    
                </div>

                <div class="modal-footer">
                <button onClick={() => onBtn()} type="submit" class="btn btn-primary">Submit</button>
                    </div>
                            
                 </div>  
            </div>

        </div>
        </div>
        </div>


        <div className='admin-table'>

            <div className='tb'>
            <div class="admin-card" >
            <table class="table table-bordered text-center">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                      {
                          
                        
                          this.state.data.map((data, key) => (
                          <tr>
                              <td>{key + 1}</td>
                              <td>{data.name}</td>
                              <td>{data.email}</td>
                              <td>{data.password}</td>           
                          </tr>
                      ))
                      }

                    
                </tbody>
                </table>
            </div>
        </div>
        </div>
        </div>
        );
    }
}
 
export default Admin;