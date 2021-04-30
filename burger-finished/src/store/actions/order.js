import * as actionTypes from './index'
import axios from '../../axios-order'

export const placeBurgerOrder=(order,token)=>{
    return dispatch=>{
        dispatch(purchaseBurgerStart())
        axios.post( '/orders.json?auth='+token,order)
                .then( response => {
                    // this.setState( { loading: false } );
                    // this.props.history.push( '/' );
                    dispatch(purchaseBurgerSuccess(response.data.name,order))
                } )
                .catch( error => {
                    // this.setState( { loading: false } );
                    dispatch(purchaseBurgerFail(error))
                } );
    }

}
export const onPurchase = ()  =>{
    return{
        type: actionTypes.ON_PURCHASE
    }
}
const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    };
};
export const fetchOrders = (token,userId) =>{
    return dispatch=>{
        dispatch(fetchOrdersStart())
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('orders.json'+ queryParams)
            .then(res=>{
                let fetchedOrders=[]
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key], //Contains the object file in the unique key
                        id: key //Contains the unique Id
                    })
                }
                dispatch(fetchedOrderSuccess(fetchedOrders))
            })
            .catch(err=>{
                dispatch(fetchedOrderFail(err))
            })
    }
}

const fetchedOrderSuccess = (orders) =>{
    return{
        type: actionTypes.FETCH_ORDER,
        orders: orders
    }
}
const fetchedOrderFail = (error) =>{
    return{
        type: actionTypes.FETCH_ORDER_FAIL,
        error: error
    }
}
const purchaseBurgerStart = ()=>{
    return{
        type: actionTypes.PURCHASE_BURGER_START
    }
}
const purchaseBurgerSuccess=(id,orderData)=>{
    return{
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
        
    }
}
const purchaseBurgerFail=(error)=>{
    return{
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}
