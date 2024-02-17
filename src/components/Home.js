import React from "react";
import "../styles/Home.css"; // Import CSS for styling

const Home = () => {
  console.log("first"); // Logging statement
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to POAP Manager DApp</h1>
        <p>Your go-to platform for managing POAP tokens</p>
      </header>
      <main>
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            We are dedicated to simplifying the management of POAP tokens,
            making it easier for you to engage with the community and
            participate in events.
          </p>
        </section>
        <section className="features">
          <h2>Features</h2>
          <div className="feature">
            <div className="feature-content">
              <h3>Effortlessly manage your POAP tokens.</h3>
              <p>
                Keep track of your POAP tokens effortlessly with our intuitive
                management tools.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-content">
              <h3>Discover exciting upcoming events.</h3>
              <p>
                Stay updated on the latest events and discover new opportunities
                to earn POAP tokens.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-content">
              <h3>Connect with like-minded individuals.</h3>
              <p>
                Engage with a vibrant community of individuals who share your
                interests and passions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
