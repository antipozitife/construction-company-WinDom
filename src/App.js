import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CompanySection from './components/CompanySection';
import SocialIcons from './components/SocialIcons';

const App = () => {
  return (
    <div className="wrapper">
      <div className="wrapper-header">
        <Header />
      </div>
      <Hero />
      <Stats />
      <CompanySection />
      <SocialIcons />
    </div>
  );
};

export default App;