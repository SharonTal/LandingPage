import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      alert("Your email has been submitted successfully! One of our team members will reach back to you soon.");
      setEmail(""); // Optionally clear the input after submission
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="Enter Your Mail Here"
          value={email}
          onChange={handleChange}
        />
        <button className="secondary-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
