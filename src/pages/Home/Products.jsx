import React from 'react';
import leftArrow from '../../assets/icons_arrow-left.svg';
import rightArrow from '../../assets/icons arrow-right.svg';
import product1Image from '../../assets/Frame 604.svg';
import product2Image from '../../assets/Frame 604 (1).svg';
import product3Image from '../../assets/Frame 604 (2).svg';
import product4Image from '../../assets/Frame 608.svg';
import product5Image from '../../assets/Frame 608 (1).svg';
import product6Image from '../../assets/Frame 608 (2).svg';
import product7Image from '../../assets/Frame 608 (3).svg';
import heartImage from '../../assets/Fill Heart.svg';
import eyeImage from '../../assets/Fill Eye.svg';
import starImage from '../../assets/Five star.svg'; // Hình ảnh sao
import fourStarImage from '../../assets/Four Star.svg'; // Hình ảnh cho sản phẩm 2
import fourHalfStarImage from '../../assets/Four Half Star.svg'; // Hình ảnh sao cho sản phẩm 4
import colourChangeImage from '../../assets/Colour Chnage.svg'; // Hình ảnh cho sản phẩm 5
import colourChangeImage1 from '../../assets/Colour Chnage (1).svg'; // Hình ảnh cho sản phẩm 6
import colourChangeImage2 from '../../assets/Colour Chnage (2).svg'; // Hình ảnh cho sản phẩm 7 và 8

const Products = () => {
  return (
    <div className="today mt-36 ml-32">
      <div className="content flex items-center mb-4">
        <div className="retangle w-5 h-10 rounded-md bg-red-600 mb-5"></div>
        <p className="text-red-600 font-bold text-lg ml-3 mb-5">Our Products</p>
      </div>
      <div className="FlashSales flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold mb-3">Explore Our Products</h1>
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
              <div className="discount bg-white">
                {/* Thêm nội dung cho discount nếu cần */}
              </div>
              <div className="image1">
                <img src={product1Image} alt="Breed Dry Dog Food" className="w-full h-auto" />
              </div>
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
              <h3>Breed Dry Dog Food</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$100</div>
              <img src={fourStarImage} alt="Rating" />
              <p>(35)</p>
            </div>
          </div>
        </div>
        {/* Product 2 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <div className="discount bg-white">
                {/* Thêm nội dung cho discount nếu cần */}
              </div>
              <div className="image2">
                <img src={product2Image} alt="CANON EOS DSLR Camera" className="w-full h-auto" />
              </div>
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
              <h3>CANON EOS DSLR Camera</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$360</div>
              <img src={starImage} alt="Rating" />
              <p>(95)</p>
            </div>
          </div>
        </div>
        {/* Product 3 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <div className="discount bg-white">
                {/* Thêm nội dung cho discount nếu cần */}
              </div>
              <div className="image3">
                <img src={product3Image} alt="ASUS FHD Gaming Laptop" className="w-full h-auto" />
              </div>
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
              <h3>ASUS FHD Gaming Laptop</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$700</div>
              <img src={fourHalfStarImage} alt="Rating" />
              <p>(325)</p>
            </div>
          </div>
        </div>
        {/* Product 4 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <div className="discount bg-white">
                {/* Thêm nội dung cho discount nếu cần */}
              </div>
              <div className="image4">
                <img src={product4Image} alt="Kids Electric Car" className="w-full h-auto" />
              </div>
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
              <h3>Kids Electric Car</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$960</div>
              <img src={starImage} alt="Rating" />
              <p>(65)</p>
            </div>
          </div>
        </div>
        {/* Product 5 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <div className="discount bg-white">
                {/* Thêm nội dung cho discount nếu cần */}
              </div>
              <div className="image5">
                <img src={product5Image} alt="Jr. Zoom Soccer Cleats" className="w-full h-auto" />
              </div>
              <div className="icon flex flex-col gap-2 absolute top-0 right-0">
                <div className="HeartEyes">
                  <img src={heartImage} alt="Heart" className="w-6 h-6" />
                </div>
                < div className="HeartEyes">
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
              <h3>Jr. Zoom Soccer Cleats</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$1160</div>
              <img src={fourHalfStarImage} alt="Rating" />
              <p>(35)</p>
              <p>4.5/5</p>
            </div>
          </div>
          <img src={colourChangeImage} alt="Colour Change" className="size-14 mt-2" />
        </div>
        {/* Product 6 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <div className="discount bg-white">
                {/* Thêm nội dung cho discount nếu cần */}
              </div>
              <div className="image6">
                <img src={product6Image} alt="GP11 Shooter USB Gamepad" className="w-full h-auto" />
              </div>
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
              <h3>GP11 Shooter USB Gamepad</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$660</div>
              <img src={fourHalfStarImage} alt="Rating" />
              <p>(55)</p>
              <p>4.5/5</p>
            </div>
          </div>
          <img src={colourChangeImage1} alt="Colour Change" className="size-14 mt-2" />
        </div>
        {/* Product 7 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <div className="discount bg-white">
                {/* Thêm nội dung cho discount nếu cần */}
              </div>
              <div className="image7">
                <img src={product7Image} alt="Quilted Satin Jacket" className="w-full h-auto" />
              </div>
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
              <h3>Quilted Satin Jacket</h3>
            </div>
            <div className="price flex gap-2">
              <div className="reduced text-red-600">$660</div>
              <img src={fourHalfStarImage} alt="Rating" />
              <p>(55)</p>
              <p>4.5 /5</p>
            </div>
          </div>
          <img src={colourChangeImage2} alt="Colour Change" className="size-14 mt-2" />
        </div>
        {/* Product 8 */}
        <div className="accessory transition-transform transform hover:scale-105 shadow-lg bg-white rounded-lg p-4">
          <div className="img relative">
            <div className="first">
              <div className="discount bg-white">
                {/* Thêm nội dung cho discount nếu cần */}
              </div>
              <div className="image8">
                <img src={product4Image} alt="Small BookSelf" className="w-full h-auto" />
              </div>
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
              <img src={fourHalfStarImage} alt="Rating" />
              <p>(65)</p>
              <p>4.5/5</p>
            </div>
          </div>
          <img src={colourChangeImage2} alt="Colour Change" className="size-14 mt-2" />
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

export default Products;