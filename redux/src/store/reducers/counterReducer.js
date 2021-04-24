import * as actionType from '../actions/actionsTypes'
import {updatedObject} from  '../utility'
const initialState={
    counter: 0
}
const counterReducer=(state= initialState,action)=>{
    switch(action.type){
        case actionType.INCREMENT:
            // const newState = Object.assign({},state) //immutable method
            // newState.counter = state.counter+1 
            // return newState
            return updatedObject(state,{counter: state.counter+1})
        case actionType.DECREMENT:
            // return{
            //     ...state,
            //     counter: state.counter-1
            // }
            return updatedObject(state,{counter: state.counter-1})
        case actionType.ADD:{
            return updatedObject(state,{counter: state.counter+action.value})
        }
        case actionType.SUB:{
            return updatedObject(state,{counter: state.counter-action.value})
        }
        default:
            return state;
    }
}
export default counterReducer