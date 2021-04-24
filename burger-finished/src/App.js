import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import {Route,BrowserRouter} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Route path='/' exact component={BurgerBuilder}/>
            <Route path='/orders' exact component={Orders}/>
            <Route path='/checkout'  component={Checkout}/>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
