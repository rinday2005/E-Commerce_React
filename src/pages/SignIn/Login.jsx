import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideImage from '../../assets/Side Image.svg';
import GoogleIcon from '../../assets/Icon-Google.svg';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Kiểm tra các trường không được để trống
    if (!name || !email || !password) {
      setError('All fields must be filled in!');
      return;
    }

    // Kiểm tra tính hợp lệ của email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Kiểm tra định dạng email
    if (!emailPattern.test(email) || !email.endsWith('.com')) {
      setError('Invalid email!');
      return;
    }

    // Kiểm tra mật khẩu
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Kiểm tra xem email đã tồn tại chưa
    const existingUser  = JSON.parse(localStorage.getItem('user'));
    if (existingUser  && existingUser .email === email) {
      setError('Account already exists!');
      return;
    }

    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Registration successful!');
    navigate('/login'); // Chuyển hướng đến trang đăng nhập
  };

  return (
    <div className="login flex mt-10">
      <div className="left">
        <div className="image">
          <img src={SideImage} alt="" />
        </div>
      </div>
      <div className="right absolute right-[270px] top-[300px]">
        <h1 className="text-5xl font-medium">Create an account</h1>
        <p className="text-2xl leading-[70px]">Enter your details below</p>
        {error && <p className="text-red-500">{error}</p>} {/* Hiển thị thông báo lỗi */}
        <div className="fill flex flex-col gap-12 mt-10">
          <div className="fill1 flex flex-col opacity-50">
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none border-b border-gray-500 bg-white"
            />
          </div>
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
            <button
              className="block w-[450px] bg-gray-300 text-white rounded-md text-2xl py-6 hover:bg-[#db4444] transition duration-300"
              onClick={handleRegister}
            >
              Create Account
            </button>
            <div className="mt-4">
              <button className="block w-[450px] bg-gray-300 text-white rounded-md text-2xl py-6 flex items-center justify-center hover:bg-[#db4444] transition duration-300">
                <img src={GoogleIcon} width="35px" className="inline-block mr-4" />
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
        <div className="forget mt-7 text-center">
          <p className="text-2xl">
            Already have an account?
            <Link to="/login" className="font-bold ml-2 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;