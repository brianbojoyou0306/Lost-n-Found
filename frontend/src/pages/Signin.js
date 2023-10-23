import React from 'react'
import "./Signup.css"
function Signup() {
  return (
    <>
        <div className="signup-form">
    <form >
		<h2>Sign In</h2>
		<p className="hint-text">Login to continue.</p>

        <div className="form-group">
        	<input type="email" className="form-control"  placeholder="Email" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control"  placeholder="Password" required="required"/>
        </div>
		        
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div className="text-center">Don't have an account? <a href="/">Sign Up</a></div>
</div>
    </>
  )
}

export default Signup