import React, { useState } from "react";
import "./Contact.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const query = new URLSearchParams({
        ...formData,
        mode: "contact", // 🚀 IMPORTANT
      }).toString();

      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbyalPgQgIIWzy2oS4DRAbfwB-r5GOG-e2CAz7H9s-8AUSyc8NHgF8KzkfkfEsSvPgqWkA/exec?${query}`
      );

      const result = await response.json();

      if (result.status === "success") {
        alert("Thank you for your message! We will get back to you shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong.");
        console.error(result.message);
      }
    } catch (error) {
      alert("Error sending message.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section">
      <h1 className="contact-title">CONTACT</h1>
      <hr className="contact-divider" />

      <div className="contact-form-container">
        <div className="contact-info-text">
          <h3 className="contact-form-heading">CONTACT FORM</h3>
          <p>
            Feel free to reach out for any inquiries, project requests, or just
            to say hello.
          </p>
          <p>
            Please provide as much detail as possible for an accurate response.
          </p>
          <p className="response-time">I aim to respond within 24–48 hours.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your phone (optional)"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SENDING..." : "SEND"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
