import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import './App.css';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import Table from './components/Table/Table.jsx';
import { BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
            <Switch>
            <Route exact path='/' component={Home}  />
            <Route exact path='/login' component={Login}  />
            <Route path='/admin' component={Admin}  />
            <Route path='/table' component={Table}  />
            <Redirect path="/" to="/login" exact />
            </Switch>
            {/* <Route exact path="/login" component={Login} /> */}
        </div>
    </Router>
    );
  }
}
export default App;

