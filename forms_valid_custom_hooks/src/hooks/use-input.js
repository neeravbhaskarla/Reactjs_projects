// // #1
// import {useState} from 'react'

// const useInput = (valFun)=>{
//     const [enteredValue,setEnteredValue] = useState('')
//     const [isTouched, setIsTouched] = useState(false)

//     const IsValid = valFun(enteredValue);
//     const IsInvalid = !IsValid && isTouched

//     const enteredValueChangeHandler=(event)=>{
//         setEnteredValue(event.target.value)
//     }

//     const BlurHandler=(event)=>{
//         setIsTouched(true)
//     }

//     const reset=()=>{
//         setEnteredValue('')
//         setIsTouched(false)
//     }
//     return{
//         value: enteredValue,
//         hasError: IsInvalid,
//         enteredValueChangeHandler,
//         BlurHandler,
//         reset
//     }
// }
// export default useInput

// // #2
// import {useState} from 'react'
// const useInput = (valFun) =>{
//     const [enteredValue,setEnteredValue] = useState('')
//     const [isTouched,setIsTouched] = useState(false)

//     const enteredValueIsValid = valFun(enteredValue)
//     const enteredValueIsInValid = !enteredValueIsValid && isTouched

//     const onValueChangeHandler=(event)=>{
//         setEnteredValue(event.target.value)
//     }
//     const onTouchChangeHandler=(event)=>{
//         setIsTouched(true)
//     }
//     const reset=()=>{
//         enteredValue('')
//         setIsTouched(false)
//     }
//     return{
//         value: enteredValue,
//         isError: enteredValueIsInValid,
//         onValueChangeHandler,
//         onTouchChangeHandler,
//         reset
//     }
// }
// export default useInput

// Using useReducer instead of useState
import {useReducer} from 'react';
const initalInputState = {
    value: '',
    isTouched: false
}
const inputStateReducer = (state, action) =>{
    if(action.type ==='INPUT'){
        return {...state, value:action.value}
    }
    if(action.type === 'TOUCH'){
        return {...state, isTouched: true}
    }
    if(action.type ==='RESET'){
        return {value: '', isTouched: false}
    }
    return initalInputState
}
const useInput=(valFun)=>{
    const [inputState, dispatch] = useReducer(inputStateReducer, initalInputState)

    const enteredValueIsValid = valFun(inputState.value)
    const enteredValueIsInValid = !enteredValueIsValid && inputState.isTouched

    const onValueChangeHandler=(event)=>{
        dispatch({type:'INPUT', value: event.target.value})
    }
    const onTouchChangeHandler=(event)=>{
        dispatch({type:'TOUCH'})
    }
    const reset=()=>{
        dispatch({type:'RESET'})
    }
    return{
        value: inputState.value,
        isError: enteredValueIsInValid,
        onValueChangeHandler,
        onTouchChangeHandler,
        reset
    }

}
export default useInput