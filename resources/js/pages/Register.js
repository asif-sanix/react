import React, { Component } from 'react';

export default class Register extends Component {

	  constructor(props) {
        super(props); 
        this.OnSubmit=this.OnSubmit.bind(this);  
    }

    OnSubmit(event) {
        // console.log(event)
        event.preventDefault();
    	var data = serializeForm(event.target);
    	axios.post('/user-register',data)
        .then(res=>{
            document.getElementById("successAfter").classList.add("alert-"+res.data.class);
            document.getElementById("successAfter").style.display = "block";
            document.getElementById("successMsg").innerHTML =res.data.message;
            document.getElementById("formData").reset();

        }) 
        .catch(error=>{
            console.log(error.response.data.errors)

         Object.keys(error.response.data.errors).map(function(a){  
                //console.log(error.response.data.errors[a]);
                 var element = document.querySelector("small." + a)
                console.log(element)


                // a[1].map(function(b){
                //     console.log(b)
                //     console.log(a[0])
                // })  


                 element.innerHTML = error.response.data.errors[a]
            })
          
        })
    }

    render() {
        return (
             <div className="card bg-light">
<article className="card-body mx-auto" style={{maxWidth: '400px'}}>

     <div id="successAfter" className="alert alert-dismissable" style={{display: 'none'}}>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <strong id="successMsg">
            
        </strong>
    </div>

	<h4 className="card-title mt-3 text-center">Create Account</h4>
	
<form id="formData" onSubmit={this.OnSubmit}>
	
	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
        <input name="name" className="form-control" placeholder="Full name" type="text" />
        <small className="text-danger name error"></small>
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


