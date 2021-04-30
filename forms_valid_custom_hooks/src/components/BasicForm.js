import useInput from '../hooks/use-input'

const BasicForm = (props) => {
  let formIsValid = false

  const {value: setFirstName, 
         isError: firstNameIsInvalid, 
         onValueChangeHandler: firstNameChangeHandler, 
         onTouchChangeHandler: firstNameTouchHandler, 
         reset: resetFirstName} = 
         useInput(value=>value.trim()!=='')

  const {value: setLastName, 
         isError: lastNameIsInvalid, 
         onValueChangeHandler: lastNameChangeHandler, 
         onTouchChangeHandler: lastNameTouchHandler, 
         reset: resetLastName} = 
         useInput(value=>value.trim()!=='')

  const {value: setEmail, 
        isError: emailIsInvalid, 
        onValueChangeHandler: emailChangeHandler, 
        onTouchChangeHandler: emailTouchHandler, 
        reset: resetEmail} = 
        useInput(value=>value.trim().includes('@'))

  formIsValid = !firstNameIsInvalid&&!lastNameIsInvalid&&!emailIsInvalid
  const formSubmissionHandler=(event)=>{
    event.preventDefault()
    if(!formIsValid){
      return
    }
    resetFirstName()
    resetLastName()
    resetEmail()
  }
  const firstNameClasses = firstNameIsInvalid?'form-control invalid':'form-control';
  const lastNameClasses = lastNameIsInvalid?'form-control invalid':'form-control';
  const emailClasses = emailIsInvalid?'form-control invalid':'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameTouchHandler} value={setFirstName}/>
          {firstNameIsInvalid?<p>Don't leave Blank Input</p>:null}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameTouchHandler} value={setLastName}/>
          {lastNameIsInvalid?<p>Don't leave Blank Input</p>:null}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailTouchHandler} value={setEmail}/>
        {emailIsInvalid?<p>Enter In Valid Form</p>:null}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
