import * as actionTypes from './actionsTypes'
export const save_result = (res) =>{
    return{
        type: actionTypes.STORE_RESULT,
        result: res
    }
}
export const store_result =(result)=>{
    return (dispatch,getState) =>{
        // const oldCounter = getState().coun.counter;
        // console.log(oldCounter)
        setTimeout(()=>{
            dispatch(save_result(result))
        },2000)
    }
}
export const delete_result =(id)=>{
    return{
        type: actionTypes.DELETE_RESULT,
        resultID: id
    }
}