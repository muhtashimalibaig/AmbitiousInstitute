import React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Layout from '../../Layout'
import AdmissionForm from '../AdmissionForm/AdmissionForm'

function Parent() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/addmissionForm' element={<AdmissionForm />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Parent
