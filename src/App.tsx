import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Character from './Pages/Character'
import Home from './Pages/Home'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Character />} />
      </Route>
    </Routes>
  )
}
export default App
