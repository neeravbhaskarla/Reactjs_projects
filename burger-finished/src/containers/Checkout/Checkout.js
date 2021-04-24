import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import Contact from '../../containers/Checkout/Contact/Contact'
import Button from '../../components/UI/Button/Button'
import classes from './Checkout.css'
import {Route} from 'react-router-dom'

class Checkout extends React.Component{  
    state={
        ingredients: null,
        totalPrice: 0,
    }
    componentWillMount(){
        const queryParm = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = null
        for(let param of queryParm.entries()){
            if(param[0]==='price'){
                price = param[1]
            }
            else{
                ingredients[param[0]] = +param[1]
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price})
    }
    checkoutCancel=()=>{
        this.props.history.goBack()
    }
    checoutContinue=()=>{
        this.props.history.push('/checkout/contact')
    }
    render(){
        return(
            <div className={classes.Checkout}>
                <CheckoutSummary ingredients={this.state.ingredients}/>
                <Button btnType="Danger" clicked={this.checkoutCancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.checoutContinue}>Continue</Button>
                <Route path={this.props.match.path + '/contact'} 
                       render={(props)=><Contact ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...this.props}/>}/>
            </div>

        )
    }
}
export default Checkout