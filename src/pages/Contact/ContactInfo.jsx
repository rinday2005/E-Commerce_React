import React from 'react';
import phoneIcon from '../../assets/icons-phone.svg'; 
import mailIcon from '../../assets/icons-mail.svg'; 

const ContactInfo = () => {
  return (
    <div className="information flex gap-5 justify-start mt-11">
      <div className="contact p-10 rounded-lg shadow-lg w-1/1 ml-20"> 
        <div className="call flex flex-col gap-6">
          <h3 className="flex items-center gap-3">
            <img src={phoneIcon} alt="Call To Us" className="w-6 h-6" />
            Call To Us
          </h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <hr className="my-10 border-t-2 border-black" />
        <div className="write flex flex-col gap-6">
          <h3 className="flex items-center gap-3">
            <img src={mailIcon} alt="Write To Us" className="w-6 h-6" />
            Write To Us
          </h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;