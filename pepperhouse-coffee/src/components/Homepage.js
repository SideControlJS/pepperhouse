import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <img src="/path/to/coffee-beans.jpg" alt="Coffee Beans" />
        <div className="hero-text">
          <h1>Freshly roasted coffee right to your doorstep.</h1>
          <Link to="/products" className="cta-button">Order Now</Link>
        </div>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We are on a mission to support family coffee farms around the world. The coffee we roast
          is grown in a way that conserves nature and provides better livelihoods for the people
          who grow and produce it.
        </p>
        <p>
          All coffee beans we provide have been grown on high elevation under shade trees and
          picked by hand. Farms we partner with have returned to traditional farming methods which
          aids in reducing the massive pollution and deforestation that corporate farms have introduced.
        </p>
        <p>
          We provide you the opportunity to enjoy a cup of coffee while simultaneously helping the
          planet and the people in it.
        </p>
      </section>

      <section className="featured-items">
        <h2>Featured Items</h2>
        <div className="product-display">
          <img src="/path/to/featured-products.jpg" alt="Featured Products" />
        </div>
      </section>

      <footer className="newsletter">
        <h2>Join the Cool Cats Club!</h2>
        <p>
          Get the latest discount codes and become a coffee expert with our (totally pawsome) articles.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Email" />
          <button type="submit">Sign Up</button>
        </form>
      </footer>
    </div>
  );
};

export default HomePage;
