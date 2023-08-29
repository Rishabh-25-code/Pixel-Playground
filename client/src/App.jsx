import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//added comment
import logo from './assets/cropped.svg';
import { Home, CreatePost } from './pages';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-gray-200 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <div className='border border-black'>
        <img src={logo} alt="logo" className="w-20 object-contain"/>
        </div>
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-gray-500 text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#262524] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;