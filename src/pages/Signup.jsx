import React from 'react';
import './Signup.css'
import axios from 'axios';

const handleSignup = async (name, email, password) => {
  try {
    const response = await axios.post('https://coffee-love-server.onrender.com/signup', { name, email, password });
    console.log(response.data); // This would likely be "User created"
    // Display success message to the user
  } catch (error) {
    console.error(error);
    // Handle signup errors and display them to the user
  }
};

const Signup = () => {

  // const [action,setAction] = useState("Sign Up");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="Name"/>
          </div>
          <div className="input">
            <input type="email" placeholder="Email"/>
      </div>
      <div className="input">
            <input type="password" placeholder="Password"/>
            <div />
            </div>
            <div className="forgot-password">Forgot Password? <span>Click Here!</span>
            </div>
            <div className="submit-container"></div>
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
            </div>
            </div>
  );
}

export default Signup;