import React from 'react';

function TopBar() {
  return (
    <div className="bg-black fixed top-0 w-full h-12 flex justify-center items-center">
      <span className="text-white text-sm"> {/* Thay đổi từ <p> thành <span> */}
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50% !
        <a href="./homepage.html" className="font-bold ml-2 hover:underline">
          Shop Now
        </a>
        <select
          name="Language"
          id="Language"
          className="bg-black text-white ml-10 focus:outline-none"
        >
          <option value="English">English</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Japanese">Japanese</option>
        </select>
        <div className="ml-auto flex items-center">
          <button id="switch-mode" className="ml-4 text-2xl text-gray-300">
            <i className="bi bi-moon-stars-fill"></i>
          </button>
        </div>
      </span>
    </div>
  );
}

export default TopBar;