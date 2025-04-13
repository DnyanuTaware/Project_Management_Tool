import React, { useState } from "react";
import { useData } from "../contexts/Context";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { saveContactDetails } = useData();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    //call  save contact
    saveContactDetails(name, email, message, navigate);
  };
  return (
    <div>
      <section class="contact-section">
        <div class="container">
          <div class="contact-box">
            <h2 class="text-center">Get in Touch</h2>
            <p class="text-center">
              Have any questions or feedback? Fill out the form below, and we'll
              get back to you soon.
            </p>
            <form id="contactForm" onSubmit={submitHandler} method="post">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="form-control"
                  id="name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control"
                  id="email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Your Message
                </label>
                <textarea
                  class="form-control"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn">
                Send Message
              </button>
            </form>
            <p id="responseMessage" class="mt-3 text-center"></p>
          </div>
        </div>
      </section>

      <section class="contact-info text-center">
        <div class="container">
          <h3>Our Contact Details</h3>
          <p>Email: abc@projectmanager.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Project Street, Tech City, IND</p>
        </div>
      </section>

      <footer class="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Project Manager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
