import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Main from './Components/Main/Main';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import History from './Pages/History/History';
import Education from './Pages/Services/education/Education';
import Lemat from './Pages/Services/Lemat/Lemat'
import Prayer from './Pages/Services/prayer/Prayer'
import Kids from './Pages/Services/kids/Kids'
import Property from './Pages/Services/property/Property'
import Social from './Pages/Services/social/Social'
import Theater from './Pages/Services/theater/theater'
import HQ from './Pages/Services/HQ/HQ'
import Four04 from './Pages/Four04/Four04';
import Contact from './Pages/Contacts/Contact';
import ReadMore from './Pages/DailyPosts/ReadMore';

const Routing = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/History" element={<History />} />
        <Route path="/services/education" element={<Education />} />
        <Route path="/services/kids" element={<Kids />} />
        <Route path="/services/Lemat" element={<Lemat />} />
        <Route path="/services/prayer" element={<Prayer />} />
        <Route path="/services/property" element={<Property />} />
        <Route path="/services/social" element={<Social />} />
        <Route path="/services/theater" element={<Theater />} />
        <Route path="/services/HQ" element={<HQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/read-more/:id" element={<ReadMore />} />
        <Route path="*" element={<Four04 />} />
        </Routes>
    </Router>
  )
}

export default Routing