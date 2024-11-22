import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import CoursesDetails from './Components/Courses/CoursesDetails.jsx';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Services from './Components/Services/Services';
import Blog from './Components/Blogs/Blog';
import Contact from './Components/Contact/Contact';
import Faq from './Components/Faq/Faq';
import AdmissionForm from './Components/AdmissionForm/AdmissionForm';
import Layout from './Layout.jsx';
import Form from './Components/Form/Form.jsx';
import './App.css';
function App() {
  return (
    <>
    <Routes>
      {/* This route will show the layout along with its children (like Home, About, etc.) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="Services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
      <Route path="admissionForm" element={<AdmissionForm />} />
      <Route path='/form' element={<Form />} />
            <Route path='/' element={<Courses/>}></Route>
            <Route path="/course-details/:courseId" element={<CoursesDetails />} /> {/* Dynamic Route */}
      </Route>
    </Routes>
  <div id='Home'></div>
    </>

  );
}

export default App;
