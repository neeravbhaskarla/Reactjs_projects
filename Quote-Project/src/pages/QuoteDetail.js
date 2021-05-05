import {React, Fragment, useEffect} from 'react'
import {Route, useParams, Link, useRouteMatch} from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import useHttp from '../hooks/use-http'
import {getSingleQuote} from '../lib/api'
const QuoteDetail = () =>{
    const match = useRouteMatch()
    const params = useParams()
    const {quoteId} = params
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true) 
    useEffect(()=>{
        sendRequest(quoteId)
    },[sendRequest, quoteId])
    if(status === 'pending'){
        return <LoadingSpinner/>
    }
    if(error){
        return <p className='centered'>{error}</p>
    }
    if(!loadedQuote.text){
        return <p>quote is not found!!</p>
    }
    return(
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
            <Route path={match.path} exact>
            <div className="centered">
                <Link to={`${match.url}comments`} className="btn--flat">Load Comments</Link>
            </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    )
}
export default QuoteDetail