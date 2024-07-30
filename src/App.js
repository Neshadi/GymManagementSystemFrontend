import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './Components/about';
import ContactUs from './Components/contact';
import DemoList from './Components/demo-list';
import Footer from './Components/footer';
import HomePage from './Components/home';
import Navbar from './Components/nav-bar';
import PersonalTraining from './Components/personal-training';
import PricingPlan from './Components/pricing-plan';
import Services from './Components/services';
import GymTimeTable from './Components/time-table';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          
          <Route path="/personal-training" element={<PersonalTraining />} />
          {/* <Route path="/demo-list" element={<DemoList/>} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/time-table" element={<GymTimeTable/>} />
          <Route path="/pricing-plan" element={<PricingPlan/>} />
          
          {/* Render the main components on the homepage route */}
          <Route path="/" element={
            <>
              <HomePage />
              <DemoList />
            </>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
