import React, { Component } from 'react';

import Aux from '../../hoc/Auxilary/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import axios from '../../axios-order'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'



class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        purchasing: false
    }
    componentDidMount(){
        // axios.get('/ingredients.json')
        //     .then(response=>{
        //         this.setState({ingredients: response.data})
        //     })
        //     .catch(err=>{
        //         this.setState({error: err})
        //     })
        this.props.initIngredients()
    }
    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        return sum>0
    }

    // addIngredientHandler = ( type ) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
    //     this.updatePurchaseState(updatedIngredients);
    // }

    // removeIngredientHandler = ( type ) => {
    //     const oldCount = this.state.ingredients[type];
    //     if ( oldCount <= 0 ) {
    //         return;
    //     }
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
    //     this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
    //     this.updatePurchaseState(updatedIngredients);
    // }

    purchaseHandler = () => {
        if(this.props.isAuth){
            this.setState({purchasing: true});
        }
        else{
            this.props.onSetAuthRedirectPath('/checkout')
            this.props.history.push('/auth')
        }
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        // const queryParameters = []
        // for(let i in this.state.ingredients){
        //     queryParameters.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]))
        // }
        // queryParameters.push('price='+this.state.totalPrice.toFixed(2))
        // const queryString = queryParameters.join('&')
        // this.props.history.push({
        //     pathname:'/checkout',
        //     search:'?'+ queryString

        // })
        this.props.onInitPurchase()
        this.props.history.push('/checkout')
    }

    render () {
        const disabledInfo = {
            ...this.props.ings
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null
        let burger = <Spinner/>
        if(this.props.error){
            burger=<p style={{textAlign:'center'}}>Ingredients cannot be loaded</p>
        }
        if(this.props.ings){
            orderSummary=(
                <OrderSummary 
                            ingredients={this.props.ings}
                            price={this.props.totalPrice}
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler} />)
            burger=(
                <Aux>
                        <Burger ingredients={this.props.ings} />
                        <BuildControls
                            ingredientAdded={this.props.onIngredientAdded}
                            ingredientRemoved={this.props.onIngredientRemoved}
                            disabled={disabledInfo}
                            isAuth={this.props.isAuth}
                            purchasable={this.updatePurchaseState(this.props.ings)}
                            ordered={this.purchaseHandler}
                            price={this.props.totalPrice} />
                </Aux>)
        }
        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {this.props.loading?<Spinner/>:burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        loading: state.burger.loading,
        error: state.burger.error,
        isAuth: state.auth.token!==null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.subIngredient(ingName)),
        initIngredients: ()=>dispatch(actions.initIngredients()),
        onInitPurchase: ()=>dispatch(actions.onPurchase()),
        onSetAuthRedirectPath: (path)=>dispatch(actions.setAuthRedirect(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler( BurgerBuilder, axios ));