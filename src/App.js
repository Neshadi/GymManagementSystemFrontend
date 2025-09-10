import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import About from './Components/about/about';
import ContactUs from './Components/contact/contact';
import DemoList from './Components/demo-list/demo-list';
import Footer from './Components/footer/footer';
import HomePage from './Components/home/home';
import Login from './Components/login/login';
import Navbar from './Components/nav-bar/nav-bar';
import PersonalTraining from './Components/personal-training/personal-training';
import PricingPlan from './Components/pricing-plan/pricing-plan';
import Services from './Components/services/services';
import SignUp from './Components/sign-up/sign-up';
import GymTimeTable from './Components/time-table/time-table';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/personal-training" element={<PersonalTraining />} />
          {/* <Route path="/demo-list" element={<DemoList />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/time-table" element={<GymTimeTable />} />
          <Route path="/pricing-plan" element={<PricingPlan />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Render the main components on the homepage route */}
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <DemoList />
                <About />
                <Services />
                <GymTimeTable />
                <PricingPlan />
                <ContactUs />
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
