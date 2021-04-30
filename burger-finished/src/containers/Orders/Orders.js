import React from 'react'
import axios from '../../axios-order'
import Order from '../../components/Order/Order'
import {connect} from 'react-redux'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import * as OrderActions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends React.Component{
    componentDidMount(){
        this.props.fetchOrders(this.props.token,this.props.userId)
    }
    render(){
        let orders = this.props.orders.map(order=>(
            <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
        ))
        if(!this.props.loading){
            orders = <Spinner/>
        }
        return(
            <div>
                {orders}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        orders: state.order.orders,
        loading: state.order.fetch_loading,
        token: state.auth.token,
        userId: state.auth.userId,
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        fetchOrders: (token, userId)=> dispatch(OrderActions.fetchOrders(token, userId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios))