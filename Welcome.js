import React from "react";
import { useNavigate } from 'react-router-dom';

function Welcome() {

   const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login'); // Navigate to /about page
  };

   const goToSignup = () => {
    navigate('/Signup'); // Navigate to /about page
  };

  return (
    <div>
      <div className=' container'>
        <div className='card' style={{ width: '25rem' }}>

        <form>
            <h3>Welcome to popx </h3>
         
                <p>learn isum dolor sit amit</p> 
                <p></p> <p></p> <p></p>
             
             

         

              <div className='row m-3 mx-1'>
                <div className='col-lg-12'>
                    <button type="submit" className="btn btn-primary" onClick={goToSignup}>create an Account</button>
                </div>
            </div>

              <div className='row mb-3 mx-1'>
                <div className='col-lg-12'>
                    <button type="submit" className="btn btn-secondary" onClick={handleClick}>Already Registered</button>
                    
                </div>
            </div>
            </form>
       

        </div>

      
    </div>
    </div>
  );
}

export default Welcome;