import React from 'react';
import aboutImg from '../assets/placeholder2.jpg';
import { useVisibilityAnimation } from '../useVisibilityAnimation';

const S1 = () => {
    const { ref, animationClass, animationClassUp } = useVisibilityAnimation();

    return (
        <div>
            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-gray-800' id='s1'>
                <div className='text-center py-6'>
                    <h2 className='text-4xl text-white font-semibold'>S1</h2>
                </div>

                
                <div className={`md:w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-10`}>
                    <div ref={ref} className={`${animationClassUp}`}>
                        <img src={aboutImg} className='mb-10' alt=''/>
                    </div>
                    <div  className={`md:w-full mx-auto ${animationClassUp}`}>
                        <h2 className='md:w-full text-2xl text-white font-semibold mb-4'>The unseen values of s1</h2>
                        <p className='md:w-full text-sm text-justify text-gray-300 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default S1;