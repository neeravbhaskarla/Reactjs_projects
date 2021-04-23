import React, { Component } from 'react';
import {Route,Switch,Link, Redirect} from 'react-router-dom'
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route component={Users} exact path='/users'/>
            <Route component={Courses} path='/courses/'/>
            <Redirect from='/all-courses' to='/courses'/>
            <Route render={()=><h1>404 Not Found</h1>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
