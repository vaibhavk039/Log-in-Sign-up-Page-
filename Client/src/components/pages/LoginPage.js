import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.jpg'

class LoginPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {user:{username: '',
      
      password:''}
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const user = this.state.user;
        user.username = event.target.value;
        user.password = event.target.value;
        
      
      
    }
  
    handleSubmit(event) {
      
      console.log(this.state.user);
      

      fetch("http://localhost:8000/api/login/",
        {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content_type": "application/json"
          },
          body: JSON.stringify(this.state.user),
        })
        .then(response => response.json())
    }
    render(){
    return (
        <header style={ HeaderStyle }>
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username"
                     value={this.state.username}  
                     onChange={this.handleChange}
                     required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" 
                    value={this.state.password}  
                    onChange={this.handleChange}
                    required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </header>
    )
    }
};
    const HeaderStyle = {
    width: "100%",
    height: "88vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default LoginPage