import React from 'react';
import vectorImage from '../../assets/Vector (9).svg';
import bannerImage from '../../assets/Frame 560.svg';

const List = () => {
  return (
    <div className="list flex justify-between mt-10 ml-32">
      <div className="left flex flex-col gap-4">
        <a href="" className="flex items-center hover:text-orange-600">
          Woman's Fashion <img src={vectorImage} alt="Arrow" className="ml-14" />
        </a>
        <a href="" className="flex items-center hover:text-orange-600">
          Men's Fashion <img src={vectorImage} alt="Arrow" className="ml-20" />
        </a>
        <a href="" className="hover:text-orange-600">Electronics</a>
        <a href="" className="hover:text-orange-600">Home & Lifestyle</a>
        <a href="" className="hover:text-orange-600">Medicine</a>
        <a href="" className="hover:text-orange-600">Sports & Outdoor</a>
        <a href="" className="hover:text-orange-600">Baby's & Toys</a>
        <a href="" className="hover:text-orange-600">Groceries & Pets</a>
        <a href="" className="hover:text-orange-600">Health & Beauty</a>
      </div>
      <div className="vertical-line border-l border-black h-[385px] opacity-20 mx-10 mt-[-40px]"></div>
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default List;