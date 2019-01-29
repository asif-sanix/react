import React, { Component } from 'react';

export default class About extends Component {

	  constructor(props) {
        super(props);   
    }

    OnSubmit(event) {
    	var data = serializeForm(event.target);
          console.log(data)
    	axios.post('/register',data)
        .then(res=>{
        	console.log(res)
            this.myFormRef.reset();
        }) 
        .catch(error=>{
            handleErrors(error);
            // this.setState({'processing':false});    
        })
    }

    render() {
        return (
             <div className="card bg-light">
<article className="card-body mx-auto" style={{maxWidth: '400px'}}>
	<h4 className="card-title mt-3 text-center">Create Account</h4>
	
<form ref={(el) => this.myFormRef = el} onSubmit={this.OnSubmit.bind(this)} action="javascript::void(0)">
	
	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
        <input name="name" className="form-control" placeholder="Full name" type="text" />
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input name="email" className="form-control" placeholder="Email address" type="email" />
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
		</div>
		<select name="country_code" className="custom-select" style={{maxWidth:'120px'}}>
		    <option value="+971">+971</option>
		    <option value="+972">+972</option>
		    <option value="+198">+198</option>
		    <option value="+701">+701</option>
		</select>
    	<input name="phone" className="form-control" placeholder="Phone number" type="text" />
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-building"></i> </span>
		</div>
		<select name="job_type" className="form-control">
			<option > Select job type</option>
			<option value="Designer">Designer</option>
			<option value="Manager">Manager</option>
			<option value="Accaunting">Accaunting</option>
		</select>
	</div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" name="password" placeholder="Create password" type="password" />
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" name="confirm_password" placeholder="Repeat password" type="password" />
    </div> 
    <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
    </div> 
    <p className="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
</form>
</article>
</div>
        );
    }
}


