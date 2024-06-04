import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="review-cards">
          <div className="review-card">
            <p>"CleverBooks transformed our inventory management. Highly recommend!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="review-card">
            <p>"An essential tool for any business looking to optimize operations."</p>
            <h4>- Jane Smith</h4>
          </div>
          <div className="review-card">
            <p>"Incredible support and seamless integration. A game-changer for us."</p>
            <h4>- Emily Johnson</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
