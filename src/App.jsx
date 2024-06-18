import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import PartnerWithUs from './Pages/PartnerWithUs.jsx';
import Knowledge from './Pages/Knowledge';
import Careers from './Pages/Careers.jsx';
import Explore from './Pages/Explore';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import AboutSection from './Components/AboutSection';
import WhyChooseArea from './Components/container/WhyChooseUs';
import OurFeatureProduct from './Components/container/OurFeatureProduct';
import Testimonials from './Components/container/Testimonials';
import Header from './Components/container/Header';
import Footer from './Components/Footer/Footer';
import Gallary from './Pages/Gallary';
import Blog from './Components/KnowledgeHub/Blog.jsx';
import Nri from './Components/KnowledgeHub/Nri.jsx';
import EmiCalculator from './Components/KnowledgeHub/EmiCalculator.jsx';

const App = () => {
  const location = useLocation();
  
  return (
    <div>
      <Header />
      <Navbar />
      {location.pathname === '/' && (
        <>
          <Banner />
          <AboutSection />
          <WhyChooseArea />
          <OurFeatureProduct />
          <Testimonials />
        </>
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partnerwithus" element={<PartnerWithUs />} />
          <Route path="/gallery" element={<Gallary/>} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/knowledgehub" element={<Knowledge />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path='/blog' element ={<Blog/>}/>
          <Route path='/nri' element={<Nri/>}></Route>
          <Route path='/emi' element={<EmiCalculator/>}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
