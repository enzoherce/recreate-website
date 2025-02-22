import { useState } from "react";
import "../styles/LoginForm.css";

const LoginSignupForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(isSignup ? "Signing up..." : "Logging in...", formData);
  };

  return (
    <div className="login-signup-container">
      <h2>{isSignup ? "Create an Account" : "Sign In"}</h2>
      <form onSubmit={handleSubmit} className="login-signup-form">
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        {isSignup && (
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        )}
        <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
      </form>
      <p className="toggle-text">
        {isSignup ? "Already have an account?" : "Don't have an account?"}
        <button className="toggle-button" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default LoginSignupForm;
