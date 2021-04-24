import * as actionType from '../actions/actionsTypes'
import {updatedObject} from '../utility'
const initialState={
    results:[]
}
const delete_result = (state,action) =>{
    const updatedArray = state.results.filter(result=>result.id!==action.resultID)
    return updatedObject(state,{results: updatedArray})
}
const resultReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionType.STORE_RESULT:{
            // return{
            //     ...state,
            //     results: state.results.concat({id: new Date(),value: action.result})
            // }
            return updatedObject(state,{results: state.results.concat({id: new Date(),value: action.result})})
        }
        case actionType.DELETE_RESULT:{
            // const updatedArray = state.results.filter(result => result.id!==action.resultID)
            // // return{
            // //     ...state,
            // //     results: updatedArray
            // // }
            // return updatedObject(state,{results: updatedArray})
            return delete_result(state,action)
        }
        default:
            return state;
    }
}
export default resultReducer