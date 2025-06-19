import React from 'react';

function Login() {
  return (
   
  <div className=' container'>
        <div className='card' style={{ width: '25rem' }}>

        <form>
            <h3>Sign In your popx Account</h3>
         
                 <div className='row'>
                 <div className='col-lg-6'>
                    <label  class="form-label"> Email Address:</label>
                    <input type="email" class="form-control"  placeholder="Email" name="email"/>
                </div>
                </div>
               
                 <div className='row'>
                 <div className='col-lg-6'>
                    <label  class="form-label">Password:</label>
                    <input type="Password" class="form-control"  placeholder="Password" name="name"/>
                </div>
                </div>
             
             

         

              <div className='row  mt-3 mb-3 mx-1'>
                <div className='col-lg-12'>
                    <button type="submit" className="btn btn-secondary">LogIn</button>
                </div>
            </div>
            
        </form>    

        </div>

      
    </div>




  );
}

export default Login;