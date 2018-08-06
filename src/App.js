import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import './App.css';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
    console.log(event.target.value);
  }

  onBtn = () => {
    console.log('click');
  }

  render() {
    return (
      <Router>
      <div className="App">

      <Route exact path='/' component={Login}  />
      <Route path='/admin' component={Admin}  />
      
      {/* <Login 
      onInputChange={this.onInputChange}
      onBtn={this.onBtn}
      />
      <Admin 
      onInputChange={this.onInputChange}
      onBtn={this.onBtn}
      /> */}
      
      
      
      </div>
      </Router>
    );
  }
}



export default App;

