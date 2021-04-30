import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import Contact from '../../containers/Checkout/Contact/Contact'
import classes from './Checkout.css'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
// import {Spinner} from '../../components/UI/Spinner/Spinner'

class Checkout extends React.Component{  
    state={
        ingredients: null,
        totalPrice: 0
    }
    // componentWillMount(){ // Too late
    //     this.props.onInitPurchase()
    // }
    // componentWillMount(){ // fetching data from query parameters
    //     const queryParm = new URLSearchParams(this.props.location.search)
    //     const ingredients = {}
    //     let price = null
    //     for(let param of queryParm.entries()){
    //         if(param[0]==='price'){
    //             price = param[1]
    //         }
    //         else{
    //             ingredients[param[0]] = +param[1]
    //         }
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price})
    // }
    checkoutCancel=()=>{
        this.props.history.goBack()
    }
    checkoutContinue=()=>{
        this.props.history.push('/checkout/contact')
    }
    render(){
        let summary = <Redirect to='/'/>
        if(this.props.ingredients){
            const purchaseRedirect = this.props.purchased? <Redirect to='/'/>: null
            summary = (
                <div>
                    {purchaseRedirect}
                    <CheckoutSummary ingredients={this.props.ingredients} continue={this.checkoutContinue} cancel={this.checkoutCancel}/>
                        <Route path={this.props.match.path + '/contact'} 
                               render={(props)=><Contact ingredients={this.props.ingredients} totalPrice={this.props.totalPrice} {...this.props}/>}/>
                </div>
            )
        }
        return(
            <div className={classes.Checkout}>
                {summary}
            </div>

        )
    }
}
const mapStateToProps = state =>{
    return{
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        purchased: state.order.purchased
    }
}
export default connect(mapStateToProps)(Checkout)