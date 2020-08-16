import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: undefined,
    gender: 'male',
    desc: undefined,
    checked: undefined
  }


  handleNameChange = (event)=> {
    this.setState({
      name: event.target.value,
    });
  }

  handleDescChange = (event)=> {
    this.setState({
      desc: event.target.value,
    });
  }

  handleGenderChange = (event)=> {
    this.setState({
      gender: event.target.value,
    });
  }

  handleCheckChange = (event)=> {
    this.setState({
      checked: event.target.checked,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.name === undefined) {
      alert("Name is undefined")
      return;
    }
    if(this.state.desc === undefined) {
      alert("Description is undefined")
      return;
    }
    if(this.state.checked === undefined) {
      alert("You have to read terms of conduct first")
      return;
    }
    alert("Success, check the console log.")
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          placeholder="Your name"
          value={this.state.name}
          onChange={this.handleNameChange}
          />
        <label htmlFor="gender">Gender</label>
        <select name="gender" value={this.state.gender} onChange={this.handleGenderChange}>
          <option value="male">Male</option>
          <option value="female">Female</option> 
        </select>
        <label htmlFor="desc">Description</label>
        <textarea cols="29" rows="5" name= "desc" 
        placeholder="Description about yourself"  value={this.state.desc} onChange={this.handleDescChange}></textarea>
        <div>
          <input type="checkbox" name="confirmed" value={this.state.checked} onChange={this.handleCheckChange}/>
          <label htmlFor="confirmed" id="label">I have read terms of conducts</label>
        </div>
        <button type="submit" >Submit</button>
      </form>
    );
  }
}

export default MyProfile;


