import { useState, useRef, useContext } from 'react';

import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context'
import {useHistory} from 'react-router-dom'

const AuthForm = () => {
  const history = useHistory()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const authCtx = useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  }; 
  const submitHandler = (event)=>{
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    let url
    if(isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCk2N7I2LlSTJLbvYVfBy7ldsKmMZaJdi4'
    }
    else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCk2N7I2LlSTJLbvYVfBy7ldsKmMZaJdi4'
    }
    setIsLoading(true)
    fetch(url,{
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res=>{
      setIsLoading(false) 
      if(res.ok){
        return res.json()
      }
      else{
        return res.json().then(data=>{
          let errorMessage = 'Authentication Failed!!'
          throw new Error(errorMessage)
        })
      }
    })
    .then(data=>{
      const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000) )
      authCtx.login(data.idToken, expirationTime.toISOString())
      history.replace('/')
    })
    .catch(err=>{
      alert(err.message)
    })
  }
  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
      {isLoading?<p style={{color:'white'}}>Loading....</p>:null}
    </section>

  );
};

export default AuthForm;
