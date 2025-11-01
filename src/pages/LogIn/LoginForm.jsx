import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideImage from '../../assets/Side Image.svg';

//Khai báo state để lưu trữ thông tin đăng nhập
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Thêm state để lưu thông báo lỗi
  const navigate = useNavigate(); // Sử dụng useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra các trường không được để trống
    if (!email || !password) {
      setError('Email and password cannot be blank!');
      return;
    }

    // Lấy thông tin người dùng từ localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      // Nếu thông tin hợp lệ, chuyển hướng đến Home
      navigate('/home');
    } else {
      // Hiển thị thông báo lỗi
      setError('Incorrect account or password!');
    }
  };

  return (
    <div className="login flex mt-10">
      <div className="left">
        <div className="image">
          <img src={SideImage} alt="" />
        </div>
      </div>
      <div className="right absolute right-[270px] top-[300px]">
        <h1 className="text-5xl font-medium">Log in to Exclusive</h1>
        <p className="text-2xl leading-[70px]">Enter your details below</p>
        {error && <p className="text-red-500">{error}</p>} {/* Hiển thị thông báo lỗi */}
        <div className="fill flex flex-col gap-12 mt-10">
          <div className="fill2 flex flex-col opacity-50">
            <input
              id="email"
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border-b border-gray-500 bg-white"
            />
          </div>
          <div className="fill3 flex flex-col opacity-50">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-b border-gray-500 bg-white"
            />
          </div>
        </div>
        <div className="choose mt-10 flex flex-col items-center">
          <div className="flex flex-col w-full items-center">
            <div className="button-group mt-7 flex justify-between w-full">
              <Link to="/forget-password" className="flex-1">
                <button className="bg-gray-300 text-white rounded-md py-6 px-4 hover:bg-[#db4444] transition duration-300 w-full">Forget Password?</button>
              </Link>
              <button
                className="flex-1 ml-2 bg-gray-300 text-white rounded-md py-6 px-4 hover:bg-[#db4444] transition duration-300 w-full"
                onClick={handleSubmit} // Gọi hàm handleSubmit khi nhấn nút
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;