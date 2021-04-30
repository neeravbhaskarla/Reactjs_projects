import React from 'react';
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css'
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import * as authActions from '../../store/actions/index'
class Auth extends React.Component{
    state={
        controls:{
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 7
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        isSignIn: true
    }
    componentDidMount(){
        if(!this.props.building && this.props.authRedirectPath!=='/'){
            this.props.onSetRedirectPath()
        }
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.controls
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let identifer in updatedOrderForm) {
            formIsValid = updatedOrderForm[identifer].valid && formIsValid;
        }
        this.setState({controls: updatedOrderForm, formIsValid: formIsValid});
    }
    formSubmitHandler=(event)=>{
        event.preventDefault()
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignIn)
    }
    SignButtonHandler=()=>{
        this.setState(prevState=>{
            return {isSignIn: !prevState.isSignIn}
        })
    }
    render(){
        const formElementsArray = []
        for(let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        let form = formElementsArray.map(formElement=>(
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))
        if(this.props.loading){
            form=<Spinner/>
        }
        let errorMessage = null;
        if(this.props.error){
            errorMessage=<p>{this.props.error.message}</p>
        }
        let authRedirect = null;
        if(this.props.isAuth){
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }
        return(
            <div className={classes.Auth}>
                <form onSubmit={this.formSubmitHandler}>
                    {authRedirect}
                    {errorMessage}
                    {form}
                    <Button btnType="Success" disabled={!this.state.formIsValid}>SUBMIT</Button>
                </form>
                    <Button btnType="Danger" clicked={this.SignButtonHandler}>{this.state.isSignIn?<p>SWITCH TO SIGN UP</p>:<p>SWITCH TO SIGN IN</p>}</Button>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token!==null,
        building: state.burger.building,
        authRedirectPath: state.auth.authRedirectPath
    }   
}
const mapDispatchToProps = dispatch =>{
    return{
        onAuth: (email,password,isSignIn)=>dispatch(authActions.auth(email,password,isSignIn)),
        onSetRedirectPath: ()=>dispatch(authActions.setAuthRedirect('/'))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Auth)