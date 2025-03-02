import React from 'react';
import { Carousel } from 'flowbite-react';
import b1 from '../../assets/placeholder3.jpg';

import { HiOutlineArrowSmallDown } from "react-icons/hi2";
import { Link } from 'react-scroll';


const Slides3 = () => {
  
    return (
      <div className='bg-neutralSilver' id='slides'>
        <div className='max-w-screen-2xl mx-auto min-h-screen h-screen '>
            <Carousel leftControl=" " rightControl=" " indicators={false} className='w-full mx-auto'>
                <div className="flex h-full items-center justify-center">
                    <img src={b1} alt="" />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
            </Carousel>

            <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 text-center">
                <h1 className='text-6xl lg:text-8xl  font-semibold text-white lg:whitespace-nowrap'>TEMPLATE</h1>   
            </div>

            {/* Scroll-down arrow overlay */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <Link to="P3" spy={true} smooth={true} offset={-100} key={"P3"} className="block cursor-pointer">
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
  
  export default Slides3;