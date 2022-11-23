import React, { useState } from 'react';
import './Form.css';


import img from '../Gallery/images/img1.jpg'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        <div className='form-content-left'>
          <img className='form-img' src="https://i.pinimg.com/564x/7c/62/ba/7c62badb1cfc05797db85967dff29ae3.jpg" alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess/>
            
        
        )}
        
      </div>
    </>
  );
};

export default Form;