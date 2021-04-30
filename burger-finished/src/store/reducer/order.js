import * as actionTypes from '../actions/index'

const initialState = {
    orders:[],
    loading: false,
    fetch_loading:false,
    purchased: false
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.PURCHASE_BURGER_START:
            return{
                ...state,
                loading: true
            }
        case actionTypes.ON_PURCHASE:
            return{
                ...state,
                purchased: false
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return{
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder),
                purchased: true
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return{
                ...state,
                loading: false,
                purchased: true
            }
        case actionTypes.FETCH_ORDER:
            return{
                ...state,
                orders: action.orders
            }
        case actionTypes.FETCH_ORDER_START:
            return{
                ...state,
                fetch_loading: true
            }
        case actionTypes.FETCH_ORDER_FAIL:
            return{
                ...state,
                fetch_loading: false
            }
        default:
            return state
    }
}
export default reducer