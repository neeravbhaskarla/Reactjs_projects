import * as actionTypes from './actionTypes'
import axios from '../../axios-order'
export const addIngredient=(ingName)=>{
    return{
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName: ingName
    }
}
export const subIngredient=(ingName)=>{
    return{
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: ingName
    }
}
const setIngredients=(ingredients)=>{
    return{
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}
const fetchIngredientsStart=()=>{
    return{
        type: actionTypes.FETCH_INGREDIENTS_START
    }
}
const fetchIngredientsFalied=()=>{
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}
export const initIngredients = () =>{
    return dispatch=>{
        dispatch(fetchIngredientsStart())
        axios.get('/ingredients.json')
            .then(response=>{
                dispatch(setIngredients(response.data))
            })
            .catch(err=>{
                dispatch(fetchIngredientsFalied())
            })
    }
}