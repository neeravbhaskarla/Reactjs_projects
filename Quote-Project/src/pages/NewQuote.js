import React, { useEffect } from "react"
import QuoteForm from'../components/quotes/QuoteForm'
import {useHistory} from 'react-router-dom'
import useHttp from '../hooks/use-http'
import {addQuote} from '../lib/api'
const NewQuote = () =>{
    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory()

    useEffect(()=>{
        if(status === 'completed'){
            history.push('/')
        }
    },[status,history])
    const newQuoteHandler = (quoteData)=>{
        sendRequest(quoteData)
    }
    return(
        <QuoteForm isLoading={status==='pending'} onAddQuote={newQuoteHandler}/>
    )
}
export default NewQuote