import React from 'react';
import freeDeliveryImage from '../../assets/Services.svg';
import customerServiceImage from '../../assets/Services (1).svg';
import moneyBackImage from '../../assets/Services (2).svg';

const Quality = () => {
  return (
    <div className="Quality flex justify-center gap-20 mt-20">
      <div className="quality1 flex flex-col items-center">
        <img src={freeDeliveryImage} alt="Free Delivery" />
        <h3 className="font-bold">FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="quality2 flex flex-col items-center">
        <img src={customerServiceImage} alt="Customer Service" />
        <h3 className="font-bold">24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="quality3 flex flex-col items-center">
        <img src={moneyBackImage} alt="Money Back Guarantee" />
        <h3 className="font-bold">MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Quality;