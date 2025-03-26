import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div>
      <div className='login-form-container'>
            <div className='login-form-card'>
                <h1>Sign Up</h1><hr/>
                <form className='login-form'>
                    <label>Username:</label>
                    <input type='text' placeholder='username' className='username' />
                    <label className='pw'>Password: </label>
                    <input type='password' placeholder='password' className='password' />
                    <div className='checkbox-container'>
                        <input type='checkbox' />
                        <label>Remember me</label>
                        <a href='#'>Forgot your password?</a>
                    </div>
                    <button className='login-btn'>Log In</button>
                    <div className='signup-container'>
                        <label>Don't have an account?</label>
                        {/* <a href=''>Sign Up</a> */}
                        
                    </div>

                </form>
            </div>
    </div>
    </div>
  )
}

export default Signup

