import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: "",
    gender: ""
  }

  submitForm = (event)=> {
    event.target.value
  };

  handleChange = (event)=> {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          placeholder="Your name"
          value={this.state.name}
          />
        <label htmlFor="gender">Gender</label>
        <select name="gender" >
          <option value="male">Male</option>
          <option value="female">Female</option> 
        </select>
        <label htmlFor="desc">Description</label>
        <textarea cols="29" rows="5" name= "desc" 
        placeholder="Description about yourself"></textarea>
        <div>
          <input type="checkbox" name="confirmed" value=""/>
          <label htmlFor="confirmed" id="label">I have read terms of conducts</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyProfile;


