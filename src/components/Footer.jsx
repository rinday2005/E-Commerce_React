import React from 'react';
import Vector5 from '../assets/Vector (5).svg';
import QrCode from '../assets/Qr Code.svg';
import AppStore from '../assets/Appstore.svg';
import GooglePlay from '../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg';
import TwitterIcon from '../assets/Icon-Twitter.svg';
import LinkedInIcon from '../assets/Group.svg';
import InstagramIcon from '../assets/Vector (6).svg';
import FacebookIcon from '../assets/Vector (7).svg';

function Footer() {
  return (
    <div className="Footer bg-black text-white mt-40">
      <div className="FooterTop py-9 px-34 flex justify-between items-start">
        {/* Column 1 */}
        <div className="Exclusive flex flex-col justify-between gap-4 text-left ml-20">
          <h1 className="text-3xl font-bold">Exclusive</h1>
          <h3 className="text-2xl">Subscribe</h3>
          <div className="text3 text-base">Get 10% off your first order</div>
          <div className="Send flex items-center border border-white py-1 px-2.5">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-black text-white outline-none"
            />
            <a href="">
              <img src={Vector5} alt="" />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="column flex flex-col gap-4 text-left">
          <h2 className="text-xl">Support</h2>
          <div className="text-base">
            <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="column flex flex-col gap-4 text-left">
          <h2 className="text-xl">Account</h2>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a href="#" className="text-base hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="text-base hover:underline">
                Login / Register
              </a>
            </li>
            <li>
              < a href="#" className="text-base hover:underline">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="text-base hover:underline">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="text-base hover:underline">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="column flex flex-col gap-4 text-left">
          <h2 className="text-xl">Quick Link</h2>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a href="#" className="text-base hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-base hover:underline">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-base hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-base hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="column flex flex-col gap-4 items-start text-left mr-20">
          <h2 className="text-xl">Download App</h2>
          <div className="text-base">Save $3 with App New User Only</div>
          <div className="qr-code flex items-start">
            <img src={QrCode} alt="QR Code" className="mr-4" />
            <div className="app-links flex flex-col items-start">
              <a href="#" className="mb-2">
                <img src={AppStore} alt="App Store" />
              </a>
              <a href="#">
                <img src={GooglePlay} alt="Google Play" />
              </a>
            </div>
          </div>
          <div className="social-icons flex gap-6 mt-4">
            <a href="#">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="#">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="#">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="FooterBottom py-4 flex flex-col items-center">
        <div className="copy flex items-center text-base opacity-30">
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;