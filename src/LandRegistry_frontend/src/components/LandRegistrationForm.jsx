import React, { useState } from "react";
import "./LandRegistrationForm.css";

function LandRegistrationForm({ onRegister }) {
  const [formData, setFormData] = useState({
    registrationId: "",
    ownerName: "",
    location: "",
    area: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
    setFormData({ registrationId: "", ownerName: "", location: "", area: "" });
  };

  return (
    <form className="land-registration-form" onSubmit={handleSubmit}>
      <h2>Register Land</h2>
      <input
        type="text"
        name="registrationId"
        placeholder="Registration ID"
        value={formData.registrationId}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="ownerName"
        placeholder="Owner Name"
        value={formData.ownerName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="area"
        placeholder="Area (sq. ft.)"
        value={formData.area}
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default LandRegistrationForm;
