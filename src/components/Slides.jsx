import React from 'react';
import { Carousel } from 'flowbite-react';
import banner1 from '../assets/placeholder1.jpg';
import banner2 from '../assets/placeholder2.jpg';
import banner3 from '../assets/placeholder3.jpg';
import banner4 from '../assets/placeholder4.jpg';
import { HiOutlineArrowSmallDown } from "react-icons/hi2";
import { Link } from 'react-scroll';


const Slides = () => {
  
    return (
      <div className='bg-neutralSilver' id='slides'>
        <div className='max-w-screen-2xl mx-auto min-h-screen h-screen '>
            <Carousel leftControl=" " rightControl=" " indicators={false} className='w-full mx-auto'>
                <div className="flex h-full items-center justify-center">
                    <img src={banner1} alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                <div className="flex h-full items-center justify-center">
                    <img src={banner2} alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                <div className="flex h-full items-center justify-center">
                    <img src={banner3} alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                <div className="flex h-full items-center justify-center">
                    <img src={banner4} alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
            </Carousel>

            <div className="absolute left-1/2 bottom-20 transform text-center -translate-x-1/2">
                <h1 className='text-6xl lg:text-8xl font-semibold text-white'>ARQUITECTURE</h1>
                <h1 className='text-6xl lg:text-8xl font-semibold text-white'>AGENCY</h1>
            </div>

            {/* Scroll-down arrow overlay */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <Link to="home" spy={true} smooth={true} offset={-100} key={"home"} className="block cursor-pointer">
                    <HiOutlineArrowSmallDown
                        className="text-gray-200 hover:opacity-40 text-3xl"
                        aria-label="Scroll down"
                    />
                </Link>
            </div>
        </div>
      </div>
    )
  }
  
  export default Slides;