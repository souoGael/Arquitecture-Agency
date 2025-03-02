import React from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useVisibilityAnimation } from '../../useVisibilityAnimation';
import { useNavigate } from 'react-router-dom';

import b1 from '../../assets/placeholder4.jpg';
import b2 from '../../assets/placeholder4.jpg';
import b3 from '../../assets/placeholder4.jpg';
import b4 from '../../assets/placeholder4.jpg';



const P4 = () => {
    const { ref, animationClassUp } = useVisibilityAnimation();

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/portfolio/${id}`); // Redirects to /newpage
        window.scrollTo(0, 0); // Scrolls to the top
    };

    return (
        <>
            <div className='md:px-14 mt-20 max-w-screen-2xl mx-auto' id='P4'>
                <div className='px-4 lg:px-60 max-w-screen-2xl mx-auto'>
                    <h2 className='text-xl text-neutralDGrey text-justify font-semibold mb-2'>
                        [Company Name] is an architecture and design studio based in [Location], fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.
                    </h2>
                    <div className='md:my-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <p className='md:w-full text-md text-gray-800 text-justify'>
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida. 
                            
                        </p>
                        <div className='justify-items-end'>
                            <p className='md:w-5/6 text-md text-gray-800 text-justify'>
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add project pictures */}
            {/* ref={ref} className={`px-4 md:px-14 mb-20 ${animationClassUp}`} */}
            <div className="px-4 md:px-14 justify-items-center grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className='mb-10'>
                    <img className="h-auto max-w-full" src={b1} alt=''/>
                </div>
                <div className='mb-10'>
                    <img className="h-auto max-w-full" src={b2} alt=''/>
                </div>
                <div  className='mb-10'>
                    <img className="h-auto max-w-full" src={b3} alt=''/>
                </div>
                <div className='mb-10'>
                    <img className="h-auto max-w-full" src={b4} alt=''/>
                </div>
            </div>

            <div className='md:px-14 px-4'>
                <hr className="border-t-2 border-gray-100 my-6" />
            </div>

            <div className='md:px-14 px-4 flex items-center justify-between w-full mb-20'>
                <div className="flex items-center space-x-6 cursor-pointer transform transition duration-300 hover:-translate-x-1" onClick={() => handleClick("p3")}>
                    <BsArrowLeft className="text-neutralDGrey text-4xl" aria-label="left"/>
                    <p className="text-neutralDGrey text-sm">P3</p> 
                </div>
                <div className="flex items-center space-x-6 cursor-pointer transform transition duration-300 hover:translate-x-1" onClick={() => handleClick("p1")}>
                    <p className="text-neutralDGrey text-sm">P1</p> 
                    <BsArrowRight className="text-neutralDGrey text-4xl" aria-label="right"/>
                </div>
            </div>
        </>
        
    )
} 

export default P4;
