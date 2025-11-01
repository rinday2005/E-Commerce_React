import React from 'react';
import tomCruiseImage from '../../assets/Frame 874.svg';
import emmaWatsonImage from '../../assets/Frame 875.svg';
import willSmithImage from '../../assets/Frame 876.svg';
import twitterIcon from '../../assets/Icon-Twitter (1).svg';
import instagramIcon from '../../assets/icon-instagram.svg';
import linkedinIcon from '../../assets/Icon-Linkedin.svg';
import glideImage from '../../assets/Frame 883.svg';

const ExpertSection = () => {
  return (
    <div className="expert flex flex-col ml-15 gap-12 mt-16">
      <div className="GroupAvatar flex justify-between mt-15">
        <div className="avatar flex flex-col items-start">
          <img src={tomCruiseImage} alt="Tom Cruise" />
          <div className="user flex flex-col items-start mt-5">
            <h2 className="font-bold text-4xl">Tom Cruise</h2> {/* Tăng kích thước chữ */}
            <p className="mt-4">Founder & Chairman</p> {/* Thêm khoảng cách phía trên */}
            <div className="app flex gap-2 mt-4"> {/* Thêm khoảng cách phía trên */}
              <img src={twitterIcon} alt="Twitter" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={linkedinIcon} alt="LinkedIn" />
            </div>
          </div>
        </div>
        <div className="avatar2 flex flex-col items-start">
          <img src={emmaWatsonImage} alt="Emma Watson" />
          <div className="user flex flex-col items-start mt-5">
            <h2 className="font-bold text-4xl">Emma Watson</h2> {/* Tăng kích thước chữ */}
            <p className="mt-4">Managing Director</p> {/* Thêm khoảng cách phía trên */}
            <div className="app flex gap-2 mt-4"> {/* Thêm khoảng cách phía trên */}
              <img src={twitterIcon} alt="Twitter" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={linkedinIcon} alt="LinkedIn" />
            </div>
          </div>
        </div>
        <div className="avatar3 flex flex-col items-start">
          <img src={willSmithImage} alt="Will Smith" />
          <div className="user flex flex-col items-start mt-5">
            <h2 className="font-bold text-4xl">Will Smith</h2> {/* Tăng kích thước chữ */}
            <p className="mt-4">Product Designer</p> {/* Thêm khoảng cách phía trên */}
            <div className="app flex gap-2 mt-4"> {/* Thêm khoảng cách phía trên */}
              <img src={twitterIcon} alt="Twitter" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={linkedinIcon} alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
      <div className="glide flex justify-center">
        <img src={glideImage} alt="Glide" />
      </div>
    </div>
  );
};

export default ExpertSection;