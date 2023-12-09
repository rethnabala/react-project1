/* import React, {  useState,useEffect } from "react";

function LoginForm(){
    const[firstname,setFirstname]= useState("");
    const[email,setEmail]= useState("");
    const[password,setPassword]= useState("");
    const[passworderror,setPassworderror]= useState(false);
    const[firstnameerror,setFirstnameerror]= useState(false);
    const[emailerror,setEmailerror]= useState(false);
    
   

    const handleInput=(event)=>{
        let name = event.target.name;
        let value = event.target.value;

        if(name==firstname){
            setFirstname(value)
        }else{
            setFirstnameerror(false)
        }

        if(name==email){
            setEmail(value)
        }else{
            setFirstnameerror(false)
        }


        if(name==password){
            setPassword(value)
        }else{
            setPassworderror(false)
        }

    }

    const handleSubmit=()=>{
        console.log('---------');
        let firstName=firstname;
        if(!firstName){
            setFirstnameerror(true)
        }else{
            setFirstnameerror(false)
        }

        let Email=email;
        if(!Email){
            setEmailerror(true)
        }else{
            setEmailerror(false)
        }

        let Password=password;
        if(!Password){
            setPassworderror(true)
        }else{
            setPassworderror(false)
        }

        let formObject = {
            email:email,
            firstname:firstname,
            password:password,
        }
        console.log('----sdsd-----',formObject);
       
    }
   
    

    return(
        <>
        <div style={{textAlign:'center'}}>
            <label style={{marginRight:'10px'}}>Firstname</label>
        <input type="text" placeholder="enter your first name" value={{firstname}} onChange={handleInput}/>
       {firstnameerror ? <label style={{color:'red'}}>*Firstname is required</label> : ""}
        </div>
        <div style={{textAlign:'center'}}>
            <label style={{marginRight:'10px'}}>Email</label>
        <input type="email" placeholder="enter your email"value={{email}} onChange={handleInput}/>
        {emailerror ? <label style={{color:'red'}}>*email is required</label>: ""}
        </div>
        <div style={{textAlign:'center'}}>
            <label style={{marginRight:'10px'}}>Password</label>
        <input type="password" placeholder="enter your password"value={{password}} onChange={handleInput}/>
        { passworderror?  <label style={{color:'red'}}>*password is required</label> : ""}
        </div>
        <div style={{textAlign:'center'}}>
        <input type="button" value="submit" onClick={handleSubmit}/>
        </div>
        </>
    )
}
export default LoginForm; */

import React, { useState, useEffect } from 'react';

function LoginForm() {
  // Define state variables for form fields and validation
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setnameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform login logic here if the form is valid
    if (formValid) {
      // For example, you can make an API call here
      console.log('Form submitted:', { email, password ,name });
    } else {
      console.log('Form is not valid. Please check your input.');
    }
  };

  // Function to validate the form
  const validateForm = () => {
    let isValid = true;

    // Validate email

    if (!name) {
        setnameError('*Name is required');
        isValid = false;
      } else {
        setnameError('');
      }

    if (!email) {
      setEmailError('*Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!password) {
      setPasswordError('*Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    setFormValid(isValid);
  };

  // Use useEffect to validate the form whenever email or password changes
  useEffect(() => {
    validateForm();
  }, [email, password,name]);

  return (
    <div>
      <h2 style={{color:'blue'}}>Login Validation</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="error">{nameError}</span>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="error">{emailError}</span>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="error">{passwordError}</span>
        </div>
        <div>
          <button type="submit" >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
