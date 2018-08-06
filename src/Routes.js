import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';


const Routes = () => {
    return (
        <Router>


        <Route path='/' component={Login} exact strict />
        <Route path='/admin' component={Admin} exact strict />



        </Router>
    )
}

export default Routes;