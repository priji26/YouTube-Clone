import {  } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Video from './Pages/Video'
import NotFound from './Pages/Not-Found'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='video' element={<Video /> } />
      <Route path='*' element={<NotFound /> } />
    </Routes>
  )
}

export default App
