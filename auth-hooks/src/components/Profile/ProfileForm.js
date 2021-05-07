import classes from './ProfileForm.module.css';
import {useRef, useContext} from 'react' 
import AuthContext from '../../store/auth-context'

const ProfileForm = ()=> {
  const authCtx = useContext(AuthContext)
  const passwordRefValue = useRef(AuthContext)
  const submitHandler = (event) =>{
    event.preventDefault()
    const passwordValue = passwordRefValue.current.value
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCk2N7I2LlSTJLbvYVfBy7ldsKmMZaJdi4',{
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: passwordValue,
        returnSecureToken: false
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res=>{
        console.log(res)
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={passwordRefValue}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
