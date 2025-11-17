import React, { useState } from "react";
import "./Regsister.css";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  address: "",
  gender: "",
  socialMediaLink: "",
  modelingExperience: "None",
};

const Resister = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [calculatedAge, setCalculatedAge] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const age = calculateAge(formData.dateOfBirth);
    setCalculatedAge(age);

    const finalData = { ...formData, age };

    try {
      const query = new URLSearchParams({
        ...finalData,
        mode: "register",
      }).toString();

      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbyalPgQgIIWzy2oS4DRAbfwB-r5GOG-e2CAz7H9s-8AUSyc8NHgF8KzkfkfEsSvPgqWkA/exec?${query}`
      );

      const result = await response.json();

      if (result.status === "success") {
        alert("Registration submitted successfully!");
        setFormData(initialFormData);
      } else {
        alert("Something went wrong.");
        console.log(result);
      }
    } catch (error) {
      alert("Error submitting registration.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    border: "1px solid #ddd",
    borderRadius: "3px",
  };

  return (
    <div>
      <h1 className="reg-title">REGISTRATION</h1>

      <div className="contact-form-container">
        <div className="contact-info-text">
          <h3 className="contact-form-heading">MODEL REGISTRATION</h3>
          <p>
            Please fill in the details honestly. Age will be auto-calculated.
          </p>
          {calculatedAge !== null && (
            <p className="response-time">
              <b>Age Verified:</b> {calculatedAge}
            </p>
          )}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="" disabled>
              Select Gender *
            </option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>

          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />

          <input
            type="url"
            name="socialMediaLink"
            placeholder="Instagram / Portfolio"
            value={formData.socialMediaLink}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Current Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <select
            name="modelingExperience"
            value={formData.modelingExperience}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="None">Experience: None</option>
            <option value="Beginner">Experience: Beginner</option>
            <option value="Professional">Experience: Professional</option>
          </select>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resister;
