import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

class CheckoutSummary extends React.Component{
    render(){
        return (
                <div className={classes.CheckoutSummary}>
                    <h1>Hope you like your order!!</h1>
                    <div className={classes.Burger}>
                        <Burger ingredients={this.props.ingredients}/>
                        <Button btnType="Danger" clicked={this.props.cancel}>Cancel</Button>
                        <Button btnType="Success" clicked={this.props.continue}>Continue</Button>
                    </div>
                </div>
        )
    }
}
export default CheckoutSummary