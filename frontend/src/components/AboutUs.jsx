import React from "react";

const AboutUs = () => {
  return (
    <>
      <section class="about-section text-center">
        <div class="container">
          <h2>Welcome to Project Manager</h2>
          <p class="lead mt-3">
            Our platform helps teams streamline workflows, collaborate
            efficiently, and track project progress seamlessly. Whether you're
            managing small tasks or large projects, we provide the tools to help
            you stay on track.
          </p>
        </div>
      </section>

      <section class="container text-center my-5">
        <div class="row">
          <div class="col-md-6">
            <h3>Our Mission</h3>
            <p>
              Empower teams to manage projects effectively with intuitive tools,
              automation, and real-time collaboration.
            </p>
          </div>
          <div class="col-md-6">
            <h3>Our Vision</h3>
            <p>
              To revolutionize project management by offering a seamless,
              user-friendly, and smart platform that enhances productivity.
            </p>
          </div>
        </div>
      </section>

      <section class="team-section text-center bg-light">
        <div class="container">
          <h2>Meet Our Team</h2>
          <div class="row mt-4">
            <div class="col-md-4">
              <img src="blank_photo.jpg" alt="Team Member" class="team-img" />
              <h5 class="mt-2">@ABC</h5>
              <p>Founder & CEO</p>
            </div>
            <div class="col-md-4">
              <img src="blank_photo.jpg" alt="Team Member" class="team-img" />
              <h5 class="mt-2">@PQR</h5>
              <p>Product Manager</p>
            </div>
            <div class="col-md-4">
              <img src="blank_photo.jpg" alt="Team Member" class="team-img" />
              <h5 class="mt-2">@XYZ</h5>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Project Manager. All rights reserved.</p>
      </footer>
    </>
  );
};

export default AboutUs;
