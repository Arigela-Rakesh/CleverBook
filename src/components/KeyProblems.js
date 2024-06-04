import React from 'react';
import './KeyProblems.css';

const KeyProblems = () => {
  return (
    <section className="problems-section">
      <div className="container">
        <h2 className="section-title">Key Problems Solved</h2>
        <div className="problem-cards">
          <div className="problem-card">
            <h3>Overstocking</h3>
            <p>Reduce excess inventory and save costs with our optimized solutions.</p>
          </div>
          <div className="problem-card">
            <h3>Stockouts</h3>
            <p>Never run out of stock again with our smart forecasting tools.</p>
          </div>
          <div className="problem-card">
            <h3>Manual Errors</h3>
            <p>Automate your inventory process to eliminate human errors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyProblems;
