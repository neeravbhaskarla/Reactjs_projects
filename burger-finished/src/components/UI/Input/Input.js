import React from 'react'
import classes from './Input.css'
const input=(props)=>{
    let inputElement = null
    const combinedClasses = [classes.InputElement]
    if(props.invalid && props.shouldValidate && props.touched){
        combinedClasses.push(classes.Invalid)
    }
    switch(props.elementType){
        case('input'):
            inputElement = <input 
                                className={combinedClasses.join(' ')} {...props.elementConfig} 
                                value={props.value}
                                onChange={props.changed}/>
            break;
        case('textarea'):
            inputElement = <textarea 
                                className={combinedClasses.join(' ')} {...props.elementConfig} 
                                value={props.value}
                                onChange={props.changed}/>
            break;
        case('select'):
            inputElement = <select 
                                className={combinedClasses.join(' ')} 
                                value={props.value}
                                onChange={props.changed}>
                                    <option>Select</option>
                                {props.elementConfig.options.map(option=>(
                                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                                ))}
                            </select>
            break;
        default:
            inputElement = <input className={combinedClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default input