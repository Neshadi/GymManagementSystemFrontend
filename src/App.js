import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Components/home';
import Navbar from './Components/nav-bar';
// import BookDemo from './Components/demo';
import DemoList from './Components/demo-list';
import About from './Components/about';
import Services from './Components/services';
import GymTimeTable from './Components/time-table';
import PricingPlan from './Components/pricing-plan';
import ContactUs from './Components/contact';
import Footer from './Components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HomePage />
        {/* <br /><br/> */}
        <DemoList />
        <About />
        <Services />
        <GymTimeTable />
        <PricingPlan />
        <ContactUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './Components/home';
// import Navbar from './Components/nav-bar';
// // import BookDemo from './Components/demo';
// import DemoList from './Components/demo-list';
// import About from './Components/about';
// import Services from './Components/services';
// import GymTimeTable from './Components/time-table';
// import PricingPlan from './Components/pricing-plan';
// import ContactUs from './Components/contact';
// import Footer from './Components/footer';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/demo-list" element={<DemoList />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/time-table" element={<GymTimeTable />} />
//           <Route path="/pricing-plan" element={<PricingPlan />} />
//           <Route path="/contact" element={<ContactUs />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
