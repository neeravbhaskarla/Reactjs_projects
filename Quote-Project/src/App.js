import React, {Suspense} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import AllQuotes from './pages/AllQuotes'
import QuoteDetail from './pages/QuoteDetail'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/UI/LoadingSpinner'
const NewQuote = React.lazy(()=>import('./pages/NewQuote'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner/></div>}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'/>
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes/>
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail/>
          </Route>
          <Route path='/new-quotes'>
            <NewQuote/>
          </Route>
          <Route path='*'>
            <p>Page Not Found!!!</p>
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
