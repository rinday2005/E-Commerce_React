import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="main">
      <div className="home flex gap-2 mt-16 pl-36">
        <a href="/" className="text-black opacity-50 hover:opacity-100">Home</a>
        <p>/</p>
        <a href="/contact" className="text-black opacity-50 hover:opacity-100">Contact</a>
      </div>
      <div className="flex justify-between mt-14 gap-10"> {/* Thêm gap giữa hai component */}
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;