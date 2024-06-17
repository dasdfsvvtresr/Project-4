import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-300 text-blue-700 p-4"> 
        <h1 className="text-xl font-bold">해외투자 입문</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">홈</Link></li>
            <li><Link to="/category/1">기초 개념</Link></li>
            <li><Link to="/category/2">시장 분석</Link></li>
            <li><Link to="/category/3">투자 전략</Link></li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
