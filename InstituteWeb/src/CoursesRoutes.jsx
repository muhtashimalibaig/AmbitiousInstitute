import React from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Courses from './Components/Courses/Courses'
function CoursesRoutes() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Courses/>}></Route>
            <Route path="/course-details/:courseId" element={<CoursesDetails />} /> {/* Dynamic Route */}
        </Routes>
      </Router>
    </>
  )
}

export default CoursesRoutes
