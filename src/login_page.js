import React, { useState } from "react";

const Login_page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add login logic here (API call, authentication, etc.)
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(to right,rgb(131, 119, 146),rgb(131, 119, 146));
        }

        .login-container {
          background: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          width: 380px;
          text-align: center;
        }

        .logo {
          width: 60px; /* Updated to make the logo smaller */
          margin-bottom: 15px;
        }

        .login-container h2 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
        }

        .form-group {
          text-align: left;
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #555;
          margin-bottom: 5px;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
          transition: 0.3s ease-in-out;
        }

        .form-group input:focus {
          border-color: #6a11cb;
          outline: none;
          box-shadow: 0 0 5px rgba(106, 17, 203, 0.3);
        }

        .login-btn {
          width: 100%;
          background: #6a11cb;
          color: #fff;
          padding: 12px;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .login-btn:hover {
          background: #2575fc;
        }

        .forgot-password {
          margin-top: 10px;
          font-size: 14px;
          color: #666;
        }

        .forgot-password a {
          color: #6a11cb;
          text-decoration: none;
          font-weight: bold;
        }

        .forgot-password a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="login-container">
        {/* Logo Image */}
        <img src="logo.png" alt="READIFY Logo" className="logo" />

        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <p className="forgot-password">
            Forgot Password? <a href="#">Click Here</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login_page;