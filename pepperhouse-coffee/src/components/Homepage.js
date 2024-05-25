import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <div className="home-page">
            <header className="hero">
                <img src="/path/to/coffee-image.jpg" alt="Coffee Beans" />
                <div className="hero-text">
                    <h1>Freshly roasted coffee right to your doorstep.</h1>
                    <Link to="/products" className="cta-button">Order Now</Link>
                </div>
            </header>

            <section className="mission">
                <h2>Our mission</h2>
                <p>
                    We are on a mission to support family coffee farms around the world. The coffee we roast is grown
                    in a way that convserves nature and provides better livelihoods for the people who grow and produce it.
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
                <h2>Featured items</h2>
                <div className="product-display">
                    <img src="/path/to/coffee-image.jpg" alt="Featured Items" />
                </div>
            </section>
       
    )