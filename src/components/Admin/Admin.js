import React, { Component } from 'react';
import './Admin.css';
// import { BrowserRouter as NavLink} from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";


class Admin extends Component {
    
    constructor() {
        super();
        this.state = {
          input: '',
          data: []
        
        }
      }
    
      onInputChange = (event) => {
        this.setState({input: event.target.value})
        console.log(event.target.value);
      }
    
      onBtn = () => {
        console.log('click');
      }
    

      addRow = () => {
        const rows = this.state.rows;
        rows.push('new row')
        this.setState({rows: this.state.rows})
    }

    render() {  

        const onInputChange = this.onInputChange;
        const onBtn = this.onBtn;

        
        return (  

        
        <div className='main'>

            {/* <table>
                    {this.state.rows.map((r) => (
                      <tr>
                          <td>{r}</td>
                      </tr>
                    ))}
                </table>
                <button id="addBtn" onClick={this.addRow}>ADD</button> */}

                <ReactTable
            data={this.state.data}
            columns={[
              {
                Header: "Name",
                accessor: "tbName",
                Cell: this.renderEditable
              },
              {
                Header: "Email",
                accessor: "tbEmail",
                Cell: this.renderEditable
              },
              {
                Header: "Password",
                accessor: "tbPass",
                Cell: this.renderEditable
              }
            ]}
            className="-striped -highlight"
          />



        {/* <NavLink to='/' exact><p  className='signout btn btn-link'>Sign out</p></NavLink>
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
                            <input onChange={onInputChange} type="text" class="form-control" id="focusedInput" placeholder="Name"/>
                            <label >Email</label>
                            <input onChange={onInputChange} type="Email" class="form-control" id="focusedInput" placeholder="Email"/>
                            <label >Password</label>
                            <input onChange={onInputChange} type="text" class="form-control" id="focusedInput" placeholder="Password"/>
                        </div>
                            
                        </div>

                        <div class="modal-footer">
                        <button onClick={onBtn} type="submit" class="btn btn-primary">Submit</button>
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
                    <tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        </div> */}
        </div>
        );
    }
}
 
export default Admin;