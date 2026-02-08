import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import HomePage from '../pages/HomePage'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            </Route>
           
        </Routes>
      
    </div>
  )
}

export default Router
