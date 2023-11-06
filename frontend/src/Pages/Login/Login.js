import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Nav from '../../Components/Nav/Nav'

import './Login.css';

const Login = () => {
  const [formData,setFormData] = useState({
    email:'',
    password:'',
  })

  const [errors,setErrors] = useState({
    email:'',
    password:'',
  })

  
  const handleInputChange = (e) => {
    const {name,value} =  e.target;
    setFormData({...formData, [name]:value});
  }
  let [isNotValid, setIsNotValid] = useState(false);
  const validateForm = () =>{
    const newErrors = {
      email:'',
      password:'',
    };
   
    
    if(!formData.email) {
      newErrors.email = 'Email is required'
      setIsNotValid(true)
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
      isNotValid = true;
    }

    if(!formData.password){
      newErrors.password='Password is required';
      setIsNotValid(true)
    }else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)
    ) {
      newErrors.password = 'Password must be 8+ characters, containing lowercase, uppercase, numbers, and special characters.';
      isNotValid = true;
    }

    setErrors(newErrors)
    return isNotValid;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
   if(validateForm()){
    // const {email,password} = formData;
    // const requestData = {
    //   email,
    //   password
    // }
   }

  }
  return (
    <div className='bg-5272ff1a'>
      <Nav/>
      <section className="login-container">
        <div className="loginSection-cont">
            <div className="loginSection-contTitle">Sign in to start your session</div>
            <form className='loginSection-contForm' onSubmit={handleSubmit}>
                <ul className='loginSection-contForm-inputs'>
                {errors.email && (
                  <li className="loginSection-contForm-inputs-inp">
                    <div className="alert-danger">{errors.email}</div>
                  </li>
                  
                )}
                {errors.password && (
                  <li className="loginSection-contForm-inputs-inp">
                    <div className="alert-danger">{errors.password}</div>
                  </li>
                )}
                    <li className='loginSection-contForm-inputs-inp'>
                      <input type="email"
                         placeholder='Email'  
                         name='email'
                         value={formData.email} 
                         onChange={handleInputChange}/>
                    </li>
                    <li className='loginSection-contForm-inputs-inp'>
                      <input type="password"
                         placeholder='Password'
                         name='password'
                         value={formData.password}
                         onChange={handleInputChange} />
                         
                    </li>
                    <li className='loginSection-contForm-inputs-inp'>
                      <input 
                       type="submit"
                       value="Continue" /> 
                    </li>
                </ul>
            </form>
            <a href="/forgot-password">
                <div className="loginSection-contForgotPassword">Forgot password?</div>
            </a>
        </div>
        <div className="loginSection-signUp"> Don't have an account? 
            <a href="/join">Sign up</a>
        </div>
        <div className="loginSection-contactUs">
        Please 
        <a href="/contact-us">Contact us</a>
        if you require any assistance 
        </div>
      </section>
          <Footer/>
    </div>
  )
}

export default Login
