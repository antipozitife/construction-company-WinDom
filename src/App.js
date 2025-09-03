import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CompanySection from './components/CompanySection';
import UniqueArchitecture from './components/UniqueArchitecture';
import ImageSlider from './components/ImageSlider'

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="wrapper-header">
          <Header />
        </div>
        <Hero />
      </div>
      <Stats />
      <CompanySection />
      <div  className="wrapper-unique-architecture">
        <UniqueArchitecture />
      </div>
      <ImageSlider/>
    </React.Fragment>
  );
}

export default App;