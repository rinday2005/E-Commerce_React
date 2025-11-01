import React from 'react';
import leftArrow from '../../assets/icons_arrow-left.svg';
import rightArrow from '../../assets/icons arrow-right.svg';
import phoneImage from '../../assets/Category-CellPhone.svg';
import computerImage from '../../assets/Category-Computer.svg';
import smartwatchImage from '../../assets/Category-SmartWatch.svg';
import cameraImage from '../../assets/Category-Camera.svg';
import headphoneImage from '../../assets/Category-Headphone.svg';
import gamepadImage from '../../assets/Category-Gamepad.svg';

const Categories = () => {
  return (
    <div className="categories mt-36 ml-32">
      <div className="content flex items-center">
        <div className="retangle w-5 h-10 rounded-md bg-red-600 mb-5"></div>
        <p className="text-red-600 font-bold text-lg ml-4 mb-5">Categories</p>
      </div>
      <div className="bbc flex justify-between items-center mb-4">
        <h1 className="text-5xl font-bold">Browse By Category</h1>
        <div className="btt flex items-center gap-2">
          <div className="circle p-2 border border-gray-400 rounded-full hover:bg-orange-600 transition duration-300">
            <img src={leftArrow} alt="Left Arrow" />
          </div>
          <div className="circle p-2 border border-gray-400 rounded-full hover:bg-orange-600 transition duration-300">
            <img src={rightArrow} alt="Right Arrow" />
          </div>0
        </div>
      </div>
      <div className="board flex justify-between mt-14">
        {/* Category Item */}
        <div className="accessory flex flex-col items-center hover:bg-orange-700 transition duration-300 p-4 border border-gray-300 rounded-md w-1/6 mx-2"> {/* Thêm mx-2 để tạo khoảng cách */}
          <img src={phoneImage} alt="Phones" className="w-16 h-16" />
          <div className="name mt-2">
            <p>Phones</p>
          </div>
        </div>
        <div className="box_L flex flex-col items-center hover:bg-orange-700 transition duration-300 p-4 border border-gray-300 rounded-md w-1/6 mx-2">
          <img src={computerImage} alt="Computers" className="w-16 h-16" />
          <div className="name mt-2">
            <p>Computers</p>
          </div>
        </div>
        <div className="box_L flex flex-col items-center hover:bg-orange-700 transition duration-300 p-4 border border-gray-300 rounded-md w-1/6 mx-2">
          <img src={smartwatchImage} alt="SmartWatch" className="w-16 h-16" />
          <div className="name mt-2">
            <p>SmartWatch</p>
          </div>
        </div>
        <div className="accessory flex flex-col items-center hover:bg-orange-700 transition duration-300 p-4 border border-gray-300 rounded-md w-1/6 mx-2">
          <img src={cameraImage} alt="Camera" className="w-16 h-16" />
          <div className="name mt-2">
            <p>Camera</p>
          </div>
        </div>
        <div className="box_L flex flex-col items-center hover:bg-orange-700 transition duration-300 p-4 border border-gray-300 rounded-md w-1/6 mx-2">
          <img src={headphoneImage} alt="HeadPhone" className="w-16 h-16" />
          <div className="name mt-2">
            <p>HeadPhone</p>
          </div>
        </div>
        <div className="accessory flex flex-col items-center hover:bg-orange-700 transition duration-300 p-4 border border-gray-300 rounded-md w-1/6 mx-2">
          <img src={gamepadImage} alt="Gaming" className="w-16 h-16" />
          <div className="name mt-2">
            <p>Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories