import React from "react";

const Home = () => {
  return (
    <div>
      <header class="hero">
        <h1>Welcome to Project Management Tool</h1>
        <p>Effortlessly manage and track your projects with ease.</p>
        <a href="/projects" class="btn">
          Get Started
        </a>
      </header>
      <section class="features">
        <div class="feature-box">
          <h2>Easy Project Management</h2>
          <p>Quickly add, track, and delete projects as needed.</p>
        </div>
        <div class="feature-box">
          <h2>Collaborate Effectively</h2>
          <p>Work together with your team to stay on track.</p>
        </div>
        <div class="feature-box">
          <h2>Simple & Intuitive</h2>
          <p>User-friendly interface for smooth project handling.</p>
        </div>
      </section>
      <footer class="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Project Manager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
