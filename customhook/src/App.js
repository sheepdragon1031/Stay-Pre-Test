import { useState, useEffect } from 'react';

import './App.css';

const useForm = ({initialValues, validation, onSubmit}) => {
  
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [bypass, setBypass] = useState(false);
  useEffect((onSubmits = onSubmit) => {
    if (Object.keys(errors).length === 0 && bypass) {
      onSubmits(values)
    }
  }, [ errors, bypass, values, onSubmit]);

  const handleChange = event => {
    setBypass(false)
    if(event.target.type === "text"){
      setValues(values=> ({...values, [event.target.name]: event.target.value}))
    }
    else if(event.target.type === "checkbox" ){
      setValues(values=> ({...values,  rememberMe : event.target.checked}))
    }
    
  }
  
  const handleSubmit = event => {
    setErrors(validation(values))
    setBypass(true)
  }
  return {handleChange, handleSubmit, values, errors}
}
function App() {
  const { handleChange, handleSubmit, values, errors } = useForm({
      initialValues: { account: "", password: "", rememberMe: false },
      validation: (values) => {
        const errors = {}
        if (!values.account) {
          errors.account = "請輸入帳號"
        } 
        else if (!values.password) {
          errors.password = "請輸入密碼"
        } return errors
      },
      onSubmit: (values) => console.table(values),
    })

  const [inputVal, setInputVal] = useState("");
  const debounceFunc = (func, delay) => {
    let timeout = null 
    return function() {
      const next = () => func.apply(this, arguments)
      clearTimeout(timeout)
      timeout = setTimeout(next, delay)
    }
  }
  
  const handleButton = debounceFunc((e) => {
    e.preventDefault();
    console.log(`${e.target.id} Debounce 1000ms`);
    setInputVal(`${e.target.id} Debounce 1000ms`)
  }, 1000)
  
  
  return (<>
  <input name="account" onChange={handleChange} value={values.account} placeholder="Account" />
  {errors.account && (<div>{errors.account}</div>)}
  <input name="password" onChange={handleChange} value={values.password} placeholder="password" />
  {errors.password && (<div>{errors.password}</div>)}
  <label>
    <input type="checkbox" name="rememberMe" onChange={handleChange} checked={values.rememberMe} />
    Remember Me
  </label>
  <button onClick={handleSubmit}>Login</button>

  <hr/>
  <div>
    <h3>Debounce 1000ms</h3>
    <button id="btn" onClick={e => handleButton(e)}>Debounce</button>
    <div>{inputVal}</div>
  </div>
  </>)
}

export default App;
