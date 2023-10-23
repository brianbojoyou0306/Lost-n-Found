import React from 'react'
import "./Signup.css"
function Signup() {
  return (
    <>
        <div className="signup-form">
    <form >
		<h2>Register</h2>
		<p className="hint-text">Create your account.</p>
        <div className="form-group">
			<div className="row">
				<div className="col"><input type="text" className="form-control" placeholder="First Name" required="required"/></div>
				<div className="col"><input type="text" className="form-control"  placeholder="Last Name" required="required"/></div>
			</div>        	
        </div>
        <div className="form-group">
        	<input type="number" className="form-control"  placeholder="Mobile No" required="required"/>
        </div>
        <div className="form-group">
        	<input type="email" className="form-control"  placeholder="Email" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control"  placeholder="Password" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Password" required="required"/>
        </div>        
        <div className="form-group">
			<label className="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a></label>
		</div>
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div className="text-center">Already have an account? <a href="/">Sign in</a></div>
</div>
    </>
  )
}

export default Signup