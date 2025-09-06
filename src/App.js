import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CompanySection from './components/CompanySection';
import UniqueArchitecture from './components/UniqueArchitecture';
import ImageSlider from './components/ImageSlider';
import FirstRoom from './pages/houses';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <div className="wrapper">
                  <div className="wrapper-header">
                    <Header />
                  </div>
                  <Hero />
                </div>
                <Stats />
                <CompanySection />
                <div className="wrapper-unique-architecture">
                  <UniqueArchitecture />
                </div>
                <ImageSlider />
              </React.Fragment>
            }
          />
          <Route path="/FirstRoom" element={<FirstRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;