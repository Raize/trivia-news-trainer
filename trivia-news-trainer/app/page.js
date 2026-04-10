'use client';

import { useState } from 'react';
import { categories } from '../data/stories';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Politics');
  const [openStories, setOpenStory] = useState({});

  const toggleStory = (index) => {
    setOpenStory(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="container">
      <header>
        <h1>📰 TRIVIA NEWS TRAINER</h1>
        <p>Top 5 stories per category • Last 2 weeks</p>
      </header>

      <div className="tabs">
        {Object.keys(categories).map(cat => (
          <button
            key={cat}
            className={activeTab === cat ? 'active' : ''}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="stories">
        {categories[activeTab].map((story, index) => (
          <div key={index} className="story-card">
            <div 
              className="story-header"
              onClick={() => toggleStory(index)}
            >
              <span className="story-title">
                <span className="story-number">{index + 1}.</span>
                {story.title}
              </span>
              <span className={`story-toggle ${openStories?.[index] ? 'open' : ''}`}>
                ▼
              </span>
            </div>
            <div className={`story-details ${openStories?.[index] ? 'open' : ''}`}>
              <p>{story.details}</p>
            </div>
          </div>
        ))}
      </div>

      <footer>
        <p>Data compiled from: POLITICO, NPR, BBC, Reuters, Bloomberg, CNBC, Axios</p>
      </footer>
    </div>
  );
}
