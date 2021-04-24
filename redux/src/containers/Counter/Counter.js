import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index'

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementClickHandler} />    
                <CounterControl label="Decrement" clicked={this.props.decrementClickHandler}  />
                <CounterControl label="Add 5" clicked={this.props.addClickHandler}  />
                <CounterControl label="Subtract 5" clicked={this.props.subClickHandler}  />
                <hr/>
                <button onClick={()=>this.props.storeClickHandler(this.props.ctr)}>store</button>
                <ul>
                    {this.props.res.map(key=>{
                        return <li key={key.id} onClick={()=>this.props.deleteClickHandler(key.id)}>{key.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}
const matchStatetoProps = state =>{
    return{
        ctr: state.coun.counter,
        res: state.res.results
    }
}
const matchDispatchtoProps = dispatch=>{
    return{
        incrementClickHandler: ()=> dispatch(actionCreators.increment()),
        decrementClickHandler: ()=> dispatch(actionCreators.decrement()),
        addClickHandler: ()=> dispatch(actionCreators.add(50)),
        subClickHandler: ()=> dispatch(actionCreators.sub(5)),
        storeClickHandler: (result)=> dispatch(actionCreators.store_result(result)),
        deleteClickHandler: (id)=> dispatch(actionCreators.delete_result(id))
    }
}
export default connect(matchStatetoProps,matchDispatchtoProps)(Counter);