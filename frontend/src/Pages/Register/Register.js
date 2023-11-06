import React, { useState } from 'react'
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

const Register = () => {
  const [isChecked,setIsChecked] = useState('Organisation');

  const [individualFormData,setIndividualFormData] = useState({
    firstname:'',
    lastname:'',
    workEmail:'',
    phoneNumber:'',
    city:'',
    refferalCode:''
  })
  const [organisationFormData,setOrganisationFormData] = useState({
    firstname:'',
    lastname:'',
    jobTitle:'',
    organisation:'',
    website:'',
    workEmail:'',
    phoneNumber:'',
    city:'',
    corpRegisterNumber:'',
    refferalCode:'',
  })
  const [individualErrors, setIndividualErrors] = useState({
    firstname: 'Firstname is required',
    lastname: 'Lastname is required',
    workEmail: 'Work Email is required',
    phoneNumber: 'Phone is required',
    city: 'City is required'
  });
  const [organisationErrors, setOrganisationErrors] = useState({
    firstname: 'Firstname is required',
    lastname: 'Lastname is required',
    jobTitle:'Job Title is required',
    organisation:'Organization is required',
    website:'Website is required',
    workEmail: 'Work Email is required',
    phoneNumber:'Phone is required',
    city: 'City is required',
    corpRegisterNumber:'Corporate register number is required',
  });  

  const handleInputChange = (e) => {
    const { name, value } = e.target;    
    if(isChecked === 'Organisation'){
      setOrganisationFormData({ ...organisationFormData, [name]: value });
      validateOrganizationForm();
    }else{
      setIndividualFormData({ ...individualFormData, [name]: value });
      validateIndividualForm();
    }
  };
  
  const validateIndividualForm = () => {
    const newErrors = {
      firstname: individualFormData.firstname ? '' : 'Firstname is required',
      lastname: individualFormData.lastname ? '' : 'Lastname is required',
      workEmail: individualFormData.workEmail ? '' : 'Work Email is required',
      city: individualFormData.city ? '' : 'City is required',
      phoneNumber:
        /^\d{1,10}$/.test(individualFormData.phoneNumber) || !individualFormData.phoneNumber
          ? ''
          : 'Phone must be a number with a maximum length of 10 digits',
    };
      
      setIndividualErrors(newErrors);
  
    // Check if any error message is not empty
    return Object.values(newErrors).every((error) => error === '');
  };
  
  const validateOrganizationForm = () => {
    const newErrors = {
      firstname: organisationFormData.firstname ? '' : 'Firstname is required',
      lastname: organisationFormData.lastname ? '' : 'Lastname is required',
      jobTitle: organisationFormData.jobTitle ? '' : 'Job Title is required',
      organisation: organisationFormData.organisation ? '' : 'Organization is required',
      website: organisationFormData.website ? '' : 'Website is required',
      workEmail: organisationFormData.workEmail ? '' : 'Work Email is required',
      city: organisationFormData.city ? '' : 'City is required',
      corpRegisterNumber: organisationFormData.corpRegisterNumber ? '' : 'Corporate Registration Number is required',
      phoneNumber:
        /^\d{1,10}$/.test(organisationFormData.phoneNumber) || !organisationFormData.phoneNumber
          ? ''
          : 'Phone must be a number with a maximum length of 10 digits',
    };
      
      setOrganisationErrors(newErrors);
  
    // Check if any error message is not empty
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked === 'Organisation' && validateOrganizationForm()) {
      
      // Prepare the request body

       const  requestBody = {
         first_name: organisationFormData.firstname,
         last_name: organisationFormData.lastname,
         job_title:organisationFormData.jobTitle,
         organization:organisationFormData.organisation,
         website:organisationFormData.website,
         email: organisationFormData.workEmail,
         tel: organisationFormData.phoneNumber,
         city: organisationFormData.city,
         corpRegisterNumber: organisationFormData.corpRegisterNumber,
         refferalCode: organisationFormData.refferalCode,
       }
      
  
      // Make a POST request to the registration API
      fetch('http://www.augmntx.com/api/register', {
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
          console.log(requestBody)
        });
    }else{
      const  requestBody = {
        first_name: individualFormData.firstname,
        last_name: individualFormData.lastname,
        email: individualFormData.workEmail,
        tel: individualFormData.phoneNumber,
        city: individualFormData.city,
        refferalCode: individualFormData.refferalCode,
      }
      fetch('http://www.augmntx.com/api/register', {
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
          console.log(requestBody)
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
                    <h2>Create your AugmntX Account</h2>
                    <p> AugmntX is an exclusive network of the world's top talent. </p>
                    <p> We provide access to top companies and resources that can help accelerate your growth. </p>
                    <div style={{marginBottom:'25px',display:'flex',}}>
                      <label  style={{marginRight:'15px',display:'flex',flexDirection:'row',alignItems:'center',fontSize:'20px'}}><input type="radio" style={{width:'25px',height:'25px'}} name='radioOption' value={'Organisation'} checked={isChecked === 'Organisation'} onChange={()=>setIsChecked('Organisation')}/> Organisation </label>
                      <label style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'20px'}}><input type="radio" style={{width:'25px',height:'25px'}} name='radioOption' value={'Individual'} checked={isChecked==='Individual'} onChange={()=>setIsChecked('Individual')} /> Individual </label>
                      
                    </div>
                    {isChecked === 'Organisation' && 
                      <form  className='hireSection-about-form' onSubmit={handleSubmit}>
                      <div className='hireSection-about-formInputs'> 
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='First Name *' value={organisationFormData.firstname} onChange={handleInputChange} name='firstname' required/>
                            <div  className='hire-Inputs-Error-MessageDIV'>{organisationErrors.firstname && <div className="error-message-in-hire">{organisationErrors.firstname}</div>}</div>
                          </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='Last Name *' value={organisationFormData.lastname} onChange={handleInputChange} name='lastname'required/>
                            <div className="hire-Inputs-Error-MessageDIV"> {organisationErrors.lastname && <div className="error-message-in-hire">{organisationErrors.lastname}</div>}</div>
                            </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='Job title *' value={organisationFormData.jobTitle} onChange={handleInputChange} name='jobTitle'required/>
                            <div className="hire-Inputs-Error-MessageDIV"> {organisationErrors.jobTitle && <div className="error-message-in-hire">{organisationErrors.jobTitle}</div>}</div>
                          </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='Organisation *' value={organisationFormData.organisation} onChange={handleInputChange} name='organisation'required/>
                            <div className="hire-Inputs-Error-MessageDIV"> {organisationErrors.organisation && <div className="error-message-in-hire">{organisationErrors.organisation}</div>}</div>
                          </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='Website *' value={organisationFormData.website} onChange={handleInputChange} name='website'required/>
                            <div className="hire-Inputs-Error-MessageDIV"> {organisationErrors.website && <div className="error-message-in-hire">{organisationErrors.website}</div>}</div>
                          </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="email" placeholder='Work email *' value={organisationFormData.workEmail} onChange={handleInputChange} name='workEmail'required/>
                            <div className="hire-Inputs-Error-MessageDIV"> {organisationErrors.workEmail && <div className="error-message-in-hire">{organisationErrors.workEmail}</div>}</div>
                            </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='Phone number *' value={organisationFormData.phoneNumber} onChange={handleInputChange} name='phoneNumber'required/>
                            <div className="hire-Inputs-Error-MessageDIV"> {organisationErrors.phoneNumber && <div className="error-message-in-hire">{organisationErrors.phoneNumber}</div>}</div>
                            </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='City *' value={organisationFormData.city} onChange={handleInputChange} name='city'required/>
                          <div className="hire-Inputs-Error-MessageDIV">  {organisationErrors.city && <div className="error-message-in-hire">{organisationErrors.city}</div>}</div>
                            </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='Corporate Registration Number *' value={organisationFormData.corpRegisterNumber} onChange={handleInputChange} name='corpRegisterNumber'required/>
                            <div className="hire-Inputs-Error-MessageDIV"> {organisationErrors.corpRegisterNumber && <div className="error-message-in-hire">{organisationErrors.corpRegisterNumber}</div>}</div>
                          </div>
                            <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='Refferal code ' value={organisationFormData.refferalCode} onChange={handleInputChange} name='refferalCode'required/>
                          </div>
                      </div>
                      <div className='hireSection-about-formSubmit'>
                          <div><input type="submit" value="Register" /></div>
                      </div>
                    </form>
                    }
                    {isChecked === 'Individual' && 
                      <form  className='hireSection-about-form' onSubmit={handleSubmit}>
                      <div className='hireSection-about-formInputs'> 
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='First Name *' value={individualFormData.firstname} onChange={handleInputChange} name='firstname' required/>
                            <div  className='hire-Inputs-Error-MessageDIV'>{individualErrors.firstname && <div className="error-message-in-hire">{individualErrors.firstname}</div>}</div>
                          </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='Last Name *' value={individualFormData.lastname} onChange={handleInputChange} name='lastname'required/>
                            <div className="hire-Inputs-Error-MessageDIV"> {individualErrors.lastname && <div className="error-message-in-hire">{individualErrors.lastname}</div>}</div>
                            </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="email" placeholder='Work email *' value={individualFormData.workEmail} onChange={handleInputChange} name='workEmail'required/>
                            <div className="hire-Inputs-Error-MessageDIV"> {individualErrors.workEmail && <div className="error-message-in-hire">{individualErrors.workEmail}</div>}</div>
                            </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='Phone number *' value={individualFormData.phoneNumber} onChange={handleInputChange} name='phoneNumber'required/>
                            <div className="hire-Inputs-Error-MessageDIV"> {individualErrors.phoneNumber && <div className="error-message-in-hire">{individualErrors.phoneNumber}</div>}</div>
                            </div>
                          <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='City *' value={individualFormData.city} onChange={handleInputChange} name='city'required/>
                          <div className="hire-Inputs-Error-MessageDIV">  {individualErrors.city && <div className="error-message-in-hire">{individualErrors.city}</div>}</div>
                            </div>
                            <div className='hireSection-about-formInputs-input'>
                            <input type="text" placeholder='Refferal code ' value={individualFormData.refferalCode} onChange={handleInputChange} name='refferalCode'required/>
                            </div>
                      </div>
                      <div className='hireSection-about-formSubmit'>
                          <div><input type="submit" value="Register" /></div>
                      </div>
                  </form>
                }
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
export default Register;
