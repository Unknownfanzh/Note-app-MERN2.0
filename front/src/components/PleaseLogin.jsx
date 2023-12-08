
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PleaseLogin() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className='homepage-div'>
      <p>Please log in first.</p>
      <button type='button' className='btn btn-link' role='button' onClick={handleGoHome}>Go to Home Page</button>
    </div>
  );
}
