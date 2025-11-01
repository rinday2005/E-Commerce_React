// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Thêm Link để điều hướng
import Vector5 from '../../assets/Vector (5).svg'; 

function Header() {
  return (
    <div className="pt-14 ml-28 flex justify-between items-center">
      <div className="Exclusive">
        <h1 className="text-2xl font-bold">Exclusive</h1>
      </div>
      <div className="navigation flex gap-12 mx-auto">
        <Link to="/" className="text-black hover:underline">Home</Link>
        <Link to="/contact" className="text-black hover:underline">Contact</Link>
        <Link to="/about" className="text-black hover:underline">About</Link>
        <Link to="/signin" className="text-black hover:underline">Sign Up</Link> {/* Thay đổi ở đây */}
      </div>
      <div className="search flex items-center bg-gray-200 px-4 py-2 rounded-md ml-auto mr-8">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-gray-200 outline-none mr-3"
        />
        <img src={Vector5} alt="" className="w-7 h-5" />
      </div>
    </div>
  );
}

export default Header;