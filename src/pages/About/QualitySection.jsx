import React from 'react';
import freeDeliveryIcon from '../../assets/Services.svg';
import customerServiceIcon from '../../assets/Services (1).svg';
import moneyBackIcon from '../../assets/Services (2).svg';

const QualitySection = () => {
  return (
    <div className="Quality flex justify-center gap-20 mt-32">
      <div className="quality1 flex flex-col items-center text-center">
        <img src={freeDeliveryIcon} alt="Free Delivery" className="mb-4" />
        <h3 className="font-bold text-lg">FREE AND FAST DELIVERY</h3>
        <p className="mt-2">Free delivery for all orders over $140</p>
      </div>
      <div className="quality2 flex flex-col items-center text-center">
        <img src={customerServiceIcon} alt="Customer Service" className="mb-4" />
        <h3 className="font-bold text-lg">24/7 CUSTOMER SERVICE</h3>
        <p className="mt-2">Friendly 24/7 customer support</p>
      </div>
      <div className="quality3 flex flex-col items-center text-center">
        <img src={moneyBackIcon} alt="Money Back Guarantee" className="mb-4" />
        <h3 className="font-bold text-lg">MONEY BACK GUARANTEE</h3>
        <p className="mt-2">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default QualitySection;