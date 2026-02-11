import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import HomePage from '../pages/HomePage'
import CreateRoomPage from '../pages/CreateRoomPage'
import ChatPage from '../pages/ChatPage'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/in" element={<CreateRoomPage />} />
            <Route path="/in/chat" element={<ChatPage />} />
            </Route>
           
        </Routes>
      
    </div>
  )
}

export default Router
