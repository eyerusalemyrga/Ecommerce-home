"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8">
        { }
      <div>
      <h3 className="font-bold text-xl mb-3">Exclusive</h3>
          <span className="text-sm mb-2 block">Subscribe</span>
          <span className="text-xs mb-4 block">Get 10% off your first order</span>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-3 py-2 rounded-l outline-none text-xs"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r text-xs font-semibold">→</button>
          </div>    
      </div>
        { }
       <div>
        <h4 className="font-bold mb-2">Support</h4>
          <p className="text-xs mb-1">71 Illey saori, Dhaka, DH 1515, Bangladesh</p>
          <p className="text-xs mb-1">exclusive@gmail.com</p>
          <p className="text-xs mb-1">+0885-65896-5589</p>  
      </div>
        { }
      <div>
          <h4 className="font-bold mb-2">Account</h4>
          <ul className="text-xs space-y-1">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
      </div>
        { }
      <div>
       <h4 className="font-bold mb-2">Quick Link</h4>
          <ul className="text-xs space-y-1">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
      </div>
        { }
        <div>
          <h4 className="font-bold mb-2">Download App</h4>
          <span className="text-xs block mb-2">Save $3 with App New User Only</span>
          <div className="flex items-center mb-2">
            <Image
              src="/images/qr code.jpg"
              alt="QR code"
              width={40}
              height={40}
              className="mr-2"
            />
         <div className="flex flex-col gap-2">
              <Image
                src="/images/google play.jpg"
                alt="Google Play"
                width={20}
                height={14}
              />
          <Image
                src="/images/app store.jpg"
                alt="App Store"
                width={20}
                height={24}
              />
            </div>
      </div>
          <div className="flex gap-3 mt-2">
            <FaFacebookF className="text-white hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="text-white hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="text-white hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-400">
        © Copyright Exclusive 2022. All right reserved.
      </div>
    </footer>
  );
}