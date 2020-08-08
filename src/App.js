import React from 'react';
import Signup from './components/Signup'
import './App.css';
import AdminLogin from './components/Adminlogin';
import AddStudent from './components/AddStudent';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StudentData from './components/StudentData';
import DataChart from './components/DataChart';
import {userContext} from './components/MyContext'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
        <Link to='/'><Navbar.Brand>Admin login</Navbar.Brand></Link>
          <Nav className="mr-auto">
          <Link to='/adminsignup'><Navbar.Brand> Admin signup</Navbar.Brand></Link>
          <Link to='/new'><Navbar.Brand>New Student</Navbar.Brand></Link>
          <Link to='/studentdata'><Navbar.Brand>Student Data</Navbar.Brand></Link>
          <Link to='/datachart'><Navbar.Brand>Data Chart</Navbar.Brand></Link>
          </Nav>

        </Navbar>


        <Switch>
          
          <Route path='/new' component={AddStudent} />
          <Route path='/adminsignup' component={Signup} />
          <Route path='/studentdata' component={StudentData} />
          <Route path='/datachart' component={DataChart} />
          <Route path='/' component={AdminLogin} />
         
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
