import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons';
import './KeyMetrics.css';

const KeyMetrics = () => {
  return (
    <section className="metrics-section">
      <div className="container">
        <h2 className="section-title">Why Choose CleverBooks?</h2>
        <div className="metrics-cards">
          <div className="metrics-card">
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            <h3>Efficiency</h3>
            <p>Boost your operational efficiency by up to 40%.</p>
          </div>
          <div className="metrics-card">
            <FontAwesomeIcon icon={faDollarSign} className="icon" />
            <h3>Cost Saving</h3>
            <p>Save on storage and inventory costs significantly.</p>
          </div>
          <div className="metrics-card">
            <FontAwesomeIcon icon={faClock} className="icon" />
            <h3>Time Management</h3>
            <p>Automate processes to save valuable time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
