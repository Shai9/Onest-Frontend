import React from 'react'
import { Routes, Route } from "react-router-dom";
import Hotels from './Hotels/Hotels';
import Hotel from './Hotel/Hotel';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Hotels/>}/>
        <Route path="/hotels/:slug" element={<Hotel/>}/>
      </Routes>
  )
}

export default App