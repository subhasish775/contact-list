import React from 'react'
import './AddContact.css';

class AddContact extends React.Component {
    state = {
        name:"",
        email:"",
    };
     add = (e)=>{
        e.preventDefault();
        if(this.state.name=== "" || this.state.email === ""){
            alert("These fields are mandatory to fill")
            return;
        }
        
        this.props.addContactHandler(this.state);
        console.log(this.state);
        this.setState({name:"", email:""});
    }
    
    render(){
    return (
        <div className="addcontact">
        <div className= "heading">
            <h1>Add Contact</h1>
        </div>
        <div className="info">
        
            <form onSubmit={this.add}>
            <div className ="name-zone">
                <h4>Name</h4>
                <input 
                type="text" 
                placeholder="Name"
                value= {this.state.name} 
                onChange={(e) => this.setState({name:e.target.value})}/>
                </div>
                <div className="email-zone">
                    <h4>Email</h4>
                    <input 
                    type="text" 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e)=>this.setState({email:e.target.value})} />
                </div>
                <button className="btn">Add</button>
            </form>
        </div>
        
            
        </div>
    )
}
}

export default AddContact;
