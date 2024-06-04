import React, { useState } from 'react';
import './Features.css';

const Features = () => {
  const [activeTab, setActiveTab] = useState('feature1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <div className="tabs">
          <button className={`tab-button ${activeTab === 'feature1' ? 'active' : ''}`} onClick={() => handleTabClick('feature1')}>Feature 1</button>
          <button className={`tab-button ${activeTab === 'feature2' ? 'active' : ''}`} onClick={() => handleTabClick('feature2')}>Feature 2</button>
          <button className={`tab-button ${activeTab === 'feature3' ? 'active' : ''}`} onClick={() => handleTabClick('feature3')}>Feature 3</button>
        </div>
        <div className={`tab-content ${activeTab === 'feature1' ? 'active' : ''}`}>
          <h3>Feature 1</h3>
          <p>Detail about feature 1...</p>
        </div>
        <div className={`tab-content ${activeTab === 'feature2' ? 'active' : ''}`}>
          <h3>Feature 2</h3>
          <p>Detail about feature 2...</p>
        </div>
        <div className={`tab-content ${activeTab === 'feature3' ? 'active' : ''}`}>
          <h3>Feature 3</h3>
          <p>Detail about feature 3...</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
