import React from 'react'
import axios from '../../axios-order'
import Order from '../../components/Order/Order'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

class Orders extends React.Component{
    state={
        orders:[],
        loading: true
    }
    componentDidMount(){
        axios.get('orders.json')
            .then(res=>{
                let fetchedOrders=[]
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key], //Contains the object file in the unique key
                        id: key //Contains the unique Id
                    })
                }
                this.setState({orders: fetchedOrders, loading: false})
            })
            .catch(err=>{
                this.setState({loading: false})
            })
    }
    fetchOrders=()=>{
        
    }
    render(){
        return(
            <div>
                {this.state.orders.map(order=>(
                    <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
                ))}
            </div>
        )
    }
}
export default withErrorHandler(Orders,axios)