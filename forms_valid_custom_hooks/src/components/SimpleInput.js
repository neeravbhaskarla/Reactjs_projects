import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
  const {value: enteredName,
         hasError: nameInputIsInvalid, 
         enteredValueChangeHandler: nameChangeHandler,
         BlurHandler: nameInputBlurHandler,
         reset: nameValueReset} = 
         useInput((value)=>(value.trim()!==''))
  
  const {value: enteredEmail, 
         hasError: emailInputIsInvalid, 
         enteredValueChangeHandler: emailChangeHandler, 
         BlurHandler: emailInputBlurHandler, 
         reset: emailValueReset} = 
         useInput((value)=>(value.trim().includes('@')))

  let formIsValid = false

  const formChangeHandler=(event)=>{
    formIsValid = !nameInputIsInvalid && !emailInputIsInvalid
    event.preventDefault()
    if(!formIsValid){
      return
    }
    console.log(event)
    nameValueReset()
    emailValueReset()
  }

  const nameClasses = nameInputIsInvalid?'form-control invalid':'form-control'
  const emailClasses = emailInputIsInvalid?'form-control invalid': 'form-control'
  return (
    <form onSubmit={formChangeHandler}>
      <div className={nameClasses}>
        <label htmlFor='name' >Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} value={enteredName} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid?<p>Don't Leave as Blank</p>:null}
      </div>
      <div className={emailClasses}>
        <label htmlFor='email' >Your Email</label>
        <input type='email' id='email' onChange={emailChangeHandler} value={enteredEmail} onBlur={emailInputBlurHandler}/>
        {emailInputIsInvalid?<p>Email Is Invalid</p>:null}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
