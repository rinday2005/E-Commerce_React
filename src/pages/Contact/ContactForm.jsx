import React, { useState } from 'react';
import emailjs from 'emailjs-com';


//ktra bên Emailjs.com
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [supportRequest, setSupportRequest] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra các trường không được để trống
    if (!name || !email || !phone || !supportRequest) {
      setError('All fields must be filled in!');
      return;
    }

    const templateParams = {
      name,
      email,
      phone,
      supportRequest,
    };

    console.log('Template Params:', templateParams); // Kiểm tra thông tin gửi đi

    emailjs.send('service_5bcpm96', 'template_wdelh9s', templateParams, 'B4-XH1oGjk1D4iAEl')
      .then((response) => {
        alert('Support request sent successfully!');
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setSupportRequest('');
        setError('');
      }, (error) => {
        console.error('Error sending email:', error); // In lỗi ra console
        setError('An error occurred while submitting your support request.');
      });
  };

  return (
    <div className="send p-4 rounded-lg shadow-lg mt-12 w-1/2 ml-0"> 
      <form onSubmit={handleSubmit}>
        {/* Các trường nhập liệu */}
        <div className="Detail flex gap-5"> 
          <div className="name flex flex-col">
            <input 
              type="text" 
              placeholder="Your Name *" 
              className="p-2 border rounded bg-gray-100" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          <div className="email flex flex-col">
            <input 
              type="email" 
              placeholder="Your Email *" 
              className="p-2 border rounded bg-gray-100" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="phone flex flex-col">
            <input 
              type="tel" 
              placeholder="Your Phone *" 
              className="p-2 border rounded bg-gray-100" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required 
            />
          </div>
        </div>
        <textarea 
          placeholder="Your Message" 
          className="w-full p-2 border rounded bg-gray-100 mt-4" 
          rows="11" 
          value={supportRequest}
          onChange={(e) => setSupportRequest(e.target.value)}
          required // Đảm bảo trường này cũng là bắt buộc
        ></textarea>
        {error && <p className="text-red-500">{error}</p>}
        <div className="button flex justify-end mt-4">
          <button type="submit" className="bg-red-500 text-white rounded px-4 py-2 shadow-lg">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;