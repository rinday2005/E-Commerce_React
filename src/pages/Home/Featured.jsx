import React from 'react';
import ps5Image from '../../assets/ps5-slim-goedkope-playstation_large 1.svg';
import womanImage from '../../assets/attractive-woman-wearing-hat-posing-black-background 1.svg';
import speakerImage from '../../assets/Frame 707.svg';
import perfumeImage from '../../assets/Frame 706.svg';

const Featured = () => {
  return (
    <div className="Feature mt-36 mx-20">
      <div className="content flex items-center">
        <div className="retangle w-5 h-10 rounded-md bg-red-600 mb-5"></div>
        <p className="text-red-600 font-bold text-lg ml-4 mb-5">Featured</p>
      </div>
      <h1 className="text-5xl font-bold mb-20">New Arrival</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* PlayStation 5 */}
        <div className="relative bg-black text-white p-6 rounded-lg">
          <img src={ps5Image} alt="PlayStation 5" className="w-full object-cover" />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold">PlayStation 5</h3>
            <p className="text-lg">Black and White version of the PS5 coming out on sale.</p>
            <a href="#" className="text-white rounded-md py-2 mt-3 inline-block hover:bg-black transition">Shop Now</a>
          </div>
        </div>

        {/* Cột bên phải */}
        <div className="flex flex-col gap-4">
          {/* Women's Collections */}
          <div className="relative bg-black text-white p-6 rounded-lg flex items-center">
            <div className="w-1/2">
              <h3 className="text-2xl font-bold">Women's Collections</h3>
              <p className="text-lg">Featured woman collections that give you another vibe.</p>
              <a href="#" className="text-white rounded-md py-4 mt-3 inline-block hover:bg-black transition">Shop Now</a>
            </div>
            <img src={womanImage} alt="Women's Collections" className="w-1/2 object-cover rounded-lg" />
          </div>

          {/* Speakers & Perfume */}
          <div className="grid grid-cols-2 gap-4">
            {/* Speakers */}
            <div className="relative bg-black text-white p-4 rounded-lg flex flex-col">
              <img src={speakerImage} alt="Speakers" className="w-full object-cover mb-2" />
              <div className="ml-2">
                <h3 className="text-xl font-bold">Speakers</h3>
                <p className="text-lg">Amazon wireless speakers</p>
                <a href="#" className="text-white rounded-md py-2 mt-2 inline-block hover:bg-black transition">Shop Now</a>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative bg-black text-white p-4 rounded-lg flex flex-col">
              <img src={perfumeImage} alt="Perfume" className="w-full object-cover mb-2" />
              <div className="ml-2">
                <h3 className="text-xl font-bold">Perfume</h3>
                <p className="text-lg">GUCCI INTENSE OUD EDP</p>
                <a href="#" className="text-white rounded-md py-2 mt-2 inline-block hover:bg-black transition">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;