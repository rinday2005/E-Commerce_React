import React from 'react';
import storyImage from '../../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1 (1).svg';

const Story = () => {
  return (
    <div className="story flex gap-10 ml-36 items-start"> 
      <div className="text flex flex-col justify-center gap-4 w-1/2"> 
        <h1 className="text-8xl font-bold mt-20">Our Story</h1> 
        <p className="text-xl mt-10">
          Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported <br /> by a wide range of tailored marketing, data and service solutions,<br /> Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
        </p>
        <p className="text-xl mt-4"> 
          Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories <br /> ranging from consumer.
        </p>
      </div>
      <div className="image w-100 flex justify-center"> 
        <img src={storyImage} alt="Story" className="w-full h-auto" /> 
      </div>
    </div>
  );
};

export default Story;