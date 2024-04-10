// import React, { useState } from 'react';
// import './Signup.css'

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     // Here you would typically implement signup logic, like sending a request to a server
//     // For demonstration purposes, let's just log the username, email, and password
//     console.log('Username:', username);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Reset fields
//     setUsername('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//     // Clear any previous errors
//     setError('');
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React from 'react';
import './Signup.css'

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

export default Signup

// import React from 'react';
// import './Signup.css'; // Import the CSS file for styling

// const Signup = () => {
//   // State to manage active button (optional, for visual distinction)
//   const [activeButton, setActiveButton] = useState('Signup');

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//     // Perform additional actions based on button clicked (e.g., toggle forms)
//   };

//   return (
//     <div className='container'>
//       <div className="header">
//         <div className="text">{activeButton}</div> {/* Dynamically display button text */}
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         <div className="input">
//           <input type="text" placeholder="Name" />
//         </div>
//         <div className="input">
//           <input type="email" placeholder="Email" />
//         </div>
//         <div className="input">
//           <input type="password" placeholder="Password" />
//         </div>
//         <div className="forgot-password">
//           Forgot Password? <span>Click Here!</span>
//         </div>
//         <div className="submit-container">
//           <button
//             className={`submit ${activeButton === 'Signup' ? 'active' : ''}`} // Add active class on click
//             onClick={() => handleButtonClick('Signup')}
//           >
//             Sign Up
//           </button>
//           <button
//             className={`submit ${activeButton === 'Login' ? 'active' : ''}`} // Add active class on click
//             onClick={() => handleButtonClick('Login')}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



