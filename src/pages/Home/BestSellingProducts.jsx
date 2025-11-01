import React from 'react';
import product1Image from '../../assets/Frame 605.svg';
import product2Image from '../../assets/Frame 606.svg';
import product3Image from '../../assets/Frame 610.svg';
import product4Image from '../../assets/Frame 612 (1).svg';
import featuredImage from '../../assets/Frame 600.svg';
import heartImage from '../../assets/Fill Heart.svg';
import eyeImage from '../../assets/Fill Eye.svg';
import starImage from '../../assets/Five star.svg'; // Hình ảnh sao
import fourHalfStarImage from '../../assets/Four Half Star.svg'; // Hình ảnh sao cho sản phẩm 2

const BestSellingProducts = () => {
  return (
    <div className="today mt-36 ml-32">
      <div className="content flex items-center mb-4">
        <div className="retangle w-5 h-10 rounded-md bg-red-600 mb-5"></div>
        <p className="text-red-600 font-bold text-lg ml-3 mb-5">This Month</p>
      </div>
      <div className="FlashSales flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold mb-3">Best Selling Products</h1>
        <div className="click">
          <button className="bg-orange-600 rounded-md p-4 mb-6 hover:bg-black transition duration-300 w-48 text-center text-white">View All</button>
        </div>
      </div>
      <div className="products grid grid-cols-4 gap-6 mt-4"> {/* Sử dụng grid để căn chỉnh */}
        {/* Product 1 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <img src={product1Image} alt="The north coat" className="w-full h-auto" />
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
              <h3>The north coat</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$260</div>
              <div className="original line-through opacity-50">$360</div>
            </div>
            <div className="rating flex items-center">
              <div className="star">
                <img src={starImage} alt="Rating" />
              </div>
              <div className="review">
                <p>(65)</p>
              </div>
            </div>
          </div>
        </div>
        {/* Product 2 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <img src={product2Image} alt="Gucci duffle bag" className="w-full h-auto" />
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
              <h3>Gucci duffle bag</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$960</div>
              <div className="original line-through opacity-50">$1160</div>
            </div>
            <div className="rating flex items-center">
              <div className="star">
                <img src={fourHalfStarImage} alt="Rating" />
              </div>
              <div className="review">
                <p>(65)</p>
              </div>
            </div>
          </div>
        </div>
        {/* Product 3 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <img src={product3Image} alt="RGB liquid CPU Cooler" className="w-full h-auto" />
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
              <h3>RGB liquid CPU Cooler</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$160</div>
              <div className="original line-through opacity-50">$170</div>
            </div>
            <div className="rating flex items-center">
              <div className="star">
                <img src={fourHalfStarImage} alt="Rating" />
              </div>
              <div className="review">
                <p>(65)</p>
              </div>
            </div>
          </div>
        </div>
        {/* Product 4 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <img src={product4Image} alt="Small BookSelf" className="w-full h-auto" />
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
              <h3>Small BookSelf</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$360</div>
            </div>
            <div className="rating flex items-center">
              <div className="star">
                <img src={starImage} alt="Rating" />
              </div>
              <div className="review">
                <p>(65)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="playst_img flex justify-center mt-6"> {/* Căn giữa hình ảnh */}
        <img src={featuredImage} alt="" className="mt-32" /> {/* Thêm khoảng cách trên */}
      </div>
    </div>
  );
};

export default BestSellingProducts;