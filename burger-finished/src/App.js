import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {Route,BrowserRouter, Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import * as AuthActions from './store/actions/index'
import asyncComponent from './hoc/asyncComponent/asyncComponent'


const asyncCheckout = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout')
})
const asyncOrders = asyncComponent(()=>{
  return import('./containers/Orders/Orders')
})
const asyncAuth = asyncComponent(()=>{
  return import('./containers/Auth/Auth')
})
const asyncLogout = asyncComponent(()=>{
  return import('./containers/Auth/Logout/Logout')
})
class App extends Component {
  componentDidMount(){
    this.props.tryAutoSignUp()
  }
  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/auth" component={asyncAuth} />
        <Redirect to="/" />
      </Switch>
    )
    if(this.props.isAuth){
       routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/logout" component={asyncLogout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
      </Switch>
      )
    }
    return (
      <div>
        <BrowserRouter>
          <Layout>
            {routes}
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    isAuth: state.auth.token!==null
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    tryAutoSignUp : ()=> dispatch(AuthActions.checkAuthState())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
