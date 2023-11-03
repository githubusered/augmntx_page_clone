import React, { useState } from 'react'

import './Hire.css';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

const Hire = () => {
  const [formData,setFormData] = useState({
    name:'',
    jobTitle:'',
    companyName:'',
    workEmail:'',
    phone:'',
    howDidYouHearAboutUs:''
  })
  const [errors, setErrors] = useState({
    name: 'Name is required',
    jobTitle: 'Job Title is required',
    companyName: 'Company Name is required',
    workEmail: 'Work Email is required',
    phone: 'Phone is required',
    howDidYouHearAboutUs: 'How did you hear about us is required',
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Special handling for the select field
    if (name === 'howDidYouHearAboutUs') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
      validateForm();
    }
  };
  
  const validateForm = () => {
    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      jobTitle: formData.jobTitle ? '' : 'Job Title is required',
      companyName: formData.companyName ? '' : 'Company Name is required',
      workEmail: formData.workEmail ? '' : 'Work Email is required',
      phone:
        /^\d{1,10}$/.test(formData.phone) || !formData.phone
          ? ''
          : 'Phone must be a number with a maximum length of 10 digits',
      howDidYouHearAboutUs:
        formData.howDidYouHearAboutUs !== 'howDidYouHearAboutUs'
          ? ''
          : 'How did you hear about us is required',
    };
  
    setErrors(newErrors);
  
    // Check if any error message is not empty
    return Object.values(newErrors).every((error) => error === '');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Prepare the request body
      const requestBody = {
        first_name: formData.name,
        last_name: formData.jobTitle,
        org_name: formData.companyName,
        email: formData.workEmail,
        tel: formData.phone,
      };
  
      // Make a POST request to the registration API
      fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'Registration successful') {
            alert(`Registration successful. Your email: ${data.email}, Password: ${data.password}`);
          } else {
            alert('Registration failed');
          }
        })
        .catch((error) => {
          console.error('Error during registration:', error);
          alert('Registration failed');
        });
    }
  };
  
  return (
    <div className='containers-cont'>
      <div className='bg-5272ff1a'>
        <div className="hirecontainer">
            <Nav />
            <section className='hireSection'>
                <div className='hireSection-about'>
                    <h2>Hire the best dedicated developers</h2>
                    <p>Hire pre-vetted developers with strong technical and communication skills at unbeatable prices. </p>
                    <p>If you decide to stop within one week, you pay nothing.</p>
                    <form  className='hireSection-about-form' onSubmit={handleSubmit}>
                        <div className='hireSection-about-formInputs'> 
                            <div className='hireSection-about-formInputs-input'>
                              <input type="text" placeholder='Name *' value={formData.name} onChange={handleInputChange} name='name' required/>
                              <div  className='hire-Inputs-Error-MessageDIV'>{errors.name && <div className="error-message-in-hire">{errors.name}</div>}</div>
                            </div>
                            <div className='hireSection-about-formInputs-input'>
                              <input type="text" placeholder='Job Title *' value={formData.jobTitle} onChange={handleInputChange} name='jobTitle'required/>
                              <div className="hire-Inputs-Error-MessageDIV"> {errors.jobTitle && <div className="error-message-in-hire">{errors.jobTitle}</div>}</div>
                              </div>
                            <div className='hireSection-about-formInputs-input'>
                              <input type="text" placeholder='Company Name *' value={formData.companyName} onChange={handleInputChange} name='companyName'required/>
                              <div className="hire-Inputs-Error-MessageDIV"> {errors.companyName && <div className="error-message-in-hire">{errors.companyName}</div>}</div>
                              </div>
                            <div className='hireSection-about-formInputs-input'>
                              <input type="email" placeholder='Work Email *' value={formData.workEmail} onChange={handleInputChange} name='workEmail'required/>
                              <div className="hire-Inputs-Error-MessageDIV"> {errors.workEmail && <div className="error-message-in-hire">{errors.workEmail}</div>}</div>
                              </div>
                            <div className='hireSection-about-formInputs-input'>
                              <input type="text" placeholder='Phone *' value={formData.phone} onChange={handleInputChange} name='phone'required/>
                             <div className="hire-Inputs-Error-MessageDIV">  {errors.phone && <div className="error-message-in-hire">{errors.phone}</div>}</div>
                              </div>
                            <div className='hireSection-about-formInputs-input'>
                            <select name="howDidYouHearAboutUs" value={formData.howDidYouHearAboutUs} onChange={handleInputChange}>
                                <option value="">How did you hear about us?*</option>
                                <option value="email">Email</option>
                                <option value="searchEngine">Search engine</option>
                                <option value="socialMedia">Social media</option>
                                <option value="others">Others</option>
                            </select>
                             <div className="hire-Inputs-Error-MessageDIV">  {errors.howDidYouHearAboutUs && <div className="error-message-in-hire">{errors.howDidYouHearAboutUs}</div>}</div>
                            </div>
                        </div>
                        <div className='hireSection-about-formSubmit'>
                            <div><input type="submit" value="Submit" /></div>
                            <span>* These fields are required.</span>
                        </div>
                    </form>
                </div>
            </section>
        </div>
      </div>
      <div className="bg-black">
        <div className="hirecontainer">
            <Footer />
        </div>
      </div>
    </div>
  )
}

export default Hire
