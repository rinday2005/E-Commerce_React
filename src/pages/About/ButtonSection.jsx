import React from 'react';
import freeDeliveryImage from '../../assets/Services (7).svg';
import monthlySaleImage from '../../assets/Services (4).svg';
import activeCustomersImage from '../../assets/Services (5).svg';
import annualSalesImage from '../../assets/Services (6).svg';

const ButtonSection = () => {
  return (
    <div className="button flex justify-between mt-20 w-full px-10"> {/* Sử dụng justify-between và thêm padding */}
      <button className="border-none rounded-lg text-lg flex flex-col items-center bg-transparent shadow-lg hover:bg-red-600 p-4 w-64">
        <img src={freeDeliveryImage} alt="Free Delivery" className="mb-2" />
        <h1 className="font-bold text-2xl">10.5k</h1>
        <p>Sallers active our site</p>
      </button>
      <button className="border-none rounded-lg text-lg flex flex-col items-center bg-transparent shadow-lg hover:bg-red-600 p-4 w-64">
        <img src={monthlySaleImage} alt="Monthly Sale" className="mb-2" />
        <h1 className="font-bold text-2xl">33k</h1>
        <p>Monthly Product Sale</p>
      </button>
      <button className="border-none rounded-lg text-lg flex flex-col items-center bg-transparent shadow-lg hover:bg-red-600 p-4 w-64">
        <img src={activeCustomersImage} alt="Active Customers" className="mb-2" />
        <h1 className="font-bold text-2xl">45.5k</h1>
        <p>Customers active on our site</p>
      </button>
      <button className="border-none rounded-lg text-lg flex flex-col items-center bg-transparent shadow-lg hover:bg-red-600 p-4 w-64">
        <img src={annualSalesImage} alt="Annual Sales" className="mb-2" />
        <h1 className="font-bold text-2xl">25k</h1>
        <p>Annual gross sales on our site</p>
      </button>
    </div>
  );
};

export default ButtonSection;