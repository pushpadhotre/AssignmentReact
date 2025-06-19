import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {

 const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login'); // Navigate to /about page
  };



  return (
    <div className=' container'>
        <div className='card' style={{ width: '25rem' }}>

        <form>
            <h3>welcome to popx</h3>
            <div className='row'>
                <div className='col-lg-6'>
                    <label  class="form-label">Full Name:</label>
                    <input type="text" class="form-control"  placeholder="Full name" name="name"/>
                </div>
                </div>
                 <div className='row'>
                 <div className='col-lg-6'>
                    <label  class="form-label">Phone Number:</label>
                    <input type="text" class="form-control"  placeholder="Phone Number" name="name"/>
                </div>
                </div>
                 <div className='row'>
                 <div className='col-lg-6'>
                    <label  class="form-label">Email:</label>
                    <input type="email" class="form-control"  placeholder="Email" name="name"/>
                </div>
                </div>
                 <div className='row'>
                 <div className='col-lg-6'>
                    <label  class="form-label">Password:</label>
                    <input type="Password" class="form-control"  placeholder="Password" name="name"/>
                </div>
                </div>
                 <div className='row'>
                 <div className='col-lg-6'>
                    <label  class="form-label">Compny Name:</label>
                    <input type="text" class="form-control"  placeholder="Company" name="name"/>
                </div>
                </div>
                <div className='row'>
                <div className='col-lg-6'>
                    <label>Are you an Agency</label><br/>
                   <label class="radio-inline">
                    <input type="radio" name="yes"/>yes
                    </label>
                    <label class="radio-inline">
                    <input type="radio" name="No"/>No
                    </label>



                </div>
            </div>

            <div className='row m-3 mx-1'>
                <div className='col-lg-12'>
                    <button type="submit" className="btn btn-primary">create an Account</button>
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
  );
}

export default Signup;