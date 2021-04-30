import * as actionTypes from '../actions/index'
import {updateObject} from '../utility'
const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false,
    loading: false
}
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const remove_ingredients = (state,action) =>{
    return{
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice-INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENTS: //updating Ingredients in one way
            const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
            const updatedIngredients = updateObject(state.ingredients,updatedIngredient)
            const updatedState= {
                ingredients:updatedIngredients,
                totalPrice: state.totalPrice+INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updateObject(state,updatedState)

        case actionTypes.REMOVE_INGREDIENTS: return remove_ingredients // updating Ingredients in other way

        case actionTypes.FETCH_INGREDIENTS_START:
            return{
                ...state,
                loading: true
            }
        case actionTypes.SET_INGREDIENTS:
            return{
                ...state,
                ingredients: action.ingredients,
                totalPrice: 4,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return{
                ...state,
                error: !state.error,
                loading: false
            }
        default:
            return state
    }
}
export default reducer