import React from 'react';
import leftArrow from '../../assets/icons_arrow-left.svg';
import rightArrow from '../../assets/icons arrow-right.svg';
import product1Image from '../../assets/Frame 611.svg';
import product2Image from '../../assets/Frame 612.svg';
import product3Image from '../../assets/Frame 613.svg';
import product4Image from '../../assets/Frame 614.svg';
import heartImage from '../../assets/Fill Heart.svg';
import eyeImage from '../../assets/Fill Eye.svg';
import starImage from '../../assets/Five star.svg'; // Hình ảnh sao
import fourStarImage from '../../assets/Four Star.svg'; // Hình ảnh cho sản phẩm 2
import fourHalfStarImage from '../../assets/Four Half Star.svg'; // Hình ảnh cho sản phẩm 4

const Today = () => {
  return (
    <div className="today mt-20 ml-32">
      <div className="content flex items-center mb-4">
        <div className="retangle w-5 h-10 rounded-md bg-red-600 mb-5"></div>
        <p className="text-red-600 font-bold text-lg ml-3 mb-5">Today's</p>
      </div>
      <div className="FlashSales flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold mb-3">Flash Sales</h1>
        <div className="btt flex items-center gap-2">
          <div className="circle p-2 border border-gray-400 rounded-full hover:bg-orange-600 transition duration-300">
            <img src={leftArrow} alt="Left Arrow" />
          </div>
          <div className="circle p-2 border border-gray-400 rounded-full hover:bg-orange-600 transition duration-300">
            <img src={rightArrow} alt="Right Arrow" />
          </div>
        </div>
      </div>
      <div className="products grid grid-cols-4 gap-6 mt-4"> {/* Sử dụng grid để căn chỉnh */}
        {/* Product 1 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <div className="discount bg-red-600 text-white rounded-md p-1 absolute top-0 left-0">
                <p>-40%</p>
              </div>
              <img src={product1Image} alt="Product 1" className="w-full h-auto" />
              <div className="icon flex flex-col gap-2 absolute top-0 right-0">
                <div className="HeartEyes">
                  <img src={heartImage} alt="Heart" className="w-6 h-6" />
                </div>
                <div className="HeartEyes">
                  <img src={eyeImage} alt="Eye" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="last">
            <div className="container bg-black text-white rounded-md text-center p-2 hover:bg-orange-600 transition duration-300">
              <p>Add To Cart</p>
            </div>
          </div>
          <div className="infor mt-4">
            <div className="name">
              <h3>HAVIT HV-G92 Gamepad</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$120</div>
              <div className="original line-through opacity-50">$160</div>
            </div>
            <div className="rating flex items-center">
              <div className="star">
                <img src={starImage} alt="Rating" />
              </div>
              <div className="review">
                <p>(88)</p>
              </div>
            </div>
          </div>
        </div>
        {/* Product 2 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <div className="discount bg-red-600 text-white rounded-md p-1 absolute top-0 left-0">
                <p>-35%</p>
              </div>
              <img src={product2Image} alt="Product 2" className="w-full h-auto" />
              <div className="icon flex flex-col gap-2 absolute top-0 right-0">
                <div className="HeartEyes">
                  <img src={heartImage} alt="Heart" className="w-6 h-6" />
                </div>
                <div className="HeartEyes">
                  <img src={eyeImage} alt="Eye" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="last">
            <div className="container bg-black text-white rounded-md text-center p-2 hover:bg-orange-600 transition duration-300">
              <p>Add To Cart</p>
            </div>
          </div>
          <div className="infor mt-4">
            <div className="name">
              <h3>AK-900 Wired Keyboard</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$960</div>
              <div className="original line-through opacity-50">$1160</div>
            </div>
            <div className="rating flex items-center">
              <div className="star">
                <img src={fourStarImage} alt="Rating" />
              </div>
              <div className="review">
                <p>(75)</p>
              </div>
            </div>
          </div>
        </div>
        {/* Product 3 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <div className="discount bg-red-600 text-white rounded-md p-1 absolute top-0 left-0">
                <p>-30%</p>
              </div>
              <img src={product3Image} alt="Product 3" className="w-full h-auto" />
              <div className="icon flex flex-col gap-2 absolute top-0 right-0">
                <div className="HeartEyes">
                  <img src={heartImage} alt="Heart" className="w-6 h-6" />
                </div>
                <div className="HeartEyes">
                  <img src={eyeImage} alt="Eye" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="last">
            <div className="container bg-black text-white rounded-md text-center p-2 hover:bg-orange-600 transition duration-300">
              <p>Add To Cart</p>
            </div>
          </div>
          <div className="infor mt-4">
            <div className="name">
              <h3>IPS LCD Gaming Monitor</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$370</div>
              <div className="original line-through opacity-50">$400</div>
            </div>
            <div className="rating flex items-center">
              <div className="star">
                <img src={starImage} alt="Rating" />
              </div>
              <div className="review">
                <p>(99)</p>
              </div>
            </div>
          </div>
        </div>
        {/* Product 4 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <div className="discount bg-red-600 text-white rounded-md p-1 absolute top-0 left-0">
                <p>-25%</p>
              </div>
              <img src={product4Image} alt="Product 4" className="w-full h-auto" />
              <div className="icon flex flex-col gap-2 absolute top-0 right-0">
                <div className="HeartEyes">
                  <img src={heartImage} alt="Heart" className="w-6 h-6" />
                </div>
                <div className="HeartEyes">
                  <img src={eyeImage} alt="Eye" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="last">
            <div className="container bg-black text-white rounded-md text-center p-2 hover:bg-orange-600 transition duration-300">
              <p>Add To Cart</p>
            </div>
          </div>
          <div className="infor mt-4">
            <div className="name">
              <h3>S-Series Comfort Chair</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$375</div>
              <div className="original line-through opacity-50">$400</div>
            </div>
            <div className="rating flex items-center">
              <div className="star">
                <img src={fourHalfStarImage} alt="Rating" />
              </div>
              <div className="review">
                <p>(99)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btt_view flex justify-center mt-20"> 
        <div className="container bg-orange-600 rounded-md p-4 mb-6 hover:bg-black transition duration-300 w-48 text-center"> 
          <a href="#">
            <button className="text-white">View All Products</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Today;