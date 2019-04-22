import React from 'react';

class BadgeForm extends React.Component {

    state = {}; 

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    
    handleSubmit= (e)=>{
      e.preventDefault();
      console.log(this.state)
    }
    
        
    handleClick= (e)=>{
        console.log('CLICK')
    }

    render(){
        return(
            <div className="">
                <h1>New Attendant</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input 
                            onChange={this.handleChange} 
                            type="text" 
                            name="firstName" 
                            className="form-control"
                            value={this.state.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input 
                            onChange={this.handleChange} 
                            type="text" 
                            name="lastName" 
                            className="form-control"
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">email</label>
                        <input 
                            onChange={this.handleChange} 
                            type="email" 
                            name="email" 
                            className="form-control"
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">job Title</label>
                        <input 
                            onChange={this.handleChange} 
                            type="text" 
                            name="jobTitle" 
                            className="form-control"
                            value={this.state.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input 
                            onChange={this.handleChange} 
                            type="text" 
                            name="twitter" 
                            className="form-control"
                            value={this.state.twitter}
                        />
                    </div>

                    
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;
