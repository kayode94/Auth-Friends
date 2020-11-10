import React,{useState} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from './Components/Login'
import FriendList from './Components/FriendList'
import FriendForm from './Components/FriendForm'
import PrivateRoute from './Components/PrivateRoute'
import './App.css';
import { axiosWithAuth } from './Utilities/axiosWithAuth'

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)

  const logout = () =>{
    axiosWithAuth()
    .post('/logout')
    .then(response=>{
      localStorage.removeItem('token')
      setLoggedIn(false)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to = 'login'>Login</Link>
          </li>
          <li>
            <Link to ='#' onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to ='/protected'>Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path = '/protected' component={FriendList}/>
          <PrivateRoute exact path = '/FriendForm' component = {FriendForm}/>
          <Route exact path = '/login' component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
